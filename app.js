// StudyNotes TN - Application Logic
// Features: Instant Search, Subject & Class 6-12 Explorer, PDF Generation/Download,
// PYQ 2019-2025 Filters, Important Questions, Dark Mode, Bookmarks, and Bilingual UI.

class StudyNotesApp {
  constructor() {
    this.currentSubject = "maths";
    this.currentClass = "10";
    this.currentTab = "chaptersTab";
    this.activeYearFilter = "all";
    this.bookmarks = JSON.parse(localStorage.getItem("studynotes_bookmarks") || "[]");
    this.theme = localStorage.getItem("studynotes_theme") || "light";
    this.currentQuoteIndex = 0;

    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.initElements();
    this.bindEvents();
    this.renderHomeSubjectCards();
    this.renderClassPills();
    this.updateBookmarkBadge();
    this.startQuotesRotation();

    // Default to homepage view
    this.showHomeView();
  }

  initElements() {
    // Nav & Controls
    this.themeToggleBtn = document.getElementById("themeToggleBtn");
    this.homeBrandBtn = document.getElementById("homeBrandBtn");
    this.openBookmarksBtn = document.getElementById("openBookmarksBtn");
    this.bookmarkCount = document.getElementById("bookmarkCount");

    // Sections
    this.homeSubjectsSection = document.getElementById("homeSubjectsSection");
    this.subjectDetailSection = document.getElementById("subjectDetailSection");
    this.subjectsGrid = document.getElementById("subjectsGrid");
    this.subjectStreamFilters = document.getElementById("subjectStreamFilters");

    // Breadcrumbs
    this.breadcrumbHome = document.getElementById("breadcrumbHome");
    this.breadcrumbSubject = document.getElementById("breadcrumbSubject");
    this.breadcrumbClass = document.getElementById("breadcrumbClass");
    this.backToSubjectsBtn = document.getElementById("backToSubjectsBtn");

    // Banner details
    this.subjectBanner = document.getElementById("subjectBanner");
    this.bannerIcon = document.getElementById("bannerIcon");
    this.bannerSubjectName = document.getElementById("bannerSubjectName");
    this.bannerTamilName = document.getElementById("bannerTamilName");
    this.bannerSubjectDesc = document.getElementById("bannerSubjectDesc");

    // Class selector
    this.classPillList = document.getElementById("classPillList");

    // Tabs
    this.classContentTabs = document.getElementById("classContentTabs");
    this.tabButtons = document.querySelectorAll(".tab-nav-btn");
    this.tabPanels = document.querySelectorAll(".tab-content-panel");

    // Tab content containers
    this.chaptersGrid = document.getElementById("chaptersGrid");
    this.chapterCountBadge = document.getElementById("chapterCountBadge");
    this.pyqItemsContainer = document.getElementById("pyqItemsContainer");
    this.pyqCountBadge = document.getElementById("pyqCountBadge");
    this.pyqYearFilters = document.getElementById("pyqYearFilters");
    this.importantSectionWrap = document.getElementById("importantSectionWrap");
    this.syllabusContentWrap = document.getElementById("syllabusContentWrap");

    // Search
    this.globalSearchInput = document.getElementById("globalSearchInput");
    this.searchClearBtn = document.getElementById("searchClearBtn");
    this.searchBtn = document.getElementById("searchBtn");
    this.searchDropdown = document.getElementById("searchDropdown");
    this.searchResultsList = document.getElementById("searchResultsList");
    this.searchResultCount = document.getElementById("searchResultCount");
    this.filterChips = document.querySelectorAll(".filter-chip");

    // Modals
    this.contentModal = document.getElementById("contentModal");
    this.modalTitle = document.getElementById("modalTitle");
    this.modalSubtitle = document.getElementById("modalSubtitle");
    this.modalBody = document.getElementById("modalBody");
    this.modalCloseBtn = document.getElementById("modalCloseBtn");
    this.modalPrintBtn = document.getElementById("modalPrintBtn");
    this.modalDownloadPdfBtn = document.getElementById("modalDownloadPdfBtn");

    this.bookmarksModal = document.getElementById("bookmarksModal");
    this.bookmarksListBody = document.getElementById("bookmarksListBody");
    this.bookmarksCloseBtn = document.getElementById("bookmarksCloseBtn");
    this.clearAllBookmarksBtn = document.getElementById("clearAllBookmarksBtn");

    // Toast
    this.toastNotice = document.getElementById("toastNotice");
    this.toastMsg = document.getElementById("toastMsg");
  }

  bindEvents() {
    // Theme toggle
    this.themeToggleBtn.addEventListener("click", () => this.toggleTheme());

    // Logo & Breadcrumbs
    this.homeBrandBtn.addEventListener("click", () => this.showHomeView());
    this.breadcrumbHome.addEventListener("click", () => this.showHomeView());
    this.backToSubjectsBtn.addEventListener("click", () => this.showHomeView());

    // Search input instant filtering
    this.globalSearchInput.addEventListener("input", (e) => this.handleInstantSearch(e.target.value));
    this.globalSearchInput.addEventListener("focus", () => {
      if (this.globalSearchInput.value.trim().length > 0) {
        this.searchDropdown.classList.add("show");
      }
    });

    // Close search dropdown on click outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-wrapper")) {
        this.searchDropdown.classList.remove("show");
      }
    });

    this.searchClearBtn.addEventListener("click", () => {
      this.globalSearchInput.value = "";
      this.searchClearBtn.style.display = "none";
      this.searchDropdown.classList.remove("show");
      this.globalSearchInput.focus();
    });

    this.searchBtn.addEventListener("click", () => {
      this.handleInstantSearch(this.globalSearchInput.value, true);
    });

    // Quick filter chips
    this.filterChips.forEach(chip => {
      chip.addEventListener("click", () => {
        const query = chip.getAttribute("data-search");
        this.globalSearchInput.value = query;
        this.handleInstantSearch(query, true);
      });
    });

    // Subject Stream Category Filters
    if (this.subjectStreamFilters) {
      this.subjectStreamFilters.addEventListener("click", (e) => {
        const btn = e.target.closest(".stream-filter-btn");
        if (!btn) return;
        this.subjectStreamFilters.querySelectorAll(".stream-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.getAttribute("data-category");
        this.renderHomeSubjectCards(category);
      });
    }

    // Tab buttons switching
    this.tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");
        this.openTab(targetTab);
      });
    });

    // Year filters for PYQs
    this.pyqYearFilters.addEventListener("click", (e) => {
      if (e.target.classList.contains("year-filter-btn")) {
        this.pyqYearFilters.querySelectorAll(".year-filter-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        this.activeYearFilter = e.target.getAttribute("data-year");
        this.renderPYQs();
      }
    });

    // Download All PYQs Package button
    const downloadAllPyqZipBtn = document.getElementById("downloadAllPyqZipBtn");
    if (downloadAllPyqZipBtn) {
      downloadAllPyqZipBtn.addEventListener("click", () => {
        this.showToast(`📥 2019-2025 All Papers Package (.ZIP) for Class ${this.currentClass} ${this.getSubjectName()} started downloading!`);
        this.simulateFileDownload(
          `StudyNotes_TN_Class${this.currentClass}_${this.currentSubject}_PYQ_2019_2025.txt`,
          `StudyNotes TN - Tamil Nadu School Education Board\nClass: ${this.currentClass} | Subject: ${this.getSubjectName()}\nPrevious Years Question Papers Archive (2019 - 2025)\nIncludes: 2025 Model, 2024 Public, 2023 Public, 2022 Public, 2021 PTA, 2020 Bank, 2019 Public.`
        );
      });
    }

    // Modal close events
    this.modalCloseBtn.addEventListener("click", () => this.closeModal());
    this.contentModal.addEventListener("click", (e) => {
      if (e.target === this.contentModal) this.closeModal();
    });

    this.modalPrintBtn.addEventListener("click", () => {
      window.print();
    });

    this.modalDownloadPdfBtn.addEventListener("click", () => {
      const title = this.modalTitle.textContent;
      this.downloadFormattedDocument(title, this.modalBody.innerHTML);
    });

    // Bookmarks Drawer
    this.openBookmarksBtn.addEventListener("click", () => this.openBookmarksModal());
    this.bookmarksCloseBtn.addEventListener("click", () => this.bookmarksModal.classList.remove("active"));
    this.bookmarksModal.addEventListener("click", (e) => {
      if (e.target === this.bookmarksModal) this.bookmarksModal.classList.remove("active");
    });
    this.clearAllBookmarksBtn.addEventListener("click", () => this.clearAllBookmarks());

    // Keyboard escape to close modals
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal();
        this.bookmarksModal.classList.remove("active");
        this.searchDropdown.classList.remove("show");
      }
    });
  }

  // ---------------- THEME TOGGLE ----------------
  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    this.applyTheme(this.theme);
    localStorage.setItem("studynotes_theme", this.theme);
    this.showToast(this.theme === "dark" ? "🌙 Dark Mode இயக்கப்பட்டது!" : "☀️ Light Mode இயக்கப்பட்டது!");
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const icon = this.themeToggleBtn ? this.themeToggleBtn.querySelector("i") : null;
    if (icon) {
      if (theme === "dark") {
        icon.className = "fa-solid fa-sun";
      } else {
        icon.className = "fa-solid fa-moon";
      }
    }
  }

  // ---------------- VIEW SWITCHING ----------------
  showHomeView() {
    this.homeSubjectsSection.style.display = "block";
    this.subjectDetailSection.classList.remove("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  openSubject(subjectId, classNum = "10") {
    this.currentSubject = subjectId;

    const subjectObj = studyData.subjects.find(s => s.id === subjectId);
    if (!subjectObj) return;

    // Check if classNum is supported by this subject
    const supportedClasses = subjectObj.classes.map(c => c.toString());
    if (!supportedClasses.includes(classNum)) {
      // Default to 12 if Higher Sec, or highest available
      classNum = supportedClasses.includes("12") ? "12" : supportedClasses[0];
    }
    this.currentClass = classNum;

    // Update banner styling & info
    this.subjectBanner.style.setProperty("--current-color", subjectObj.color);
    this.subjectBanner.style.setProperty("--current-light-bg", subjectObj.lightBg);
    this.bannerIcon.innerHTML = `<i class="fa-solid ${subjectObj.icon}"></i>`;
    this.bannerIcon.style.color = subjectObj.color;
    this.bannerIcon.style.background = subjectObj.lightBg;

    this.bannerSubjectName.textContent = subjectObj.name;
    this.bannerTamilName.textContent = subjectObj.tamilName;
    this.bannerSubjectDesc.textContent = subjectObj.description;

    // Breadcrumbs
    this.breadcrumbSubject.textContent = `${subjectObj.name} (${subjectObj.tamilName})`;
    this.breadcrumbClass.textContent = `Class ${classNum}`;

    // Switch view
    this.homeSubjectsSection.style.display = "none";
    this.subjectDetailSection.classList.add("active");

    // Render Class Navigation Pills and Content
    this.renderClassPills();
    this.renderClassContent();

    window.scrollTo({ top: this.subjectDetailSection.offsetTop - 80, behavior: "smooth" });
  }

  selectClass(classNum) {
    this.currentClass = classNum;
    this.breadcrumbClass.textContent = `Class ${classNum}`;
    this.renderClassPills();
    this.renderClassContent();
  }

  selectClassAndSubject(subjectId, classNum) {
    this.openSubject(subjectId, classNum);
  }

  // ---------------- HOMEPAGE SUBJECT CARDS ----------------
  renderHomeSubjectCards(category = "all") {
    if (!this.subjectsGrid) return;
    this.subjectsGrid.innerHTML = "";

    let list = studyData.subjects;
    if (category !== "all") {
      list = list.filter(s => s.category === category);
    }

    list.forEach(subject => {
      const card = document.createElement("div");
      card.className = "subject-card";
      card.style.setProperty("--card-color", subject.color);
      card.style.setProperty("--card-light-bg", subject.lightBg);

      // Determine class range badge text
      let classRangeText = "Class 6 to 12";
      let defaultClass = "10";
      if (subject.classes.length === 2 && subject.classes.includes(11) && subject.classes.includes(12)) {
        classRangeText = "Class 11 & 12 (HSC Stream)";
        defaultClass = "12";
      } else if (subject.classes.length === 5 && subject.classes.includes(10)) {
        classRangeText = "Class 6 to 10 (High School)";
        defaultClass = "10";
      }

      card.innerHTML = `
        <div class="subject-card-top">
          <div class="subject-icon-box">
            <i class="fa-solid ${subject.icon}"></i>
          </div>
          <span class="classes-badge">${classRangeText}</span>
        </div>
        <h3 class="subject-name">${subject.name}</h3>
        <div class="subject-tamil-name">${subject.tamilName}</div>
        <p class="subject-desc">${subject.description}</p>
        
        <div class="subject-stats">
          <span><i class="fa-solid fa-file-pdf"></i> All Lessons & Notes</span>
          <span><i class="fa-solid fa-calendar-check"></i> 2019-2025 PYQs</span>
        </div>
        
        <div class="subject-explore-btn">
          <span>பாடத்தை பார்க்க (${classRangeText})</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      `;

      card.addEventListener("click", () => {
        this.openSubject(subject.id, defaultClass);
      });

      this.subjectsGrid.appendChild(card);
    });
  }

  // ---------------- CLASS NAVIGATION PILLS ----------------
  renderClassPills() {
    if (!this.classPillList) return;
    this.classPillList.innerHTML = "";

    const subjectObj = studyData.subjects.find(s => s.id === this.currentSubject);
    const availableClasses = subjectObj ? subjectObj.classes.map(c => c.toString()) : ["10", "12", "11", "9", "8", "7", "6"];

    const allClassDefs = [
      { num: "12", label: "Class 12", sub: "HSC +2 Board" },
      { num: "11", label: "Class 11", sub: "HSC +1 Board" },
      { num: "10", label: "Class 10", sub: "SSLC Board" },
      { num: "9", label: "Class 9", sub: "High School" },
      { num: "8", label: "Class 8", sub: "Middle School" },
      { num: "7", label: "Class 7", sub: "Middle School" },
      { num: "6", label: "Class 6", sub: "Middle School" }
    ];

    // Filter to classes supported by this subject, or show all with clear indication
    allClassDefs.forEach(c => {
      const isAvailable = availableClasses.includes(c.num);
      const btn = document.createElement("button");
      btn.className = `class-pill-btn ${this.currentClass === c.num ? "active" : ""}`;
      if (!isAvailable) {
        btn.style.opacity = "0.55";
        btn.title = `${subjectObj ? subjectObj.name : "This subject"} is taught in Higher Secondary / Science syllabus`;
      }
      btn.innerHTML = `
        <i class="fa-solid fa-graduation-cap"></i>
        <span>${c.label}</span>
        <span class="pill-sub">(${c.sub})</span>
      `;
      btn.addEventListener("click", () => this.selectClass(c.num));
      this.classPillList.appendChild(btn);
    });
  }

  // ---------------- CLASS CONTENT RENDERING ----------------
  renderClassContent() {
    const classData = this.getClassData();
    if (!classData) {
      // Intelligently guide the student if they picked Physics/Chemistry for Class 10/9/8/7/6
      const isScienceStreamSubject = ["physics", "chemistry", "biology"].includes(this.currentSubject);
      const isLowClass = parseInt(this.currentClass) <= 10;

      this.chaptersGrid.innerHTML = `
        <div style="padding: 40px; text-align: center; color: var(--text-muted); grid-column: 1/-1; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
          <i class="fa-solid fa-book-bookmark" style="font-size: 3rem; margin-bottom: 14px; color: var(--primary);"></i>
          <h3 style="color: var(--text-main); margin-bottom: 8px;">
            ${isScienceStreamSubject && isLowClass 
              ? `வகுப்பு ${this.currentClass}-ல் ${this.getSubjectName()} பாடப்பகுதிகள் "அறிவியல் (Science)" கீழ் அமைந்துள்ளன!` 
              : `Notes for Class ${this.currentClass} ${this.getSubjectName()} are being loaded!`}
          </h3>
          <p style="max-width: 600px; margin: 0 auto 20px;">
            ${isScienceStreamSubject && isLowClass
              ? `தமிழ்நாடு சமச்சீர் பாடத்திட்டத்தின்படி Class 6-10 வரை Physics, Chemistry மற்றும் Biology ஒரே அறிவியல் (Science) பாடமாக கற்பிக்கப்படுகிறது. அனைத்து அத்தியாயங்களையும் காண கீழே கிளிக் செய்யவும்:`
              : `6 முதல் 12-ஆம் வகுப்பு வரை உள்ள பிற வகுப்புகளை மேலே உள்ள பட்டன்கள் மூலம் தேர்ந்தெடுக்கலாம்.`}
          </p>
          <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
            ${isScienceStreamSubject && isLowClass ? `
              <button class="btn-download-pdf" style="max-width: 300px;" onclick="app.openSubject('science', '${this.currentClass}')">
                <i class="fa-solid fa-flask"></i> Class ${this.currentClass} அறிவியல் (Science) பார்க்க
              </button>
            ` : ''}
            <button class="action-btn" onclick="app.openSubject('${this.currentSubject}', '12')">
              <i class="fa-solid fa-graduation-cap"></i> Class 12 ${this.getSubjectName()} குறிப்புகளைப் பார்க்க
            </button>
          </div>
        </div>
      `;
      // Clear or default other tabs
      this.pyqItemsContainer.innerHTML = `<p style="padding: 24px; text-align: center; color: var(--text-muted);">Please select an active class from the top bar.</p>`;
      this.importantSectionWrap.innerHTML = `<p style="padding: 24px; text-align: center; color: var(--text-muted);">Please select an active class from the top bar.</p>`;
      this.syllabusContentWrap.innerHTML = `<p style="padding: 24px; text-align: center; color: var(--text-muted);">Please select an active class from the top bar.</p>`;
      return;
    }

    this.renderChapters(classData.chapters || []);
    this.renderPYQs();
    this.renderImportantQuestions(classData.importantQuestions || []);
    this.renderSyllabus(classData.syllabusInfo);
  }

  getClassData() {
    const classSet = studyData.classDetails[this.currentClass];
    if (!classSet) return null;
    return classSet[this.currentSubject] || null;
  }

  getSubjectName() {
    const s = studyData.subjects.find(sub => sub.id === this.currentSubject);
    return s ? s.name : "Subject";
  }

  getSubjectTamilName() {
    const s = studyData.subjects.find(sub => sub.id === this.currentSubject);
    return s ? s.tamilName : "";
  }

  // ---------------- CHAPTER-WISE NOTES ----------------
  renderChapters(chapters) {
    if (!this.chaptersGrid) return;
    this.chaptersGrid.innerHTML = "";
    this.chapterCountBadge.textContent = chapters.length;

    if (chapters.length === 0) {
      this.chaptersGrid.innerHTML = `<p style="padding: 20px; color: var(--text-muted);">No chapters listed for this class yet.</p>`;
      return;
    }

    chapters.forEach(ch => {
      const isBookmarked = this.isBookmarked("chapter", ch.id);
      const card = document.createElement("div");
      card.className = "chapter-card";

      card.innerHTML = `
        <div class="chapter-top">
          <span class="chapter-num-badge">Chapter ${ch.number}</span>
          <span class="chapter-weightage">${ch.importance || "TN SCERT"}</span>
        </div>
        <h3 class="chapter-title">${ch.title}</h3>
        <div class="chapter-tamil-title">${ch.tamilTitle}</div>
        <p class="chapter-summary">${ch.summary}</p>

        ${ch.keyPoints && ch.keyPoints.length > 0 ? `
          <div class="key-takeaway-box">
            <strong><i class="fa-solid fa-lightbulb" style="color: var(--accent-gold);"></i> Key Points:</strong>
            <p>${ch.keyPoints[0].replace(/\$(.*?)\$/g, '$1')}</p>
          </div>
        ` : ''}

        <div class="chapter-actions">
          <button class="btn-download-pdf" title="Download Printable PDF Notes">
            <i class="fa-solid fa-file-arrow-down"></i>
            <span>Download PDF (${ch.pages} pgs)</span>
          </button>
          <button class="btn-quick-read" title="Quick Read & Formula Sheet">
            <i class="fa-solid fa-book-reader"></i>
            <span>Quick Read</span>
          </button>
          <button class="btn-bookmark ${isBookmarked ? 'active' : ''}" title="${isBookmarked ? 'Remove Bookmark' : 'Save Bookmark'}">
            <i class="fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
          </button>
        </div>
      `;

      // Quick read event
      const quickReadBtn = card.querySelector(".btn-quick-read");
      quickReadBtn.addEventListener("click", () => {
        this.openChapterModal(ch);
      });

      // PDF Download event
      const pdfBtn = card.querySelector(".btn-download-pdf");
      pdfBtn.addEventListener("click", () => {
        this.downloadChapterPdf(ch);
      });

      // Bookmark toggle
      const bmBtn = card.querySelector(".btn-bookmark");
      bmBtn.addEventListener("click", () => {
        this.toggleBookmark({
          type: "chapter",
          id: ch.id,
          title: `Class ${this.currentClass} ${this.getSubjectName()} - Ch ${ch.number}: ${ch.title}`,
          tamilTitle: ch.tamilTitle,
          subjectId: this.currentSubject,
          classNum: this.currentClass
        });
        const activeNow = this.isBookmarked("chapter", ch.id);
        bmBtn.classList.toggle("active", activeNow);
        bmBtn.innerHTML = `<i class="fa-${activeNow ? 'solid' : 'regular'} fa-bookmark"></i>`;
      });

      this.chaptersGrid.appendChild(card);
    });
  }

  // ---------------- PREVIOUS YEAR PAPERS (2019 TO 2025) ----------------
  renderPYQs() {
    if (!this.pyqItemsContainer) return;
    this.pyqItemsContainer.innerHTML = "";

    const classData = this.getClassData();
    if (!classData || !classData.pyqs) {
      this.pyqItemsContainer.innerHTML = `<p style="padding: 24px; color: var(--text-muted);">No question papers loaded for this selection.</p>`;
      return;
    }

    let list = classData.pyqs;
    if (this.activeYearFilter !== "all") {
      list = list.filter(item => item.year.toString() === this.activeYearFilter);
    }

    this.pyqCountBadge.textContent = classData.pyqs.length;

    if (list.length === 0) {
      this.pyqItemsContainer.innerHTML = `<p style="padding: 24px; color: var(--text-muted); text-align: center;">No papers found for year ${this.activeYearFilter}.</p>`;
      return;
    }

    list.forEach(paper => {
      const item = document.createElement("div");
      item.className = "pyq-list-item";

      item.innerHTML = `
        <div class="pyq-info-main">
          <div class="pyq-year-circle">
            <span>${paper.year}</span>
            <small>EXAM</small>
          </div>
          <div class="pyq-title-box">
            <h4>${paper.exam}</h4>
            <div class="pyq-tamil-sub">${paper.tamilExam}</div>
            <div class="pyq-meta-tags">
              <span class="meta-pill pill-blue"><i class="fa-solid fa-calendar"></i> ${paper.date}</span>
              <span class="meta-pill pill-amber"><i class="fa-solid fa-circle-check"></i> ${paper.totalMarks} Marks</span>
              <span class="meta-pill pill-green"><i class="fa-solid fa-bolt"></i> ${paper.highlight}</span>
            </div>
          </div>
        </div>

        <div class="pyq-actions">
          <button class="btn-paper-download" title="Download Original Question Paper">
            <i class="fa-solid fa-file-arrow-down"></i> Question Paper (${paper.fileSize})
          </button>
          ${paper.hasAnswerKey ? `
            <button class="btn-ans-key" title="Download Official Scoring Key">
              <i class="fa-solid fa-key"></i> Answer Key
            </button>
          ` : ''}
        </div>
      `;

      const qpBtn = item.querySelector(".btn-paper-download");
      qpBtn.addEventListener("click", () => {
        this.downloadPyqPdf(paper, false);
      });

      const ansBtn = item.querySelector(".btn-ans-key");
      if (ansBtn) {
        ansBtn.addEventListener("click", () => {
          this.downloadPyqPdf(paper, true);
        });
      }

      this.pyqItemsContainer.appendChild(item);
    });
  }

  // ---------------- IMPORTANT QUESTIONS SECTION ----------------
  renderImportantQuestions(categories) {
    if (!this.importantSectionWrap) return;
    this.importantSectionWrap.innerHTML = "";

    if (!categories || categories.length === 0) {
      this.importantSectionWrap.innerHTML = `<p style="padding: 20px; color: var(--text-muted);">Important questions are being curated for this subject.</p>`;
      return;
    }

    categories.forEach(cat => {
      const box = document.createElement("div");
      box.className = "imp-category-box";

      let questionsHtml = "";
      cat.list.forEach(item => {
        questionsHtml += `
          <div class="imp-question-item ${item.isGolden ? 'golden' : ''}">
            <div class="q-content">
              <div class="q-tags">
                ${item.isGolden ? `<span class="golden-tag"><i class="fa-solid fa-star"></i> Golden Question</span>` : ''}
                <span class="chapter-tag">${item.chapter}</span>
                <span class="chapter-tag" style="background: rgba(67, 97, 238, 0.1); color: var(--primary);">${item.yearTag}</span>
              </div>
              <div class="q-text-en">${item.q.replace(/\$(.*?)\$/g, '$1')}</div>
              <div class="q-text-ta">${item.tamilQ.replace(/\$(.*?)\$/g, '$1')}</div>
            </div>
            <button class="q-btn-view" data-q="${encodeURIComponent(item.q)}" data-ta="${encodeURIComponent(item.tamilQ)}" data-ch="${item.chapter}">
              <i class="fa-solid fa-lightbulb"></i> View Solution Hint
            </button>
          </div>
        `;
      });

      box.innerHTML = `
        <h3 class="imp-category-title">
          <i class="fa-solid fa-bullseye text-primary"></i> ${cat.category}
        </h3>
        <div class="imp-questions-list">
          ${questionsHtml}
        </div>
      `;

      box.querySelectorAll(".q-btn-view").forEach(btn => {
        btn.addEventListener("click", () => {
          const q = decodeURIComponent(btn.getAttribute("data-q"));
          const ta = decodeURIComponent(btn.getAttribute("data-ta"));
          const ch = btn.getAttribute("data-ch");
          this.openSolutionModal(q, ta, ch);
        });
      });

      this.importantSectionWrap.appendChild(box);
    });
  }

  // ---------------- SYLLABUS & BLUEPRINT SECTION ----------------
  renderSyllabus(syllabus) {
    if (!this.syllabusContentWrap) return;
    this.syllabusContentWrap.innerHTML = "";

    if (!syllabus) {
      this.syllabusContentWrap.innerHTML = `<p style="padding: 20px; color: var(--text-muted);">Syllabus information is updating.</p>`;
      return;
    }

    const card = document.createElement("div");
    card.className = "syllabus-hero-card";
    card.innerHTML = `
      <div class="syllabus-details">
        <h3><i class="fa-solid fa-file-lines text-primary"></i> ${syllabus.title}</h3>
        <p>${syllabus.tamilTitle}</p>
        <div class="syllabus-stats-row">
          <span><i class="fa-solid fa-calendar-check"></i> Academic Year: <strong>${syllabus.academicYear}</strong></span>
          <span><i class="fa-solid fa-trophy"></i> Total Marks: <strong>${syllabus.totalMarks}</strong></span>
          <span><i class="fa-solid fa-circle-check"></i> Minimum Pass: <strong>${syllabus.passMark} Marks</strong></span>
        </div>
      </div>
      <button class="btn-download-pdf" id="syllabusDownloadBtn">
        <i class="fa-solid fa-download"></i> Official Syllabus PDF
      </button>
    `;

    const dlBtn = card.querySelector("#syllabusDownloadBtn");
    dlBtn.addEventListener("click", () => {
      this.downloadFormattedDocument(
        `Class_${this.currentClass}_${this.getSubjectName()}_Syllabus_Blueprint.html`,
        `
          <div style="text-align: center; margin-bottom: 20px;">
            <h2>GOVERNMENT OF TAMIL NADU</h2>
            <h3>STATE COUNCIL OF EDUCATIONAL RESEARCH AND TRAINING (TNSCERT)</h3>
            <h4>Class ${this.currentClass} - ${this.getSubjectName()} (${this.getSubjectTamilName()})</h4>
            <p>Annual Examination Blueprint & Marks Scheme (2024-2025)</p>
          </div>
          <p><strong>Total Marks:</strong> ${syllabus.totalMarks} | <strong>Pass Minimum:</strong> ${syllabus.passMark}</p>
          <hr style="margin: 15px 0;">
          <h4>Examination Blueprint Structure:</h4>
          ${syllabus.blueprint && syllabus.blueprint.length > 0 ? `
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;" border="1" cellpadding="8">
              <tr style="background: #f1f5f9;">
                <th>Question Type</th>
                <th>Count</th>
                <th>Marks Each</th>
                <th>Total</th>
                <th>Compulsory Question Info</th>
              </tr>
              ${syllabus.blueprint.map(b => `
                <tr>
                  <td>${b.type}</td>
                  <td>${b.count}</td>
                  <td>${b.marks / b.count}</td>
                  <td>${b.marks}</td>
                  <td>${b.compulsory}</td>
                </tr>
              `).join("")}
            </table>
          ` : '<p>Detailed blueprint follows standard board directives.</p>'}
        `
      );
    });

    this.syllabusContentWrap.appendChild(card);

    if (syllabus.blueprint && syllabus.blueprint.length > 0) {
      const blueprintCard = document.createElement("div");
      blueprintCard.className = "blueprint-table-card";
      blueprintCard.innerHTML = `
        <h4><i class="fa-solid fa-table-list text-primary"></i> பொதுத்தேர்வு வினாத்தாள் அமைப்பு முறை (Question Paper Blueprint)</h4>
        <table class="data-table">
          <thead>
            <tr>
              <th>பிரிவு (Section)</th>
              <th>எண்ணிக்கை (Questions)</th>
              <th>மதிப்பெண் (Marks)</th>
              <th>கட்டாய வினா (Compulsory)</th>
            </tr>
          </thead>
          <tbody>
            ${syllabus.blueprint.map(b => `
              <tr>
                <td><strong>${b.type}</strong></td>
                <td>${b.count} Questions</td>
                <td><span class="meta-pill pill-amber">${b.marks} Marks</span></td>
                <td><span class="meta-pill pill-green">${b.compulsory}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;
      this.syllabusContentWrap.appendChild(blueprintCard);
    }
  }

  // ---------------- TABS SWITCHING ----------------
  openTab(tabId) {
    this.currentTab = tabId;
    this.tabButtons.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });
    this.tabPanels.forEach(panel => {
      panel.classList.toggle("active", panel.id === tabId);
    });
  }

  // ---------------- MODAL PREVIEWS ----------------
  openChapterModal(chapter) {
    this.modalTitle.textContent = `Ch ${chapter.number}: ${chapter.title}`;
    this.modalSubtitle.textContent = `${chapter.tamilTitle} • Class ${this.currentClass} ${this.getSubjectName()}`;

    let html = `
      <div style="background: var(--primary-light); padding: 14px 18px; border-radius: 8px; margin-bottom: 20px;">
        <h4 style="color: var(--primary); margin-bottom: 6px;">
          <i class="fa-solid fa-graduation-cap"></i> அத்தியாய கண்ணோட்டம் (Chapter Summary)
        </h4>
        <p style="font-size: 0.95rem; color: var(--text-main);">${chapter.summary}</p>
      </div>

      <h4 style="margin: 20px 0 10px; font-weight: 800; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-key" style="color: var(--accent-gold);"></i> முக்கிய பாடக் குறிப்புகள் (High-Yield Concepts):
      </h4>
      <ul style="padding-left: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 10px;">
        ${(chapter.keyPoints || []).map(pt => `
          <li>${pt.replace(/\$(.*?)\$/g, '$1')}</li>
        `).join("")}
      </ul>
    `;

    if (chapter.formulae && chapter.formulae.length > 0) {
      html += `
        <h4 style="margin: 20px 0 10px; font-weight: 800; display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-square-root-variable" style="color: var(--accent-green);"></i> முக்கிய சூத்திரங்கள் (Important Formulas):
        </h4>
        <div style="background: var(--bg-card-subtle); border: 1px solid var(--border-color); border-radius: 8px; padding: 14px;">
          ${chapter.formulae.map(f => `
            <div style="padding: 6px 0; font-family: monospace; font-weight: 700; color: var(--primary);">
              🔹 ${f}
            </div>
          `).join("")}
        </div>
      `;
    }

    html += `
      <div style="margin-top: 24px; padding: 14px; border: 1px dashed var(--border-color); border-radius: 8px; font-size: 0.85rem; color: var(--text-muted);">
        <i class="fa-solid fa-circle-info text-primary"></i> 
        Tip: Click <strong>"Download PDF"</strong> below to generate a print-ready offline study note document.
      </div>
    `;

    this.modalBody.innerHTML = html;
    this.contentModal.classList.add("active");
  }

  openSolutionModal(q, ta, ch) {
    this.modalTitle.textContent = `Important Question Solution Guide`;
    this.modalSubtitle.textContent = `${ch} • Class ${this.currentClass} ${this.getSubjectName()}`;

    this.modalBody.innerHTML = `
      <div style="background: var(--bg-card-subtle); padding: 16px; border-radius: 8px; border-left: 4px solid var(--accent-gold); margin-bottom: 20px;">
        <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800; color: var(--accent-gold); margin-bottom: 4px;">
          Selected Question / கேட்கப்பட்ட வினா
        </div>
        <div style="font-weight: 700; font-size: 1.05rem; margin-bottom: 6px; color: var(--text-main);">${q}</div>
        <div style="color: var(--text-muted); font-family: var(--font-tamil);">${ta}</div>
      </div>

      <h4 style="font-weight: 800; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-list-check text-primary"></i> தேர்வுத் தாளில் விடை எழுதும் முறை (Scoring Scheme):
      </h4>
      <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.95rem;">
        <div style="padding: 10px 14px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px;">
          <strong>Step 1: Formula / Definition (சூத்திரம் / வரையறை)</strong>
          <p style="color: var(--text-muted); margin-top: 4px;">Write the proper given data and state the relevant law/formula explicitly to secure first step mark.</p>
        </div>
        <div style="padding: 10px 14px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px;">
          <strong>Step 2: Substitution & Calculation (பதிலீடு & தீர்வு)</strong>
          <p style="color: var(--text-muted); margin-top: 4px;">Show step-by-step simplification without skipping intermediate algebraic operations.</p>
        </div>
        <div style="padding: 10px 14px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px;">
          <strong>Step 3: Final Answer with Proper Unit (முடிவு விடை & அலகு)</strong>
          <p style="color: var(--text-muted); margin-top: 4px;">Highlight the final answer in a neat pencil box along with accurate SI units.</p>
        </div>
      </div>
    `;

    this.contentModal.classList.add("active");
  }

  closeModal() {
    this.contentModal.classList.remove("active");
  }

  // ---------------- INSTANT SEARCH ENGINE ----------------
  handleInstantSearch(query, openFirst = false) {
    const q = query.trim().toLowerCase();

    if (q.length === 0) {
      this.searchClearBtn.style.display = "none";
      this.searchDropdown.classList.remove("show");
      return;
    }

    this.searchClearBtn.style.display = "block";
    this.searchDropdown.classList.add("show");

    const matches = [];

    // Search across all subjects, classes, chapters, PYQs, and important questions
    studyData.subjects.forEach(subject => {
      // Check subject names
      if (subject.name.toLowerCase().includes(q) || subject.tamilName.toLowerCase().includes(q)) {
        matches.push({
          type: "Subject",
          badgeClass: "badge-notes",
          title: `${subject.name} (${subject.tamilName})`,
          subtitle: `Class 6 to 12 All Notes & Question Papers`,
          subjectId: subject.id,
          classNum: "10"
        });
      }

      // Check classes inside this subject
      subject.classes.forEach(clsNum => {
        const classData = studyData.classDetails[clsNum.toString()]?.[subject.id];
        if (!classData) return;

        // Search Chapters
        (classData.chapters || []).forEach(ch => {
          if (
            ch.title.toLowerCase().includes(q) ||
            ch.tamilTitle.toLowerCase().includes(q) ||
            ch.summary.toLowerCase().includes(q) ||
            `class ${clsNum}`.includes(q) ||
            `${clsNum}th`.includes(q)
          ) {
            matches.push({
              type: "Chapter Notes",
              badgeClass: "badge-notes",
              title: `Class ${clsNum} ${subject.name} - Ch ${ch.number}: ${ch.title}`,
              subtitle: `${ch.tamilTitle}`,
              subjectId: subject.id,
              classNum: clsNum.toString(),
              tab: "chaptersTab",
              chapterObj: ch
            });
          }
        });

        // Search PYQs
        (classData.pyqs || []).forEach(pyq => {
          if (
            pyq.exam.toLowerCase().includes(q) ||
            pyq.tamilExam.toLowerCase().includes(q) ||
            pyq.year.toString().includes(q)
          ) {
            matches.push({
              type: "Question Paper",
              badgeClass: "badge-pyq",
              title: `Class ${clsNum} ${subject.name} - ${pyq.exam}`,
              subtitle: `${pyq.tamilExam} (${pyq.year})`,
              subjectId: subject.id,
              classNum: clsNum.toString(),
              tab: "pyqsTab"
            });
          }
        });

        // Search Important Questions
        (classData.importantQuestions || []).forEach(cat => {
          cat.list.forEach(item => {
            if (
              item.q.toLowerCase().includes(q) ||
              item.tamilQ.toLowerCase().includes(q) ||
              item.chapter.toLowerCase().includes(q)
            ) {
              matches.push({
                type: "Important Question",
                badgeClass: "badge-important",
                title: `Class ${clsNum} ${subject.name} - ${item.chapter}`,
                subtitle: `${item.q.substring(0, 65)}...`,
                subjectId: subject.id,
                classNum: clsNum.toString(),
                tab: "importantTab"
              });
            }
          });
        });
      });
    });

    // Deduplicate or limit
    const uniqueMatches = [];
    const seen = new Set();
    for (const m of matches) {
      const key = `${m.title}_${m.classNum}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueMatches.push(m);
      }
      if (uniqueMatches.length >= 10) break;
    }

    this.renderSearchResults(uniqueMatches, q);

    if (openFirst && uniqueMatches.length > 0) {
      this.executeSearchResult(uniqueMatches[0]);
    }
  }

  renderSearchResults(results, query) {
    this.searchResultCount.textContent = `${results.length} results found`;
    this.searchResultsList.innerHTML = "";

    if (results.length === 0) {
      this.searchResultsList.innerHTML = `
        <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          <i class="fa-solid fa-circle-question" style="font-size: 1.5rem; margin-bottom: 6px;"></i>
          <p>No results found for "<strong>${query}</strong>".</p>
          <p style="font-size: 0.8rem;">Try searching: "10th Maths", "Relations", "2024", "Laws of motion"</p>
        </div>
      `;
      return;
    }

    results.forEach(res => {
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.innerHTML = `
        <div class="result-main">
          <div class="result-title">${this.highlightMatch(res.title, query)}</div>
          <div class="result-meta">
            <span class="result-type-badge ${res.badgeClass}">${res.type}</span>
            <span>${res.subtitle}</span>
          </div>
        </div>
        <i class="fa-solid fa-arrow-right text-primary" style="font-size: 0.85rem;"></i>
      `;

      item.addEventListener("click", () => {
        this.executeSearchResult(res);
      });

      this.searchResultsList.appendChild(item);
    });
  }

  highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<mark style="background: #fef08a; padding: 0 2px; border-radius: 2px;">$1</mark>`);
  }

  executeSearchResult(res) {
    this.searchDropdown.classList.remove("show");
    this.openSubject(res.subjectId, res.classNum);

    if (res.tab) {
      this.openTab(res.tab);
    }

    if (res.chapterObj) {
      this.openChapterModal(res.chapterObj);
    }

    this.showToast(`Navigated to Class ${res.classNum} ${res.title}`);
  }

  // ---------------- PDF DOWNLOAD & SIMULATION ----------------
  downloadChapterPdf(chapter) {
    this.showToast(`📄 Generating Chapter Notes PDF: ${chapter.title}...`);

    const filename = `StudyNotes_TN_Class${this.currentClass}_${this.getSubjectName()}_Ch${chapter.number}_${chapter.title.replace(/\s+/g, '_')}.html`;
    const content = `
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 20px;">
        <h2 style="margin: 0; color: #1e3a8a;">TAMIL NADU SCHOOL EDUCATION DEPARTMENT</h2>
        <h3 style="margin: 4px 0; color: #4361ee;">SAMACHEER KALVI • OFFICIAL REVISION MODULE</h3>
        <p style="margin: 2px 0;"><strong>Class:</strong> ${this.currentClass} | <strong>Subject:</strong> ${this.getSubjectName()} (${this.getSubjectTamilName()})</p>
      </div>

      <div style="margin-bottom: 15px; background: #f8fafc; padding: 12px; border-left: 4px solid #4361ee;">
        <h3 style="margin: 0;">Chapter ${chapter.number}: ${chapter.title}</h3>
        <h4 style="margin: 4px 0; color: #64748b;">${chapter.tamilTitle}</h4>
        <p style="margin: 4px 0 0;"><strong>Summary:</strong> ${chapter.summary}</p>
      </div>

      <h4>1. Key High-Yield Points for Examination:</h4>
      <ul>
        ${(chapter.keyPoints || []).map(p => `<li>${p.replace(/\$(.*?)\$/g, '$1')}</li>`).join("")}
      </ul>

      ${chapter.formulae && chapter.formulae.length > 0 ? `
        <h4>2. Essential Formulas & Theorems:</h4>
        <div style="background: #eef2ff; padding: 10px; border-radius: 6px; font-family: monospace;">
          ${chapter.formulae.map(f => `<div>• ${f}</div>`).join("")}
        </div>
      ` : ''}

      <div style="margin-top: 30px; font-size: 11px; text-align: center; color: #888; border-top: 1px solid #ccc; padding-top: 8px;">
        Generated via StudyNotes TN — Free Learning Portal for Tamil Nadu Students • Printed Date: ${new Date().toLocaleDateString('en-GB')}
      </div>
    `;

    this.downloadFormattedDocument(filename, content);
  }

  downloadPyqPdf(paper, isAnswerKey = false) {
    const docType = isAnswerKey ? "Scoring_Answer_Key" : "Question_Paper";
    this.showToast(`📥 Downloading ${paper.year} ${docType} (${paper.fileSize})...`);

    const filename = `StudyNotes_TN_Class${this.currentClass}_${this.getSubjectName()}_${paper.year}_${docType}.html`;
    const content = `
      <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 16px;">
        <h2 style="margin: 0;">DIRECTORATE OF GOVERNMENT EXAMINATIONS, CHENNAI - 600 006</h2>
        <h3 style="margin: 4px 0;">${paper.exam}</h3>
        <h4 style="margin: 2px 0; color: #4361ee;">${paper.tamilExam}</h4>
        <p style="margin: 4px 0;"><strong>Time Allowed:</strong> 3.00 Hours | <strong>Maximum Marks:</strong> ${paper.totalMarks}</p>
        <p style="margin: 0; font-size: 12px; color: #64748b;">[Official Board Paper & Scoring Key Reference]</p>
      </div>

      <div style="margin-bottom: 20px;">
        <p><strong>Instructions:</strong> Check question paper for completeness. Answer all sections following choice guidelines.</p>
        <p><strong>Highlight:</strong> ${paper.highlight}</p>
      </div>

      <hr style="margin: 15px 0;">

      <h3>${isAnswerKey ? "OFFICIAL SCORING KEY & SCHEME OF VALUATION" : "SECTION-WISE QUESTIONS"}</h3>
      <p>Answers and step-by-step marking rubrics prepared in accordance with Tamil Nadu Directorate Guidelines.</p>

      <div style="margin-top: 40px; border-top: 1px solid #ccc; padding-top: 8px; font-size: 11px; text-align: center; color: #777;">
        StudyNotes TN Archive • 2019-2025 Board Question Repository
      </div>
    `;

    this.downloadFormattedDocument(filename, content);
  }

  downloadFormattedDocument(filename, innerHtml) {
    const fullHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${filename}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; padding: 30px; line-height: 1.6; color: #111; }
          h2, h3, h4 { color: #1e293b; }
          ul { margin-top: 8px; }
          li { margin-bottom: 6px; }
          @media print {
            body { padding: 10px; }
            button { display: none; }
          }
        </style>
      </head>
      <body>
        <div style="text-align: right; margin-bottom: 15px;">
          <button onclick="window.print()" style="padding: 8px 16px; background: #4361ee; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Print Document</button>
        </div>
        ${innerHtml}
      </body>
      </html>
    `;

    this.simulateFileDownload(filename, fullHtml);
  }

  simulateFileDownload(filename, textContent) {
    const blob = new Blob([textContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // ---------------- BOOKMARKS LOGIC ----------------
  toggleBookmark(item) {
    const index = this.bookmarks.findIndex(b => b.type === item.type && b.id === item.id);
    if (index > -1) {
      this.bookmarks.splice(index, 1);
      this.showToast("Bookmark removed!");
    } else {
      this.bookmarks.push(item);
      this.showToast("⭐ Saved to Bookmarks for quick exam revision!");
    }
    localStorage.setItem("studynotes_bookmarks", JSON.stringify(this.bookmarks));
    this.updateBookmarkBadge();
  }

  isBookmarked(type, id) {
    return this.bookmarks.some(b => b.type === type && b.id === id);
  }

  updateBookmarkBadge() {
    if (this.bookmarkCount) {
      this.bookmarkCount.textContent = this.bookmarks.length;
    }
  }

  openBookmarksModal() {
    this.bookmarksListBody.innerHTML = "";

    if (this.bookmarks.length === 0) {
      this.bookmarksListBody.innerHTML = `
        <div style="text-align: center; padding: 30px; color: var(--text-muted);">
          <i class="fa-regular fa-bookmark" style="font-size: 2.5rem; margin-bottom: 10px; color: var(--primary);"></i>
          <h4>No Bookmarks Saved Yet</h4>
          <p style="font-size: 0.85rem;">Click the bookmark icon on any chapter or paper to save it for quick review!</p>
        </div>
      `;
    } else {
      this.bookmarks.forEach((bm, i) => {
        const row = document.createElement("div");
        row.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 12px; border-bottom: 1px solid var(--border-color);";

        row.innerHTML = `
          <div>
            <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-main);">${bm.title}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${bm.tamilTitle || ''}</div>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="action-btn" style="padding: 4px 10px; font-size: 0.78rem;" title="Go to note">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Open
            </button>
            <button class="action-btn" style="padding: 4px 10px; font-size: 0.78rem; color: var(--accent-red);" title="Delete">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        `;

        const openBtn = row.querySelectorAll("button")[0];
        openBtn.addEventListener("click", () => {
          this.bookmarksModal.classList.remove("active");
          this.openSubject(bm.subjectId, bm.classNum);
        });

        const delBtn = row.querySelectorAll("button")[1];
        delBtn.addEventListener("click", () => {
          this.bookmarks.splice(i, 1);
          localStorage.setItem("studynotes_bookmarks", JSON.stringify(this.bookmarks));
          this.updateBookmarkBadge();
          this.openBookmarksModal();
        });

        this.bookmarksListBody.appendChild(row);
      });
    }

    this.bookmarksModal.classList.add("active");
  }

  clearAllBookmarks() {
    this.bookmarks = [];
    localStorage.setItem("studynotes_bookmarks", JSON.stringify(this.bookmarks));
    this.updateBookmarkBadge();
    this.openBookmarksModal();
    this.showToast("All bookmarks cleared.");
  }

  // ---------------- QUOTE ROTATION ----------------
  startQuotesRotation() {
    const quoteEl = document.getElementById("tickerQuote");
    if (!quoteEl || !studyData.quotes) return;

    setInterval(() => {
      this.currentQuoteIndex = (this.currentQuoteIndex + 1) % studyData.quotes.length;
      const q = studyData.quotes[this.currentQuoteIndex];
      quoteEl.style.opacity = 0;
      setTimeout(() => {
        quoteEl.innerHTML = `
          <span class="ticker-tag">தினமும் ஒரு சிந்தனை</span>
          <span class="ticker-quote">"${q.tamil}" (${q.english})</span>
        `;
        quoteEl.style.opacity = 1;
      }, 300);
    }, 7000);
  }

  // ---------------- TOAST ----------------
  showToast(message) {
    if (!this.toastNotice) return;
    this.toastMsg.textContent = message;
    this.toastNotice.classList.add("show");
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toastNotice.classList.remove("show");
    }, 3500);
  }
}

// Instantiate App on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.app = new StudyNotesApp();
});
