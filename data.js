// StudyNotes TN - Comprehensive Data Store for Tamil Nadu State Board (Samacheer Kalvi)
// Full Coverage of Subjects: Physics, Chemistry, Computer Science, Mathematics, Biology, Tamil, English, Science, Social Science, Commerce
// Covers Class 6 to Class 12 with full chapters, 2019-2025 Question Papers, and Important Golden Questions.

const studyData = {
  subjects: [
    {
      id: "physics",
      name: "Physics",
      tamilName: "இயற்பியல்",
      category: "science",
      icon: "fa-atom",
      color: "#0284c7",
      lightBg: "#e0f2fe",
      description: "Electrostatics, Current Electricity, Magnetism, Optics, Modern Physics & Semiconductor Electronics with derivations & formulas.",
      classes: [11, 12]
    },
    {
      id: "chemistry",
      name: "Chemistry",
      tamilName: "வேதியியல்",
      category: "science",
      icon: "fa-vial-circle-check",
      color: "#d97706",
      lightBg: "#fef3c7",
      description: "Organic, Inorganic & Physical Chemistry: Metallurgy, p-Block, Coordination, Kinetics, Hydroxy compounds & Biomolecules.",
      classes: [11, 12]
    },
    {
      id: "cs",
      name: "Computer Science",
      tamilName: "கணினி அறிவியல்",
      category: "science",
      icon: "fa-laptop-code",
      color: "#059669",
      lightBg: "#d1fae5",
      description: "Python Programming, OOPs, Data Structures, Algorithmic Strategies, SQL Databases & Web/CSV Integration.",
      classes: [11, 12]
    },
    {
      id: "maths",
      name: "Mathematics",
      tamilName: "கணிதம்",
      category: "maths",
      icon: "fa-calculator",
      color: "#2563eb",
      lightBg: "#eff6ff",
      description: "Step-by-step solutions, key formulas (சூத்திரங்கள்), theorems, calculus, algebra, geometry & statistics.",
      classes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
      id: "biology",
      name: "Biology",
      tamilName: "உயிரியல் (தாவரவியல் & விலங்கியல்)",
      category: "science",
      icon: "fa-dna",
      color: "#16a34a",
      lightBg: "#dcfce7",
      description: "Botany & Zoology: Reproduction in organisms, Genetics, Biotechnology, Human Health, Immunology & Ecology diagrams.",
      classes: [11, 12]
    },
    {
      id: "tamil",
      name: "Tamil",
      tamilName: "தமிழ்",
      category: "languages",
      icon: "fa-book-open",
      color: "#e11d48",
      lightBg: "#ffe4e6",
      description: "இயல் வாரியான உரைநடை உலகம், செய்யுள் (கவிதைப்பேழை), விரிவானம் (துணைப்பாடம்), கற்கண்டு (இலக்கணம்) & மனப்பாடப் பாடல்கள்.",
      classes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
      id: "english",
      name: "English",
      tamilName: "ஆங்கிலம்",
      category: "languages",
      icon: "fa-language",
      color: "#6366f1",
      lightBg: "#e0e7ff",
      description: "Unit-wise Prose, Poetry, Supplementary readers, Grammar rules, vocabulary building, Notice & Letter writing.",
      classes: [6, 7, 8, 9, 10, 11, 12]
    },
    {
      id: "science",
      name: "Science",
      tamilName: "அறிவியல் (6 to 10)",
      category: "science",
      icon: "fa-flask-vial",
      color: "#9333ea",
      lightBg: "#f3e8ff",
      description: "Physics, Chemistry and Biology comprehensive fundamentals for Classes 6 to 10 with experiments and diagram keys.",
      classes: [6, 7, 8, 9, 10]
    },
    {
      id: "social",
      name: "Social Science",
      tamilName: "சமூக அறிவியல் (6 to 10)",
      category: "social",
      icon: "fa-earth-americas",
      color: "#ea580c",
      lightBg: "#ffedd5",
      description: "History (வரலாறு), Geography (புவியியல்), Civics (குடிமையியல்) & Economics (பொருளியல்) with Timelines & Maps.",
      classes: [6, 7, 8, 9, 10]
    },
    {
      id: "commerce",
      name: "Commerce & Accountancy",
      tamilName: "வணிகவியல் & கணக்குப்பதிவியல்",
      category: "social",
      icon: "fa-chart-line",
      color: "#0891b2",
      lightBg: "#cffafe",
      description: "Principles of Management, Financial Markets, Consumer Protection, Partnership Accounts & Company Accounts.",
      classes: [11, 12]
    }
  ],

  // Motivational Tamil & English Quotes for students
  quotes: [
    { tamil: "கற்றது கைமண் அளவு, கல்லாதது உலகளவு - ஔவையார்", english: "Knowledge is limitless; keep learning every single day!" },
    { tamil: "முயற்சி திருவினையாக்கும் - திருவள்ளுவர்", english: "Consistent revision brings supreme confidence and centum marks!" },
    { tamil: "எண்ணிய எண்ணியாங்கு எய்துப எண்ணியார் திண்ணியர் ஆகப் பெறின்", english: "Clarity of goal paired with steady preparation leads directly to victory." },
    { tamil: "இன்றைய கடின உழைப்பு, நாளைய உன்னத வெற்றி!", english: "Daily study habits today build lifelong greatness tomorrow!" }
  ],

  // Detailed Class-wise Data Structure
  classDetails: {

    // ========================================================
    // CLASS 12 (HIGHER SECONDARY SECOND YEAR)
    // ========================================================
    "12": {
      // 1. PHYSICS (இயற்பியல்)
      physics: {
        syllabusInfo: {
          title: "Class 12 Physics (Higher Secondary State Board)",
          tamilTitle: "12-ஆம் வகுப்பு இயற்பியல் - பாடத்திட்டம் & புளூபிரிண்ட்",
          academicYear: "2024 - 2025",
          totalMarks: 70, // 30 practicals
          passMark: 15, // in theory (minimum 35 overall with practicals)
          blueprint: [
            { type: "Part 1 (One Mark MCQs)", count: 15, marks: 15, compulsory: "15 Compulsory Questions" },
            { type: "Part 2 (2 Marks Short Answers)", count: 6, marks: 12, compulsory: "Q.No 24 Compulsory Problem" },
            { type: "Part 3 (3 Marks Brief Answers)", count: 6, marks: 18, compulsory: "Q.No 33 Compulsory Problem" },
            { type: "Part 4 (5 Marks Derivations)", count: 5, marks: 25, compulsory: "All 5 from Internal Choice (Either/Or)" }
          ]
        },
        chapters: [
          {
            id: "phy12-1",
            number: 1,
            title: "Electrostatics",
            tamilTitle: "அலகு 1: நிலை மின்னியல்",
            pages: 36,
            importance: "⭐⭐⭐ Core 5-Mark Derivations (8-12 Marks)",
            summary: "Coulomb's Law, Electric Field & Dipole, Gauss's Law and its three applications, Electric Potential & Potential Energy, Capacitors in series & parallel, Van de Graaff Generator.",
            keyPoints: [
              "Coulomb's Law: $F = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r^2}$. Permittivity of free space $\\varepsilon_0 = 8.854 \\times 10^{-12} \\text{ C}^2\\text{N}^{-1}\\text{m}^{-2}$.",
              "Gauss's Law: Electric flux through a closed surface $\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enclosed}}}{\\varepsilon_0}$.",
              "Electric field at a point on the axial line of an electric dipole: $E_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2p}{r^3}$.",
              "Capacitance of a parallel plate capacitor: $C = \\frac{\\varepsilon_0 A}{d}$; with dielectric $C = \\frac{\\varepsilon_r \\varepsilon_0 A}{d}$.",
              "Van de Graaff Generator: Works on Electrostatic induction and Action of points (Corona discharge) to produce potentials up to $10^7 \\text{ V}$."
            ],
            formulae: [
              "F = (1/4πε₀) · (q₁q₂ / r²)",
              "E_axial = 2kp / r³, E_equatorial = kp / r³",
              "V = (1/4πε₀) · (p cos θ / r²)",
              "C = ε₀A / d (Capacitor with air)",
              "Energy Stored U = 1/2 CV² = Q² / (2C)"
            ]
          },
          {
            id: "phy12-2",
            number: 2,
            title: "Current Electricity",
            tamilTitle: "அலகு 2: மின்னோட்டவியல்",
            pages: 28,
            importance: "⭐⭐⭐ Wheatstone Bridge & Potentiometer (7-10 Marks)",
            summary: "Drift velocity, Ohm's law, Temperature coefficient of resistance, Carbon resistors, Kirchhoff's Laws, Wheatstone's Bridge, Metre Bridge, Potentiometer (EMF comparison).",
            keyPoints: [
              "Drift velocity: $v_d = -\\frac{e E}{m} \\tau$. Current $I = n A e v_d$.",
              "Ohm's law: $V = IR$; Microscopic form $\\vec{J} = \\sigma \\vec{E}$.",
              "Kirchhoff's First Law (Current Rule): $\\sum I = 0$ at any junction (Law of Conservation of Charge).",
              "Kirchhoff's Second Law (Voltage Rule): In any closed loop, the algebraic sum of EMFs equals the algebraic sum of the products of current and resistance (Law of Conservation of Energy).",
              "Wheatstone's Bridge Balancing Condition: $\\frac{P}{Q} = \\frac{R}{S}$.",
              "Potentiometer EMF Comparison: $\\frac{\\varepsilon_1}{\\varepsilon_2} = \\frac{l_1}{l_2}$; Internal resistance $r = R\\left(\\frac{l_1 - l_2}{l_2}\\right)$."
            ],
            formulae: [
              "I = n A e v_d",
              "J = σ E",
              "Wheatstone: P / Q = R / S",
              "Metre Bridge: P / Q = l₁ / (100 - l₁)",
              "Potentiometer r = R (l₁ - l₂) / l₂"
            ]
          },
          {
            id: "phy12-3",
            number: 3,
            title: "Magnetism and Magnetic Effects of Electric Current",
            tamilTitle: "அலகு 3: காந்தவியல் மற்றும் மின்னோட்டத்தின் காந்த விளைவுகள்",
            pages: 34,
            importance: "⭐⭐⭐ Biot-Savart Law & Cyclotron (8-10 Marks)",
            summary: "Earth's magnetic elements, Biot-Savart Law, Magnetic field of circular coil, Ampere's circuital law, Force on a moving charge (Lorentz Force), Cyclotron, Moving Coil Galvanometer.",
            keyPoints: [
              "Biot-Savart Law: $d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\hat{r})}{r^2}$.",
              "Magnetic field at the center of circular coil: $B = \\frac{\\mu_0 N I}{2 R}$.",
              "Cyclotron frequency: $f = \\frac{q B}{2\\pi m}$ (independent of velocity and radius).",
              "Conversion of Galvanometer into Ammeter: Connect a low resistance (shunt $S$) in parallel: $S = \\frac{I_g R_g}{I - I_g}$.",
              "Conversion of Galvanometer into Voltmeter: Connect a high resistance ($R_h$) in series: $R_h = \\frac{V}{I_g} - R_g$."
            ],
            formulae: [
              "dB = (μ₀/4π) · (I dl sin θ / r²)",
              "B_coil = μ₀NI / (2R)",
              "Lorentz Force F = q(v × B)",
              "Shunt Resistance S = (Ig · Rg) / (I - Ig)",
              "Voltmeter Resistance Rh = (V / Ig) - Rg"
            ]
          },
          {
            id: "phy12-4",
            number: 4,
            title: "Electromagnetic Induction and Alternating Current",
            tamilTitle: "அலகு 4: மின்காந்தத் தூண்டலும் மாறுதிசை மின்னோட்டமும்",
            pages: 38,
            importance: "⭐⭐⭐ Transformer & AC Generator (10-12 Marks)",
            summary: "Faraday's experiments, Lenz's Law, Self and Mutual induction, AC Generator (single phase), Transformer principle and efficiency, RLC series resonance circuit, Q-factor.",
            keyPoints: [
              "Faraday's Law: $\\varepsilon = -\\frac{d\\Phi_B}{dt}$; Lenz's law gives the direction: induced current always opposes the cause.",
              "Transformer: $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s} = k$. Step-up transformer has $k > 1$.",
              "Series RLC Circuit Impedance: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ where $X_L = \\omega L$ and $X_C = \\frac{1}{\\omega C}$.",
              "Resonant Frequency: $\\omega_r = \\frac{1}{\\sqrt{LC}}$ or $f_r = \\frac{1}{2\\pi\\sqrt{LC}}$."
            ],
            formulae: [
              "ε = - dΦ_B / dt",
              "Vs / Vp = Ns / Np = Ip / Is = k",
              "Z = √[R² + (X_L - X_C)²]",
              "Resonance f_r = 1 / (2π√LC)",
              "Quality Factor Q = (1/R) · √(L/C)"
            ]
          },
          {
            id: "phy12-6",
            number: 6,
            title: "Optics (Ray and Wave Optics)",
            tamilTitle: "அலகு 6: ஒளியியல் (கதிர் மற்றும் அலை ஒளியியல்)",
            pages: 42,
            importance: "⭐⭐⭐ Lens Maker's Formula & Young's Double Slit (10-14 Marks)",
            summary: "Reflection, Refraction, Total Internal Reflection, Lens Maker's formula, Prism dispersion, Huygens principle, Young's double slit interference, Diffraction and Polarisation.",
            keyPoints: [
              "Snell's Law: $n_1 \\sin i = n_2 \\sin r$.",
              "Total Internal Reflection condition: Angle of incidence $i > i_c$ where $\\sin i_c = \\frac{1}{n}$.",
              "Lens Maker's Formula: $\\frac{1}{f} = (n - 1) \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$.",
              "Young's Double Slit Fringe Width: $\\beta = \\frac{\\lambda D}{d}$.",
              "Brewster's Law: $\\tan i_p = n$ (Reflected and refracted rays are perpendicular)."
            ],
            formulae: [
              "1/f = (n - 1) · (1/R₁ - 1/R₂)",
              "Prism n = sin[(A + D)/2] / sin(A/2)",
              "Fringe Width β = λD / d",
              "Brewster's Law: tan(i_p) = n"
            ]
          },
          {
            id: "phy12-8",
            number: 8,
            title: "Dual Nature of Radiation and Matter",
            tamilTitle: "அலகு 8: கதிர்வீச்சு மற்றும் பருப்பொருளின் இருமைப் பண்பு",
            pages: 24,
            importance: "⭐⭐ Photoelectric Equation & de Broglie Wavelength",
            summary: "Photoelectric effect, Hertz & Hallwachs experiments, Einstein's Photoelectric equation $h\\nu = h\\nu_0 + \\frac{1}{2}mv_{\\text{max}}^2$, de Broglie wavelength of electron, Davisson-Germer experiment.",
            keyPoints: [
              "Einstein's Equation: $K_{\\text{max}} = h\\nu - \\Phi_0 = e V_0$.",
              "Threshold frequency $\\nu_0$: Minimum frequency below which no photoelectrons are emitted.",
              "de Broglie wavelength: $\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2 m e V}} = \\frac{12.27}{\\sqrt{V}} \\text{ \\AA}$."
            ],
            formulae: [
              "hν = W₀ + 1/2 m v_max²",
              "λ = h / p = 12.27 / √V (Å)"
            ]
          },
          {
            id: "phy12-9",
            number: 9,
            title: "Semiconductor Electronics",
            tamilTitle: "அலகு 9: குறைக்கடத்தி எலக்ட்ரானியல்",
            pages: 32,
            importance: "⭐⭐⭐ Transistor as Amplifier & Logic Gates (8-10 Marks)",
            summary: "Energy bands, Intrinsic & Extrinsic semiconductors (p-type and n-type), p-n junction diode, Rectifiers (Half wave & Full wave), Zener diode as voltage regulator, BJT Transistor CE mode, Logic Gates (De Morgan's).",
            keyPoints: [
              "Full Wave Rectifier efficiency: $\\eta = 81.2\\%$.",
              "Zener diode operates in reverse breakdown region with constant breakdown voltage.",
              "Transistor relation: $I_E = I_B + I_C$; $\\beta = \\frac{\\alpha}{1 - \\alpha}$ and $\\alpha = \\frac{\\beta}{1 + \\beta}$.",
              "De Morgan's First Law: $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$; Second Law: $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$."
            ],
            formulae: [
              "I_E = I_B + I_C",
              "β = α / (1 - α)",
              "De Morgan: ¬(A ∨ B) = ¬A ∧ ¬B",
              "Rectifier Efficiency η_FWR = 81.2%"
            ]
          }
        ],
        pyqs: [
          { year: 2025, exam: "Class 12 Physics Public Model Exam 2025", tamilExam: "12-ஆம் வகுப்பு இயற்பியல் அரசு மாதிரி பொதுத்தேர்வு 2025", date: "Jan 2025", fileSize: "2.8 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Compulsory Q24/Q33 Problems with Solved Steps", downloadCount: 28400 },
          { year: 2024, exam: "Class 12 Physics Public Exam March 2024", tamilExam: "12-ஆம் வகுப்பு இயற்பியல் அரசு பொதுத்தேர்வு மார்ச் 2024 அசல் தாள்", date: "March 2024", fileSize: "2.6 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Official Question Paper + Complete Government Scoring Key", downloadCount: 42100 },
          { year: 2023, exam: "Class 12 Physics Public Exam March 2023", tamilExam: "அரசு பொதுத்தேர்வு இயற்பியல் மார்ச் 2023 வினாத்தாள் & விடைக் குறிப்பு", date: "March 2023", fileSize: "2.4 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Full marks derivations and graph scoring tips", downloadCount: 35800 },
          { year: 2022, exam: "Class 12 Physics Public Exam May 2022", tamilExam: "அரசு பொதுத்தேர்வு இயற்பியல் மே 2022", date: "May 2022", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 70, highlight: "First full syllabus post-Covid public paper", downloadCount: 29400 },
          { year: 2021, exam: "Parent-Teacher Association (PTA) Physics Sets 1-6", tamilExam: "பெற்றோர் ஆசிரியர் கழக (PTA) இயற்பியல் மாதிரி வினாத்தாள்கள் 1-6", date: "2021", fileSize: "4.1 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Golden Derivations & Numericals Question Bank", downloadCount: 48900 },
          { year: 2020, exam: "Class 12 Physics Public Exam March 2020", tamilExam: "அரசு பொதுத்தேர்வு இயற்பியல் மார்ச் 2020", date: "March 2020", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Revised SCERT Benchmark Paper", downloadCount: 26500 },
          { year: 2019, exam: "Class 12 Physics SCERT Special Bank 2019", tamilExam: "12-ஆம் வகுப்பு இயற்பியல் சிறப்பு மாதிரி வினா வங்கி 2019", date: "2019", fileSize: "2.7 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Chapter-wise Golden Question Blueprint", downloadCount: 21800 }
        ],
        importantQuestions: [
          {
            category: "5 Marks Derivations (Guaranteed in Public Examination)",
            list: [
              { q: "Derive the expression for the electric field due to an electric dipole at points on the axial line.", tamilQ: "மின் இருமுனையின் அச்சுக்கோட்டில் ஏதேனும் ஒரு புள்ளியில் மின்புலத்திற்கான சமன்பாட்டைப் பெறுக.", chapter: "Electrostatics", yearTag: "Appeared 5 Times in Board", isGolden: true },
              { q: "Obtain the condition for bridge balance in Wheatstone's bridge using Kirchhoff's rules.", tamilQ: "கிர்க்காஃப் விதிகளைப் பயன்படுத்தி வீட்ஸ்டோன் சமனச்சுற்றின் சமன்செய் நிலையைப் பெறுக.", chapter: "Current Electricity", yearTag: "March 2024 Board Question", isGolden: true },
              { q: "Derive Lens Maker's formula for a thin lens with neat ray diagram.", tamilQ: "மெல்லிய லென்சுக்கான லென்ஸ் தயாரிப்பாளர் சமன்பாட்டைப் பெறுக.", chapter: "Optics", yearTag: "⭐⭐ Top Golden 5 Marks", isGolden: true },
              { q: "Explain the construction and working of a transformer. Mention its energy losses.", tamilQ: "மின்மாற்றியின் அமைப்பு மற்றும் செயல்படும் விதத்தை விவரி. அதன் ஆற்றல் இழப்புகளைக் குறிப்பிடுக.", chapter: "Electromagnetic Induction", yearTag: "March 2023 Board", isGolden: true },
              { q: "Describe the construction and working of a Full Wave Rectifier with circuit diagram and input/output waveforms.", tamilQ: "முழு அலை திருத்தியின் அமைப்பு மற்றும் செயல்பாட்டை மின்சுற்று மற்றும் அலைவடிவங்களுடன் விளக்குக.", chapter: "Semiconductors", yearTag: "Sure 5 Marks", isGolden: true }
            ]
          },
          {
            category: "2 & 3 Marks (Compulsory Q24 & Q33 Candidates)",
            list: [
              { q: "State Coulomb's Law in vector form and write its limitations.", tamilQ: "கூலும் விதியை வெக்டர் வடிவில் எழுதி, அதன் வரம்புகளைக் கூறுக.", chapter: "Electrostatics", yearTag: "March 2024", isGolden: true },
              { q: "Why is a potentiometer preferred over a voltmeter for measuring EMF of a cell?", tamilQ: "மின்கலத்தின் மின்னியக்கு விசையை அளக்க வோல்ட் மீட்டரை விட மின்னழுத்தமானி ஏன் சிறந்தது?", chapter: "Current Electricity", yearTag: "Conceptual Favorite", isGolden: true },
              { q: "State de Broglie hypothesis and write the formula for de Broglie wavelength of an electron.", tamilQ: "டி பிராய் கருதுகோளைக் கூறி எலக்ட்ரானின் டி பிராய் அலைநீளத்திற்கான சமன்பாட்டை எழுதுக.", chapter: "Dual Nature", yearTag: "Compulsory Numerical Model", isGolden: true }
            ]
          }
        ]
      },

      // 2. CHEMISTRY (வேதியியல்)
      chemistry: {
        syllabusInfo: {
          title: "Class 12 Chemistry (Higher Secondary State Board)",
          tamilTitle: "12-ஆம் வகுப்பு வேதியியல் - பாடத்திட்டம் & புளூபிரிண்ட்",
          academicYear: "2024 - 2025",
          totalMarks: 70, // 30 practicals
          passMark: 15,
          blueprint: [
            { type: "Part 1 (One Mark MCQs)", count: 15, marks: 15, compulsory: "15 Compulsory" },
            { type: "Part 2 (2 Marks Short Answers)", count: 6, marks: 12, compulsory: "Q.No 24 Compulsory Question" },
            { type: "Part 3 (3 Marks Brief Answers)", count: 6, marks: 18, compulsory: "Q.No 33 Compulsory Problem" },
            { type: "Part 4 (5 Marks In-depth)", count: 5, marks: 25, compulsory: "All 5 from Internal Choice (Either/Or)" }
          ]
        },
        chapters: [
          {
            id: "chem12-1",
            number: 1,
            title: "Metallurgy",
            tamilTitle: "அலகு 1: உலோகவியல்",
            pages: 20,
            importance: "⭐⭐ Ellingham Diagram & Refining (5-7 Marks)",
            summary: "Concentration of ores (froth floatation, magnetic separation, leaching), Ellingham diagram thermodynamic principles, Refining methods: Mond process, Van Arkel method, Zone refining.",
            keyPoints: [
              "Froth Flotation: Used for sulphide ores (e.g., Galena $PbS$, Zinc blende $ZnS$) using pine oil as frothing agent.",
              "Mond Process for Nickel refining: $Ni + 4CO \\xrightarrow{350K} Ni(CO)_4 \\xrightarrow{450K} Ni + 4CO$.",
              "Van Arkel Method: Purifies Titanium ($Ti$) and Zirconium ($Zr$) via volatile iodides.",
              "Zone Refining: Based on fractional crystallization (impurities more soluble in molten state than solid state), used for semiconductors $Si, Ge, Ga$."
            ],
            formulae: ["ΔG° = ΔH° - TΔS° (Ellingham criterion)"]
          },
          {
            id: "chem12-2",
            number: 2,
            title: "p-Block Elements - I & II",
            tamilTitle: "அலகு 2 & 3: p-தொகுதி தனிமங்கள்",
            pages: 36,
            importance: "⭐⭐⭐ Borax Bead Test & Interhalogen Compounds (8-10 Marks)",
            summary: "Group 13 to Group 18: Borax bead test, preparation of Diborane, Allotropes of Carbon, Nitric acid Ostwald process, Sulphuric acid Contact process, Interhalogen compounds.",
            keyPoints: [
              "Borax Bead Test: Heated borax swells into transparent glass-like bead $NaBO_2 + B_2O_3$, giving characteristic colors with transition metals (Cobalt bead is blue).",
              "Diborane Structure ($B_2H_6$): Contains two 3-center-2-electron ($3c-2e^-$) banana bonds and four terminal $2c-2e^-$ B-H bonds.",
              "Contact Process for $H_2SO_4$: Catalyst $V_2O_5$, temperature $450^\\circ C$, pressure 2 atm.",
              "Interhalogen Compounds: $XY, XY_3, XY_5, XY_7$ (e.g., $IF_7$ has pentagonal bipyramidal shape)."
            ],
            formulae: ["Na₂B₄O₇·10H₂O → 2NaBO₂ + B₂O₃ + 10H₂O"]
          },
          {
            id: "chem12-5",
            number: 5,
            title: "Coordination Chemistry",
            tamilTitle: "அலகு 5: அணைவு வேதியியல்",
            pages: 32,
            importance: "⭐⭐⭐ Werner Theory & Valence Bond Theory (7-10 Marks)",
            summary: "Werner's coordination theory, IUPAC nomenclature of complexes, Isomerism (ionization, hydrate, linkage, optical), Valence Bond Theory (VBT), Crystal Field Theory (CFT).",
            keyPoints: [
              "Werner's Theory: Primary valency is ionizable (equals oxidation state); Secondary valency is non-ionizable (equals coordination number).",
              "Linkage Isomerism: Occurs with ambidentate ligands (e.g., $-NO_2^-$ nitro and $-ONO^-$ nitrito; $-SCN^-$ and $-NCS^-$).",
              "Crystal Field Splitting in Octahedral complexes: $d$-orbitals split into lower $t_{2g}$ ($d_{xy}, d_{yz}, d_{zx}$) and higher $e_g$ ($d_{x^2-y^2}, d_{z^2}$) by $\\Delta_o$."
            ],
            formulae: ["Magnetic Moment μ = √[n(n + 2)] BM"]
          },
          {
            id: "chem12-7",
            number: 7,
            title: "Chemical Kinetics",
            tamilTitle: "அலகு 7: வேதி வினைவேகவியல்",
            pages: 28,
            importance: "⭐⭐⭐ Rate Law & Half-Life Derivations (8-10 Marks)",
            summary: "Rate of reaction, Rate constant $k$, Order and Molecularity, Integrated rate law for zero and first order reactions, Half-life period $t_{1/2}$, Arrhenius equation.",
            keyPoints: [
              "First Order Rate Constant: $k = \\frac{2.303}{t} \\log_{10} \\left(\\frac{[A]_0}{[A]}\\right)$.",
              "First Order Half-life: $t_{1/2} = \\frac{0.693}{k}$ (Independent of initial reactant concentration).",
              "Zero Order: Rate $= k$; $t_{1/2} = \\frac{[A]_0}{2k}$.",
              "Arrhenius Equation: $k = A e^{-E_a / RT}$, $\\log \\frac{k_2}{k_1} = \\frac{E_a}{2.303 R} \\left(\\frac{T_2 - T_1}{T_1 T_2}\\right)$."
            ],
            formulae: [
              "k = (2.303 / t) · log([A]₀ / [A])",
              "t₁/₂ = 0.693 / k (First order)",
              "log(k₂/k₁) = (Ea / 2.303R) · (T₂ - T₁) / (T₁T₂)"
            ]
          },
          {
            id: "chem12-11",
            number: 11,
            title: "Hydroxy Compounds and Ethers",
            tamilTitle: "அலகு 11: ஹைட்ராக்ஸி சேர்மங்கள் மற்றும் ஈதர்கள்",
            pages: 34,
            importance: "⭐⭐⭐ Named Organic Reactions (8-12 Marks)",
            summary: "Classification of alcohols ($1^\\circ, 2^\\circ, 3^\\circ$), Lucas test, Victor Meyer test, Kolbe's reaction, Reimer-Tiemann reaction, Williamson ether synthesis.",
            keyPoints: [
              "Lucas Test: $3^\\circ$ alcohol gives turbidity immediately; $2^\\circ$ alcohol in 5 minutes; $1^\\circ$ alcohol no turbidity at room temperature.",
              "Victor Meyer Test: $1^\\circ$ alcohol gives Blood Red color (Nitrolic acid); $2^\\circ$ gives Blue (Pseudonitrol); $3^\\circ$ is Colourless.",
              "Kolbe's Reaction: Phenol $+ NaOH + CO_2 \\xrightarrow{400K, 4-7 atm} H^+$ gives Salicylic acid.",
              "Reimer-Tiemann Reaction: Phenol $+ CHCl_3 + aqueous\\;NaOH \\rightarrow$ Salicylaldehyde.",
              "Williamson Synthesis: $R-X + R'-ONa \\rightarrow R-O-R' + NaX$."
            ],
            formulae: [
              "Lucas: Anhydrous ZnCl₂ + Conc. HCl",
              "Phenol + CO₂ + NaOH → Salicylic Acid",
              "Phenol + CHCl₃ + NaOH → Salicylaldehyde"
            ]
          }
        ],
        pyqs: [
          { year: 2025, exam: "Class 12 Chemistry Model Exam 2025", tamilExam: "12-ஆம் வகுப்பு வேதியியல் அரசு மாதிரி வினாத்தாள் 2025", date: "Jan 2025", fileSize: "2.7 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Includes Chemical Kinetics Numericals & Organic Conversions", downloadCount: 26800 },
          { year: 2024, exam: "Class 12 Chemistry Public Exam March 2024", tamilExam: "அரசு பொதுத்தேர்வு வேதியியல் மார்ச் 2024 அசல் வினாத்தாள்", date: "March 2024", fileSize: "2.5 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Official Board Paper + 100% Solved Evaluation Key", downloadCount: 39500 },
          { year: 2023, exam: "Class 12 Chemistry Public Exam March 2023", tamilExam: "அரசு பொதுத்தேர்வு வேதியியல் மார்ச் 2023", date: "March 2023", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Named Organic Reactions and Reaction Mechanisms", downloadCount: 34100 },
          { year: 2022, exam: "Class 12 Chemistry Public Exam May 2022", tamilExam: "அரசு பொதுத்தேர்வு வேதியியல் மே 2022", date: "May 2022", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Standard Question Blueprint", downloadCount: 28300 },
          { year: 2021, exam: "Class 12 Chemistry PTA Sets 1-6", tamilExam: "12-ஆம் வகுப்பு வேதியியல் PTA மாதிரி வினாத்தாள்கள் 1-6", date: "2021", fileSize: "3.9 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Repeated Organic Reaction Mechanisms", downloadCount: 44200 },
          { year: 2020, exam: "Class 12 Chemistry Public Exam March 2020", tamilExam: "அரசு பொதுத்தேர்வு வேதியியல் மார்ச் 2020", date: "March 2020", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Benchmark SCERT Board Paper", downloadCount: 24700 },
          { year: 2019, exam: "Class 12 Chemistry DGE Question Bank 2019", tamilExam: "வேதியியல் சிறப்பு மாதிரி வினா வங்கி 2019", date: "2019", fileSize: "2.6 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Coordination & Kinetics Problem Bank", downloadCount: 20900 }
        ],
        importantQuestions: [
          {
            category: "5 Marks Named Organic Reactions & Derivations",
            list: [
              { q: "Derive the integrated rate equation for a First Order Reaction. Give two examples.", tamilQ: "முதல் வகை வினைக்கான தொகையிடப்பட்ட வேகச் சமன்பாட்டைப் பெறுக. இரு உதாரணங்கள் தருக.", chapter: "Chemical Kinetics", yearTag: "⭐⭐ Top Board Derivation", isGolden: true },
              { q: "Write notes on: (a) Kolbe's Reaction (b) Reimer-Tiemann Reaction (c) Lucas Test.", tamilQ: "சிறு குறிப்பு வரைக: (அ) கோல்ப் வினை (ஆ) ரீமர்-டீமன் வினை (இ) லூகாஸ் சோதனை.", chapter: "Hydroxy Compounds", yearTag: "March 2024 Exam", isGolden: true },
              { q: "State Werner's Coordination Theory postulates and write its limitations.", tamilQ: "வெர்னரின் அணைவுக் கோட்பாட்டின் முக்கியக் கொள்கைகளை எழுதி, அதன் வரம்புகளைக் கூறுக.", chapter: "Coordination Chemistry", yearTag: "Repeated 4 Times", isGolden: true },
              { q: "Explain the extraction of Nickel by Mond process and Titanium by Van Arkel method.", tamilQ: "மாண்ட் முறையில் நிக்கல் தூய்மையாக்கப்படுதலையும், வான் ஆர்கல் முறையில் டைட்டானியம் தூய்மையாக்கப்படுதலையும் விளக்குக.", chapter: "Metallurgy", yearTag: "Sure 5-Mark", isGolden: true }
            ]
          }
        ]
      },

      // 3. COMPUTER SCIENCE (கணினி அறிவியல்)
      cs: {
        syllabusInfo: {
          title: "Class 12 Computer Science (TN SCERT Syllabus)",
          tamilTitle: "12-ஆம் வகுப்பு கணினி அறிவியல் - பாடத்திட்டம் & மாதிரி வினாத்தாள்",
          academicYear: "2024 - 2025",
          totalMarks: 70, // 30 practicals
          passMark: 15,
          blueprint: [
            { type: "Part 1 (One Mark MCQs)", count: 15, marks: 15, compulsory: "15 Compulsory Questions" },
            { type: "Part 2 (2 Marks Short Answers)", count: 6, marks: 12, compulsory: "Q.No 24 Compulsory Question" },
            { type: "Part 3 (3 Marks Coding/Theory)", count: 6, marks: 18, compulsory: "Q.No 33 Compulsory Problem" },
            { type: "Part 4 (5 Marks Full Programs)", count: 5, marks: 25, compulsory: "All 5 from Internal Choice" }
          ]
        },
        chapters: [
          {
            id: "cs12-1",
            number: 1,
            title: "Function & Data Abstraction",
            tamilTitle: "அலகு 1: செயற்கூறு மற்றும் தரவு அருவமாக்கம்",
            pages: 18,
            importance: "⭐⭐ Pure vs Impure Functions (5 Marks)",
            summary: "Function definition, parameters and arguments, Interface vs Implementation, Pure and Impure functions, Abstract Data Types (ADT), Constructors and Selectors.",
            keyPoints: [
              "Pure Functions: Return the same result for the same arguments without side effects (e.g., $strlen(), sin()$).",
              "Impure Functions: Return value may change or may modify external state (e.g., $random(), Date()$).",
              "Constructors create abstract data type; Selectors retrieve information from the data type."
            ],
            formulae: []
          },
          {
            id: "cs12-3",
            number: 3,
            title: "Scoping and Algorithmic Strategies",
            tamilTitle: "அலகு 3 & 4: வரையெல்லை மற்றும் நெறிமுறை உத்திகள்",
            pages: 26,
            importance: "⭐⭐⭐ LEGB Rule & Searching/Sorting Algorithms (8-10 Marks)",
            summary: "LEGB Scope rule (Local, Enclosing, Global, Built-in), Algorithm characteristics, Time and Space complexity, Asymptotic notations (Big O, Omega, Theta), Searching (Linear & Binary search), Sorting (Bubble, Selection, Insertion).",
            keyPoints: [
              "LEGB Rule: Scope is searched in order: Local $\\rightarrow$ Enclosing $\\rightarrow$ Global $\\rightarrow$ Built-in.",
              "Linear Search Time Complexity: $O(n)$; Binary Search: $O(\\log_2 n)$.",
              "Bubble Sort: Repeatedly swaps adjacent elements if they are in the wrong order; worst-case time complexity $O(n^2)$."
            ],
            formulae: ["Time Complexity: Binary Search O(log n), Bubble Sort O(n²)"]
          },
          {
            id: "cs12-5",
            number: 5,
            title: "Python - Variables, Operators and Control Structures",
            tamilTitle: "அலகு 5 & 6: பைத்தான் மாறிகள், செயற்குறிகள் மற்றும் கட்டுப்பாட்டு கட்டமைப்புகள்",
            pages: 28,
            importance: "⭐⭐⭐ Control Flow Programs (7-10 Marks)",
            summary: "Python tokens, Literals, Indentation, Operators, Decision making (if-else, elif), Loops (while, for), Jump statements (break, continue, pass).",
            keyPoints: [
              "Python uses indentation (4 spaces) instead of curly braces `{}` to define code blocks.",
              "`range(start, stop, step)` function generates a sequence of numbers.",
              "`break` terminates the loop immediately; `continue` skips the rest of the current iteration; `pass` is a null statement."
            ],
            formulae: ["range(start, stop, step)"]
          },
          {
            id: "cs12-7",
            number: 7,
            title: "Python Functions, Strings & Collections",
            tamilTitle: "அலகு 7, 8 & 9: பைத்தான் செயற்கூறுகள், சரங்கள், பட்டியல் மற்றும் அகராதி",
            pages: 36,
            importance: "⭐⭐⭐ Core Coding (10-15 Marks)",
            summary: "User-defined functions, Anonymous lambda functions, Recursion, String slicing and formatting, Lists (mutable), Tuples (immutable), Sets, Dictionaries (key-value pairs).",
            keyPoints: [
              "Lambda Function: `lambda arg1, arg2: expression` (anonymous, single-line function).",
              "List vs Tuple: Lists are enclosed in `[]` and mutable; Tuples are in `()` and immutable.",
              "Dictionary: Key-value pairs enclosed in `{}`; keys must be unique and immutable."
            ],
            formulae: ["lambda arguments: expression"]
          },
          {
            id: "cs12-10",
            number: 10,
            title: "Python Classes, Objects and SQL Databases",
            tamilTitle: "அலகு 10, 11 & 12: இனக்குழுக்கள், பொருள்கள் மற்றும் SQL தரவுத்தளம்",
            pages: 40,
            importance: "⭐⭐⭐ OOPs & SQL Commands (10-15 Marks)",
            summary: "Class definition, `__init__()` constructor, Private and Public data members, Relational Database Management System (RDBMS), SQL commands (DDL, DML, DCL, TCL), SELECT queries with WHERE, GROUP BY, ORDER BY.",
            keyPoints: [
              "Constructor in Python: `def __init__(self, ...):` automatically executed when object is instantiated.",
              "Private attributes start with double underscore `__` (e.g., `self.__marks`).",
              "SQL Categories: DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), DQL (SELECT), TCL (COMMIT, ROLLBACK)."
            ],
            formulae: ["SELECT col1, col2 FROM table WHERE condition GROUP BY col ORDER BY col ASC/DESC;"]
          }
        ],
        pyqs: [
          { year: 2025, exam: "Class 12 Computer Science Model Exam 2025", tamilExam: "12-ஆம் வகுப்பு கணினி அறிவியல் மாதிரி வினாத்தாள் 2025", date: "Jan 2025", fileSize: "2.4 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Python Coding Output and Error Spotting Questions", downloadCount: 29500 },
          { year: 2024, exam: "Class 12 Computer Science Public Exam March 2024", tamilExam: "அரசு பொதுத்தேர்வு கணினி அறிவியல் மார்ச் 2024 அசல் வினாத்தாள்", date: "March 2024", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Full Question Paper with 100% Verified Coding Keys", downloadCount: 43200 },
          { year: 2023, exam: "Class 12 Computer Science Public Exam March 2023", tamilExam: "அரசு பொதுத்தேர்வு கணினி அறிவியல் மார்ச் 2023", date: "March 2023", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 70, highlight: "SQL Queries and Python CSV Data Handling", downloadCount: 36700 },
          { year: 2022, exam: "Class 12 Computer Science Public Exam May 2022", tamilExam: "அரசு பொதுத்தேர்வு கணினி அறிவியல் மே 2022", date: "May 2022", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Algorithm Complexity and Searching Problems", downloadCount: 30100 },
          { year: 2021, exam: "Class 12 Computer Science PTA Sets 1-6", tamilExam: "12-ஆம் வகுப்பு கணினி அறிவியல் PTA மாதிரி வினாத்தாள்கள் 1-6", date: "2021", fileSize: "3.7 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Comprehensive Python Coding Bank", downloadCount: 46800 },
          { year: 2020, exam: "Class 12 Computer Science Public Exam March 2020", tamilExam: "அரசு பொதுத்தேர்வு கணினி அறிவியல் மார்ச் 2020", date: "March 2020", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Benchmark SCERT Board Question Paper", downloadCount: 25400 },
          { year: 2019, exam: "Class 12 Computer Science SCERT Question Bank 2019", tamilExam: "கணினி அறிவியல் சிறப்பு மாதிரி வினா வங்கி 2019", date: "2019", fileSize: "2.5 MB", hasAnswerKey: true, totalMarks: 70, highlight: "SQL & Python Code Output Question Bank", downloadCount: 22100 }
        ],
        importantQuestions: [
          {
            category: "5 Marks (Algorithm & Coding Programs)",
            list: [
              { q: "Explain the LEGB rule for variable scoping in Python with neat diagram and code example.", tamilQ: "பைத்தானில் மாறிகளின் வரையெல்லையைக் குறிக்கும் LEGB விதியை படத்துடன் விவரி.", chapter: "Scoping", yearTag: "⭐⭐ Top Golden 5 Marks", isGolden: true },
              { q: "Write a Python program to perform Binary Search on a sorted array of elements.", tamilQ: "வரிசைப்படுத்தப்பட்ட உறுப்புகளின் மீது இருமத் தேடலை (Binary Search) நிகழ்த்தும் பைத்தான் நிரலை எழுதுக.", chapter: "Algorithms", yearTag: "March 2024 Exam", isGolden: true },
              { q: "Differentiate between Pure and Impure functions with suitable code examples.", tamilQ: "தூய மற்றும் தூய்மையற்ற செயற்கூறுகளை தகுந்த எடுத்துக்காட்டுகளுடன் வேறுபடுத்துக.", chapter: "Functions", yearTag: "Repeated Board Question", isGolden: true },
              { q: "Explain various components of SQL commands (DDL, DML, DQL, TCL) with syntax and examples.", tamilQ: "SQL-ன் கட்டளைகளின் வகைகளை (DDL, DML, DQL, TCL) தொடரியல் மற்றும் உதாரணங்களுடன் விளக்குக.", chapter: "SQL Databases", yearTag: "Sure 5-Mark", isGolden: true }
            ]
          }
        ]
      },

      // 4. MATHEMATICS (கணிதம்) - Class 12
      maths: {
        syllabusInfo: {
          title: "Class 12 Higher Secondary Mathematics (TN SCERT)",
          tamilTitle: "12-ஆம் வகுப்பு கணிதம் - பொதுத்தேர்வு பாடத்திட்டம்",
          academicYear: "2024 - 2025",
          totalMarks: 90,
          passMark: 25,
          blueprint: [
            { type: "Part 1 (One Mark MCQs)", count: 20, marks: 20, compulsory: "Compulsory" },
            { type: "Part 2 (2 Marks Short)", count: 7, marks: 14, compulsory: "Q.No 30 Compulsory" },
            { type: "Part 3 (3 Marks Brief)", count: 7, marks: 21, compulsory: "Q.No 40 Compulsory" },
            { type: "Part 4 (5 Marks Either/Or)", count: 7, marks: 35, compulsory: "All 7 from 14 choices" }
          ]
        },
        chapters: [
          {
            id: "m12-1",
            number: 1,
            title: "Applications of Matrices and Determinants",
            tamilTitle: "அணிகள் மற்றும் அணிக்கோவைகளின் பயன்பாடுகள்",
            pages: 28,
            importance: "⭐⭐⭐ High Scoring (10-15 Marks)",
            summary: "Adjoint, Inverse matrix $A^{-1} = \\frac{1}{|A|} \\text{adj } A$, Rank of matrix by minor and row reduction methods, Gaussian elimination, Cramer's rule, Rouché-Capelli consistency theorem.",
            keyPoints: [
              "Matrix inverse exists if and only if $A$ is non-singular ($|A| \\neq 0$).",
              "System of equations $AX = B$: $X = A^{-1} B$.",
              "Cramer's Rule: $x = \\frac{\\Delta_x}{\\Delta}, y = \\frac{\\Delta_y}{\\Delta}, z = \\frac{\\Delta_z}{\\Delta}$ (valid when $\\Delta \\neq 0$).",
              "Rouché-Capelli Theorem: Consistent if $\\rho(A) = \\rho([A|B])$. If $\\rho(A) = \\rho([A|B]) = n$, unique solution; if $< n$, infinitely many solutions."
            ],
            formulae: [
              "A⁻¹ = (1 / |A|) · adj(A)",
              "Cramer's: x = Δx / Δ, y = Δy / Δ, z = Δz / Δ",
              "adj(AB) = adj(B) · adj(A)"
            ]
          },
          {
            id: "m12-2",
            number: 2,
            title: "Complex Numbers",
            tamilTitle: "அலகு 2: கலப்பு எண்கள்",
            pages: 22,
            importance: "⭐⭐ De Moivre's Theorem & Roots of Unity",
            summary: "Argand plane, Modulus $|z| = \\sqrt{x^2+y^2}$, Conjugate properties, Polar and Euler form $r e^{i\\theta}$, De Moivre's theorem, $n$-th roots of unity.",
            keyPoints: [
              "Triangle Inequality: $|z_1 + z_2| \\leq |z_1| + |z_2|$.",
              "De Moivre's Theorem: $(\\cos \\theta + i \\sin \\theta)^n = \\cos(n\\theta) + i \\sin(n\\theta)$.",
              "Cube roots of unity: $1, \\omega, \\omega^2$ where $1 + \\omega + \\omega^2 = 0$ and $\\omega^3 = 1$."
            ],
            formulae: [
              "|z| = √(x² + y²)",
              "Euler: e^(iθ) = cos θ + i sin θ",
              "1 + ω + ω² = 0, ω³ = 1"
            ]
          },
          {
            id: "m12-6",
            number: 6,
            title: "Applications of Vector Algebra",
            tamilTitle: "அலகு 6: வெக்டர் இயற்கணிதத்தின் பயன்பாடுகள்",
            pages: 36,
            importance: "⭐⭐⭐ Guaranteed 5 Mark Vector Proofs (12-15 Marks)",
            summary: "Scalar and Vector triple products, Vector proofs of $\\cos(\\alpha \\pm \\beta)$ and $\\sin(\\alpha \\pm \\beta)$, Skew lines and shortest distance, Equations of planes in vector and Cartesian forms.",
            keyPoints: [
              "Scalar triple product $[\vec{a}, \\vec{b}, \\vec{c}]$ represents the volume of a parallelopiped.",
              "Three vectors are coplanar if and only if $[\\vec{a}, \\vec{b}, \\vec{c}] = 0$.",
              "Shortest distance between two skew lines: $\\delta = \\left| \\frac{(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{u} \\times \\vec{v})}{|\\vec{u} \\times \\vec{v}|} \\right|$."
            ],
            formulae: [
              "cos(α - β) = cos α cos β + sin α sin β",
              "sin(α + β) = sin α cos β + cos α sin β",
              "Shortest distance d = |(a₂ - a₁) · (u × v)| / |u × v|"
            ]
          },
          {
            id: "m12-7",
            number: 7,
            title: "Applications of Differential Calculus",
            tamilTitle: "அலகு 7: வகைநுண்கணிதத்தின் பயன்பாடுகள்",
            pages: 38,
            importance: "⭐⭐⭐ Tangents, Normals, L'Hôpital & Maxima-Minima",
            summary: "Slope of tangent and normal, Mean Value Theorems (Rolle's & Lagrange's), Maclaurin and Taylor series, Indeterminate forms & L'Hôpital's rule, Monotonicity, Local maxima and minima.",
            keyPoints: [
              "Equation of Tangent: $y - y_1 = m(x - x_1)$ where $m = \\left(\\frac{dy}{dx}\\right)_{(x_1, y_1)}$.",
              "Rolle's Theorem: If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$ with $f(a)=f(b)$, then $\\exists c \\in (a,b)$ such that $f'(c) = 0$.",
              "L'Hôpital's Rule: $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$ for $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$."
            ],
            formulae: [
              "Tangent: y - y₁ = m(x - x₁)",
              "L'Hôpital: lim f(x)/g(x) = lim f'(x)/g'(x)",
              "Maclaurin: f(x) = f(0) + x f'(0) + (x²/2!) f''(0) + ..."
            ]
          }
        ],
        pyqs: [
          { year: 2025, exam: "Class 12 Maths Model Exam 2025", tamilExam: "12-ஆம் வகுப்பு கணிதம் அரசு மாதிரி வினாத்தாள் 2025", date: "Jan 2025", fileSize: "2.8 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Full 90 Marks blueprint + Compulsory Q30/Q40 Solutions", downloadCount: 31200 },
          { year: 2024, exam: "Class 12 Maths Public Exam March 2024", tamilExam: "அரசு பொதுத்தேர்வு கணிதம் மார்ச் 2024 அசல் வினாத்தாள்", date: "March 2024", fileSize: "2.6 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Official Board Paper + 100/100 Step Marking Guide", downloadCount: 46200 },
          { year: 2023, exam: "Class 12 Maths Public Exam March 2023", tamilExam: "அரசு பொதுத்தேர்வு கணிதம் மார்ச் 2023", date: "March 2023", fileSize: "2.4 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Vector Algebra and Conics Solved Solutions", downloadCount: 38400 },
          { year: 2022, exam: "Class 12 Maths Public Exam May 2022", tamilExam: "அரசு பொதுத்தேர்வு கணிதம் மே 2022", date: "May 2022", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Step-by-step scoring rubric", downloadCount: 31800 },
          { year: 2021, exam: "12th Maths PTA Model Sets 1-6", tamilExam: "12-ஆம் வகுப்பு கணிதம் PTA மாதிரி வினாத்தாள்கள் 1-6", date: "2021", fileSize: "4.2 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Centum Seekers Golden Question Collection", downloadCount: 51200 },
          { year: 2020, exam: "Class 12 Maths Public Exam March 2020", tamilExam: "அரசு பொதுத்தேர்வு கணிதம் மார்ச் 2020", date: "March 2020", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Benchmark SCERT Revised Paper", downloadCount: 27900 },
          { year: 2019, exam: "Class 12 Maths SCERT Question Bank 2019", tamilExam: "12-ஆம் வகுப்பு கணிதம் சிறப்பு வினா வங்கி 2019", date: "2019", fileSize: "3.1 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Vectors & Calculus Golden Bank", downloadCount: 23600 }
        ],
        importantQuestions: [
          {
            category: "5 Marks (Part IV Either/Or - Top Golden Questions)",
            list: [
              { q: "Prove by vector method that $\\cos(\\alpha - \\beta) = \\cos \\alpha \\cos \\beta + \\sin \\alpha \\sin \\beta$.", tamilQ: "வெக்டர் முறையில் $\\cos(\\alpha - \\beta) = \\cos \\alpha \\cos \\beta + \\sin \\alpha \\sin \\beta$ என நிறுவுக.", chapter: "Vector Algebra", yearTag: "⭐⭐ Most Repeated in Board", isGolden: true },
              { q: "Solve the system of linear equations by Cramer's rule: $x - y + 2z = 2, 2x + y + 4z = 7, 4x - y + z = 4$.", tamilQ: "கிராமரின் விதியைப் பயன்படுத்தி ஒருங்கமை சமன்பாடுகளைத் தீர்க்க.", chapter: "Matrices", yearTag: "March 2024 Public", isGolden: true },
              { q: "Find the non-parametric form of vector equation and Cartesian equation of the plane passing through three non-collinear points.", tamilQ: "கொடுக்கப்பட்ட மூன்று புள்ளிகள் வழியே செல்லும் தளத்தின் கார்டீசியன் சமன்பாடு காண்க.", chapter: "Vector Algebra", yearTag: "Sure 5 Marks", isGolden: true }
            ]
          }
        ]
      },

      // 5. TAMIL (தமிழ்) - Class 12
      tamil: {
        syllabusInfo: {
          title: "12-ஆம் வகுப்பு தமிழ் பொதுத்தேர்வு பாடத்திட்டம்",
          tamilTitle: "12-ஆம் வகுப்பு தமிழ் - அசல் வினாத்தாள் அமைப்பு & மதிப்பெண் பங்கீடு",
          academicYear: "2024 - 2025",
          totalMarks: 100,
          passMark: 35,
          blueprint: [
            { type: "பகுதி 1 (பலவுள் தெரிக)", count: 14, marks: 14, compulsory: "அனைத்தும்" },
            { type: "பகுதி 2 (குறு வினாக்கள்)", count: 9, marks: 18, compulsory: "வினா 21 & 28 கட்டாயம்" },
            { type: "பகுதி 3 (சிறு வினாக்கள்)", count: 6, marks: 24, compulsory: "வினா 34 & 37 கட்டாயம்" },
            { type: "பகுதி 4 (நெடு வினாக்கள்)", count: 3, marks: 18, compulsory: "உரைநடை, செய்யுள், துணைப்பாடம்" },
            { type: "பகுதி 5 (பொதுக்கட்டுரை & படிவம்)", count: 4, marks: 26, compulsory: "அனைத்தும்" }
          ]
        },
        chapters: [
          {
            id: "t12-1",
            number: 1,
            title: "இளந்தமிழே! & தமிழாய் எழுதுவோம் (இயல் 1)",
            tamilTitle: "இயல் 1: மொழி - இளந்தமிழே!, தமிழாய் எழுதுவோம்",
            pages: 22,
            importance: "⭐⭐ சிற்பி பாலசுப்பிரமணியம் கவிதைகள்",
            summary: "சிற்பி பாலசுப்பிரமணியத்தின் இளந்தமிழே கவிதை, தமிழாய் எழுதுவோம் பிழையின்றி எழுத வழிகள், தண்டியலங்கார உரை மேற்கோள் (தன்னேர் இலாத தமிழ்).",
            keyPoints: [
              "இளந்தமிழே: 'செம்பருதி மலைமேட்டில் தலையைச் சாய்ப்பான்; செந்நிறத்துப் பூக்காடாய் வானமெல்லாம்!'.",
              "மயங்கொலி எழுத்துகள் (ண, ன, ந; ல, ள, ழ; ர, ற) சரியான பயன்பாடு.",
              "தன்னேர் இலாத தமிழ்: கதிரவன் புற இருளை நீக்குகிறான்; தமிழ் மக்களின் அக இருளை நீக்குகிறது."
            ],
            formulae: []
          },
          {
            id: "t12-2",
            number: 2,
            title: "பிறகொரு நாள் கோடை & நெடுநல்வாடை (இயல் 2)",
            tamilTitle: "இயல் 2: இயற்கை - நெடுநல்வாடை (நக்கீரர்)",
            pages: 20,
            importance: "⭐⭐⭐ நக்கீரரின் நெடுநல்வாடை கூதிர்கால வருணனை",
            summary: "நக்கீரரின் நெடுநல்வாடை கூதிர்கால வருணனை, ஐயப்ப மாதவனின் கவிதை, நால்வகை பொருத்தங்கள் இலக்கணம்.",
            keyPoints: [
              "நெடுநல்வாடை: வாடைக்கால வருணனை - மாடுகள் குளிரால் புல் மேய்தலை மறந்தன; குரங்குகள் குளிரால் நடுங்கின.",
              "திணை: வாகைத் திணை, துறை: கூதிர் பாசறை."
            ],
            formulae: []
          }
        ],
        pyqs: [
          { year: 2025, exam: "Class 12 Tamil Model Exam 2025", tamilExam: "12-ஆம் வகுப்பு தமிழ் அரசு மாதிரி வினாத்தாள் 2025", date: "Jan 2025", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "முழு வினாத்தாள் வடிவம் மற்றும் அதிகாரப்பூர்வ விடைக் குறிப்பு", downloadCount: 29800 },
          { year: 2024, exam: "Class 12 Tamil Public Exam March 2024", tamilExam: "அரசு பொதுத்தேர்வு தமிழ் மார்ச் 2024 அசல் வினாத்தாள்", date: "March 2024", fileSize: "2.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "100/100 மதிப்பெண் மாதிரி விடைக் குறிப்பு", downloadCount: 44100 },
          { year: 2023, exam: "Class 12 Tamil Public Exam March 2023", tamilExam: "அரசு பொதுத்தேர்வு தமிழ் மார்ச் 2023", date: "March 2023", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "முழு விடைக் குறிப்புகளுடன் கூடிய தேர்வுத்தாள்", downloadCount: 36200 },
          { year: 2022, exam: "Class 12 Tamil Public Exam May 2022", tamilExam: "அரசு பொதுத்தேர்வு தமிழ் மே 2022", date: "May 2022", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 100, highlight: "இலக்கண மற்றும் அணி வினாக்கள் வழிகாட்டி", downloadCount: 29400 },
          { year: 2021, exam: "12th Tamil PTA Sets 1-6", tamilExam: "12-ஆம் வகுப்பு தமிழ் PTA வினாத்தாள்கள் 1-6", date: "2021", fileSize: "3.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "அரசு தேர்வுக் குழுவின் பொன் வினாக்கள்", downloadCount: 47200 },
          { year: 2020, exam: "Class 12 Tamil Public Exam March 2020", tamilExam: "அரசு பொதுத்தேர்வு தமிழ் மார்ச் 2020", date: "March 2020", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "அசல் பொதுத்தேர்வு வினாத்தாள்", downloadCount: 26300 },
          { year: 2019, exam: "Class 12 Tamil SCERT Special Bank 2019", tamilExam: "12-ஆம் வகுப்பு தமிழ் சிறப்பு வினா வங்கி 2019", date: "2019", fileSize: "2.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "கட்டுரை மற்றும் கடித மாதிரித் தொகுப்பு", downloadCount: 22800 }
        ],
        importantQuestions: [
          {
            category: "6 மதிப்பெண் நெடு வினாக்கள்",
            list: [
              { q: "சிற்பியின் 'இளந்தமிழே' கவிதையின் திரண்ட கருத்தினை விளக்குக.", tamilQ: "சிற்பியின் 'இளந்தமிழே' கவிதையின் திரண்ட கருத்தினை விளக்குக.", chapter: "இளந்தமிழே", yearTag: "⭐⭐ Public Favorite", isGolden: true },
              { q: "நெடுநல்வாடை காட்டும் கூதிர்கால வாழ்வியலைத் தொகுத்து எழுதுக.", tamilQ: "நெடுநல்வாடை காட்டும் கூதிர்கால வாழ்வியலைத் தொகுத்து எழுதுக.", chapter: "நெடுநல்வாடை", yearTag: "March 2024", isGolden: true }
            ]
          }
        ]
      },

      // 6. ENGLISH - Class 12
      english: {
        syllabusInfo: {
          title: "Class 12 English Higher Secondary (TN SCERT)",
          tamilTitle: "12-ஆம் வகுப்பு ஆங்கிலம் - பொதுத்தேர்வு பாடத்திட்டம்",
          academicYear: "2024 - 2025",
          totalMarks: 90,
          passMark: 25,
          blueprint: [
            { type: "Part 1 (Synonyms, Antonyms, Grammar 20 Qs)", count: 20, marks: 20, compulsory: "Compulsory" },
            { type: "Part 2 (Poetry ERC & Prose Qs)", count: 7, marks: 14, compulsory: "Compulsory" },
            { type: "Part 3 (Paragraphs, Notice, Report, Dialogue)", count: 7, marks: 21, compulsory: "Compulsory" },
            { type: "Part 4 (7 Long Questions - Either/Or)", count: 7, marks: 35, compulsory: "All 7 choices" }
          ]
        },
        chapters: [
          {
            id: "e12-1",
            number: 1,
            title: "Two Gentlemen of Verona (A.J. Cronin)",
            tamilTitle: "Unit 1 Prose: வெரோனா நகரத்து இரு நற்பண்பாளர்கள்",
            pages: 18,
            importance: "⭐⭐⭐ Core Prose (Nicola and Jacopo)",
            summary: "Story of Nicola (13) and Jacopo (12) working relentlessly in post-war Italy to pay for their sister Lucia's tuberculosis treatment.",
            keyPoints: [
              "Themes: Family devotion, selfless sacrifice, dignity of labour, courage in the face of war.",
              "Narrator respects their pride and privacy, choosing not to embarrass them."
            ],
            formulae: []
          },
          {
            id: "e12-2",
            number: 2,
            title: "The Castle (Poem by Edwin Muir)",
            tamilTitle: "Unit 1 Poem: கோட்டை - The Castle",
            pages: 10,
            importance: "⭐⭐ ERC Favorite (Betrayal theme)",
            summary: "An impregnable castle with strong walls and brave soldiers falls not to enemy weapons, but to treachery when a warder lets in enemies for gold.",
            keyPoints: [
              "Key line: 'Our only enemy was gold, And we had no arms to fight it with.'"
            ],
            formulae: []
          }
        ],
        pyqs: [
          { year: 2025, exam: "Class 12 English Model Exam 2025", tamilExam: "12-ஆம் வகுப்பு ஆங்கிலம் அரசு மாதிரி வினாத்தாள் 2025", date: "Jan 2025", fileSize: "2.4 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Full Vocabulary, Idioms & ERC Scoring Guide", downloadCount: 27900 },
          { year: 2024, exam: "Class 12 English Public Exam March 2024", tamilExam: "அரசு பொதுத்தேர்வு ஆங்கிலம் மார்ச் 2024", date: "March 2024", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Original Paper + 100% Correct Grammar Key", downloadCount: 41200 },
          { year: 2023, exam: "Class 12 English Public Exam March 2023", tamilExam: "அரசு பொதுத்தேர்வு ஆங்கிலம் மார்ச் 2023", date: "March 2023", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Complete Solutions with Letter and Essay templates", downloadCount: 33400 },
          { year: 2022, exam: "Class 12 English Public Exam May 2022", tamilExam: "அரசு பொதுத்தேர்வு ஆங்கிலம் மே 2022", date: "May 2022", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Grammar Master Guide (Synthesis, Conditional)", downloadCount: 26800 },
          { year: 2021, exam: "12th English PTA Sets 1-6", tamilExam: "12-ஆம் வகுப்பு ஆங்கிலம் PTA வினாத்தாள்கள் 1-6", date: "2021", fileSize: "3.5 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Most repeated Error Spotting and Phrasal Verbs", downloadCount: 42100 },
          { year: 2020, exam: "Class 12 English Public Exam March 2020", tamilExam: "அரசு பொதுத்தேர்வு ஆங்கிலம் மார்ச் 2020", date: "March 2020", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Benchmark Board Question Paper", downloadCount: 23500 },
          { year: 2019, exam: "Class 12 English SCERT Bank 2019", tamilExam: "12-ஆம் வகுப்பு ஆங்கிலம் சிறப்பு வினா வங்கி 2019", date: "2019", fileSize: "2.6 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Prose & Poetry Comprehensive Paragraphs", downloadCount: 19800 }
        ],
        importantQuestions: [
          {
            category: "5 Marks Prose Paragraphs",
            list: [
              { q: "Highlight the selfless sacrifice and boundless love displayed by Nicola and Jacopo in 'Two Gentlemen of Verona'.", tamilQ: "நிகோலா மற்றும் ஜாகோபோவின் தியாக குணத்தை விளக்குக.", chapter: "Two Gentlemen of Verona", yearTag: "⭐⭐ Core Board Question", isGolden: true }
            ]
          }
        ]
      },

      // 7. BIOLOGY (உயிரியல்) - Class 12
      biology: {
        syllabusInfo: {
          title: "Class 12 Biology (Botany & Zoology)",
          tamilTitle: "12-ஆம் வகுப்பு உயிரியல் (தாவரவியல் & விலங்கியல்)",
          academicYear: "2024 - 2025",
          totalMarks: 70, // 30 practicals
          passMark: 15,
          blueprint: [
            { type: "Part 1 (Bio-Botany & Bio-Zoology MCQs)", count: 16, marks: 16, compulsory: "Compulsory" },
            { type: "Part 2 (2 Marks Short Answers)", count: 8, marks: 16, compulsory: "Q.No Compulsory" },
            { type: "Part 3 (3 Marks Brief Answers)", count: 6, marks: 18, compulsory: "Compulsory" },
            { type: "Part 4 (5 Marks Diagrams & Essays)", count: 4, marks: 20, compulsory: "Internal Choice" }
          ]
        },
        chapters: [
          {
            id: "bio12-1",
            number: 1,
            title: "Asexual and Sexual Reproduction in Plants",
            tamilTitle: "அலகு 1: தாவரங்களில் பாலிலா மற்றும் பாலினப் பெருக்கம்",
            pages: 24,
            importance: "⭐⭐ T.S of Mature Anther & Ovule Structure",
            summary: "Microsporogenesis, T.S of anther, Megasporogenesis, Structure of Anatropous ovule, Pollination types, Double fertilization and triple fusion.",
            keyPoints: [
              "T.S of Mature Anther layers: Epidermis, Endothecium (hygroscopic), Middle layers, Tapetum (nutritive tissue).",
              "Double Fertilization: One male gamete fuses with egg ($2n$ zygote); second male gamete fuses with secondary nucleus ($3n$ primary endosperm nucleus)."
            ],
            formulae: []
          },
          {
            id: "bio12-2",
            number: 1,
            title: "Human Reproduction (மனித இனப்பெருக்கம் - விலங்கியல்)",
            tamilTitle: "விலங்கியல் அலகு 1: மனித இனப்பெருக்கம்",
            pages: 26,
            importance: "⭐⭐ Spermatogenesis & Menstrual Cycle",
            summary: "Male and female reproductive systems, Spermatogenesis and Oogenesis, Menstrual cycle phases (Follicular, Ovulatory, Luteal), Fertilization, Embryonic development, Parturition.",
            keyPoints: [
              "Sertoli cells provide nourishment to developing spermatozoa.",
              "LH surge triggers ovulation around day 14 of menstrual cycle."
            ],
            formulae: []
          }
        ],
        pyqs: [
          { year: 2025, exam: "Class 12 Biology Model 2025", tamilExam: "12-ஆம் வகுப்பு உயிரியல் மாதிரி 2025", date: "Jan 2025", fileSize: "2.6 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Botany & Zoology Diagrams Solved", downloadCount: 24500 },
          { year: 2024, exam: "Class 12 Biology Public March 2024", tamilExam: "பொதுத்தேர்வு உயிரியல் மார்ச் 2024", date: "March 2024", fileSize: "2.4 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Official Board Paper + Diagram Key", downloadCount: 38700 },
          { year: 2023, exam: "Class 12 Biology Public March 2023", tamilExam: "பொதுத்தேர்வு உயிரியல் மார்ச் 2023", date: "March 2023", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Complete Step Marking", downloadCount: 31200 },
          { year: 2022, exam: "Class 12 Biology Public May 2022", tamilExam: "பொதுத்தேர்வு உயிரியல் மே 2022", date: "May 2022", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Standard Question Bank", downloadCount: 25800 },
          { year: 2021, exam: "12th Biology PTA Sets 1-6", tamilExam: "12-ஆம் வகுப்பு உயிரியல் PTA வினாத்தாள்கள் 1-6", date: "2021", fileSize: "3.8 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Repeated Diagram Questions", downloadCount: 40100 },
          { year: 2020, exam: "Class 12 Biology Public March 2020", tamilExam: "பொதுத்தேர்வு உயிரியல் மார்ச் 2020", date: "March 2020", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Original Board Paper", downloadCount: 22400 },
          { year: 2019, exam: "Class 12 Biology SCERT Bank 2019", tamilExam: "உயிரியல் சிறப்பு மாதிரி வினா வங்கி 2019", date: "2019", fileSize: "2.5 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Standard Question Bank", downloadCount: 19500 }
        ],
        importantQuestions: [
          { category: "5 Marks Diagrams", list: [{ q: "Describe the structure of a mature Anatropous Ovule with a neat labeled diagram.", tamilQ: "முதிர்ந்த சூலின் (Anatropous Ovule) அமைப்பை படத்துடன் விவரி.", chapter: "Reproduction in Plants", yearTag: "Golden 5-Mark", isGolden: true }] }
        ]
      },

      // 8. COMMERCE (வணிகவியல்) - Class 12
      commerce: {
        syllabusInfo: {
          title: "Class 12 Commerce & Accountancy",
          tamilTitle: "12-ஆம் வகுப்பு வணிகவியல் & கணக்குப்பதிவியல்",
          academicYear: "2024 - 2025",
          totalMarks: 90,
          passMark: 25,
          blueprint: [
            { type: "Part 1 (One Mark MCQs)", count: 20, marks: 20, compulsory: "Compulsory" },
            { type: "Part 2 (2 Marks Short)", count: 7, marks: 14, compulsory: "Q.No 30 Compulsory" },
            { type: "Part 3 (3 Marks Brief)", count: 7, marks: 21, compulsory: "Q.No 40 Compulsory" },
            { type: "Part 4 (5 Marks Either/Or)", count: 7, marks: 35, compulsory: "All 7 choices" }
          ]
        },
        chapters: [
          {
            id: "com12-1",
            number: 1,
            title: "Principles of Management",
            tamilTitle: "அலகு 1: மேலாண்மை தத்துவங்கள்",
            pages: 22,
            importance: "⭐⭐ Henry Fayol's 14 Principles",
            summary: "Management concepts, Scientific Management (F.W. Taylor), Modern Management principles by Henri Fayol (Division of work, unity of command, scalar chain).",
            keyPoints: [
              "Fayol's 14 Principles: Division of work, Authority & Responsibility, Discipline, Unity of Command, Unity of Direction, Scalar chain, Order, Equity, Esprit de Corps."
            ],
            formulae: []
          }
        ],
        pyqs: [
          { year: 2025, exam: "Class 12 Commerce Model 2025", tamilExam: "12-ஆம் வகுப்பு வணிகவியல் மாதிரி 2025", date: "Jan 2025", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Model Key", downloadCount: 19800 },
          { year: 2024, exam: "Class 12 Commerce Public March 2024", tamilExam: "பொதுத்தேர்வு வணிகவியல் மார்ச் 2024", date: "March 2024", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Original", downloadCount: 32400 },
          { year: 2023, exam: "Class 12 Commerce Public March 2023", tamilExam: "பொதுத்தேர்வு வணிகவியல் மார்ச் 2023", date: "March 2023", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Solved", downloadCount: 26100 },
          { year: 2022, exam: "Class 12 Commerce Public May 2022", tamilExam: "பொதுத்தேர்வு வணிகவியல் மே 2022", date: "May 2022", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Standard", downloadCount: 21200 },
          { year: 2021, exam: "12th Commerce PTA Sets", tamilExam: "PTA வினாத்தாள்கள் 1-6", date: "2021", fileSize: "3.4 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Repeated 5 Marks", downloadCount: 34500 },
          { year: 2020, exam: "Class 12 Commerce Public March 2020", tamilExam: "பொதுத்தேர்வு வணிகவியல் மார்ச் 2020", date: "March 2020", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Original", downloadCount: 18900 },
          { year: 2019, exam: "Class 12 Commerce SCERT Bank 2019", tamilExam: "சிறப்பு மாதிரி வங்கி 2019", date: "2019", fileSize: "2.4 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Standard", downloadCount: 16700 }
        ],
        importantQuestions: [
          { category: "5 Marks", list: [{ q: "Explain Henri Fayol's 14 Principles of Management.", tamilQ: "ஹென்றி ஃபேயாலின் 14 மேலாண்மை தத்துவங்களை விளக்குக.", chapter: "Principles of Management", yearTag: "Golden 5-Mark", isGolden: true }] }
        ]
      }
    },

    // ========================================================
    // CLASS 11 (HIGHER SECONDARY FIRST YEAR)
    // ========================================================
    "11": {
      physics: {
        syllabusInfo: { title: "Class 11 Physics (TN SCERT)", tamilTitle: "11-ஆம் வகுப்பு இயற்பியல்", academicYear: "2024 - 2025", totalMarks: 70, passMark: 15, blueprint: [] },
        chapters: [
          { id: "phy11-1", number: 1, title: "Nature of Physical World & Measurement", tamilTitle: "இயற்பியல் உலகத்தின் தன்மையும் அளவீட்டியலும்", pages: 20, importance: "⭐⭐ Dimensional Analysis", summary: "Dimensions of physical quantities, principle of homogeneity, propagation of errors.", keyPoints: ["Force dimension: [M L T^-2]"], formulae: ["v² = u² + 2as"] },
          { id: "phy11-2", number: 2, title: "Kinematics", tamilTitle: "இயக்கவியல்", pages: 28, importance: "⭐⭐⭐ Projectile Motion & Vector Addition", summary: "Scalar and vector quantities, Triangle law of vector addition, Projectile motion equations (horizontal and angular projections), Uniform circular motion.", keyPoints: ["Maximum height $H = \\frac{u^2 \\sin^2 \\theta}{2g}$; Range $R = \\frac{u^2 \\sin 2\\theta}{g}$."], formulae: ["R = u² sin(2θ) / g", "H = u² sin² θ / (2g)"] }
        ],
        pyqs: [
          { year: 2025, exam: "Class 11 Physics Model 2025", tamilExam: "11-ஆம் வகுப்பு இயற்பியல் மாதிரி 2025", date: "Jan 2025", fileSize: "2.5 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Model Key", downloadCount: 19800 },
          { year: 2024, exam: "Class 11 Physics Public March 2024", tamilExam: "பொதுத்தேர்வு மார்ச் 2024", date: "March 2024", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Original", downloadCount: 32100 },
          { year: 2023, exam: "Class 11 Physics Public March 2023", tamilExam: "பொதுத்தேர்வு மார்ச் 2023", date: "March 2023", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Solved", downloadCount: 25600 },
          { year: 2022, exam: "Class 11 Physics Public May 2022", tamilExam: "பொதுத்தேர்வு மே 2022", date: "May 2022", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Standard", downloadCount: 20400 },
          { year: 2021, exam: "Class 11 Physics PTA Sets", tamilExam: "PTA மாதிரி வினா வங்கி", date: "2021", fileSize: "3.5 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Bank", downloadCount: 34500 },
          { year: 2020, exam: "Class 11 Physics Public March 2020", tamilExam: "பொதுத்தேர்வு மார்ச் 2020", date: "March 2020", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Original", downloadCount: 18900 },
          { year: 2019, exam: "Class 11 Physics SCERT Bank 2019", tamilExam: "அரசு மாதிரி வங்கி 2019", date: "2019", fileSize: "2.4 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Standard", downloadCount: 16200 }
        ],
        importantQuestions: [
          { category: "5 Marks", list: [{ q: "Derive the equations for the path of a projectile, time of flight, maximum height, and horizontal range.", tamilQ: "எறிபொருளின் பாதை, பறக்கும் காலம், பெரும உயரம் மற்றும் கிடைத்தள நெடுக்கத்திற்கான சமன்பாடுகளைப் பெறுக.", chapter: "Kinematics", yearTag: "Golden 5-Mark", isGolden: true }] }
        ]
      },
      chemistry: {
        syllabusInfo: { title: "Class 11 Chemistry", tamilTitle: "11-ஆம் வகுப்பு வேதியியல்", academicYear: "2024 - 2025", totalMarks: 70, passMark: 15, blueprint: [] },
        chapters: [
          { id: "chem11-1", number: 1, title: "Basic Concepts of Chemistry and Chemical Calculations", tamilTitle: "வேதியியலின் அடிப்படைக் கருத்துக்கள் மற்றும் வேதிக்கணக்கீடுகள்", pages: 22, importance: "⭐⭐ Mole concept", summary: "Mole concept, Avogadro number, empirical and molecular formula, redox reactions, oxidation number method.", keyPoints: ["1 mole contains 6.023 × 10^23 entities."], formulae: ["Moles = Mass / Molar Mass"] }
        ],
        pyqs: [
          { year: 2025, exam: "11th Chemistry Model 2025", tamilExam: "11-ஆம் வகுப்பு வேதியியல் மாதிரி 2025", date: "Jan 2025", fileSize: "2.4 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Model Key", downloadCount: 18500 },
          { year: 2024, exam: "11th Chemistry Public March 2024", tamilExam: "பொதுத்தேர்வு மார்ச் 2024", date: "March 2024", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Original", downloadCount: 30400 },
          { year: 2023, exam: "11th Chemistry Public March 2023", tamilExam: "பொதுத்தேர்வு மார்ச் 2023", date: "March 2023", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Solved", downloadCount: 24100 },
          { year: 2022, exam: "11th Chemistry Public May 2022", tamilExam: "பொதுத்தேர்வு மே 2022", date: "May 2022", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Standard", downloadCount: 19800 },
          { year: 2021, exam: "11th Chemistry PTA Sets", tamilExam: "PTA மாதிரி வினா வங்கி", date: "2021", fileSize: "3.4 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Bank", downloadCount: 32600 },
          { year: 2020, exam: "11th Chemistry Public March 2020", tamilExam: "பொதுத்தேர்வு மார்ச் 2020", date: "March 2020", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Original", downloadCount: 17800 },
          { year: 2019, exam: "11th Chemistry SCERT Bank 2019", tamilExam: "அரசு மாதிரி வங்கி 2019", date: "2019", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Standard", downloadCount: 15400 }
        ],
        importantQuestions: [
          { category: "5 Marks", list: [{ q: "Explain the calculation of empirical formula and molecular formula with an example problem.", tamilQ: "எளிய விகித வாய்ப்பாடு மற்றும் மூலக்கூறு வாய்ப்பாட்டை கணக்கிடும் முறையை எடுத்துக்காட்டுடன் விவரி.", chapter: "Basic Concepts", yearTag: "Sure 5-Mark", isGolden: true }] }
        ]
      },
      cs: {
        syllabusInfo: { title: "Class 11 Computer Science", tamilTitle: "11-ஆம் வகுப்பு கணினி அறிவியல்", academicYear: "2024 - 2025", totalMarks: 70, passMark: 15, blueprint: [] },
        chapters: [
          { id: "cs11-1", number: 1, title: "Introduction to Computers & Number Systems", tamilTitle: "கணினி அறிமுகம் மற்றும் எண்முறைகள்", pages: 20, importance: "⭐⭐ Binary conversions", summary: "Generations of computers, Binary, Octal, Decimal and Hexadecimal conversions, 1's and 2's complement.", keyPoints: ["2's complement = 1's complement + 1."], formulae: [] },
          { id: "cs11-5", number: 5, title: "Introduction to C++ and Control Structures", tamilTitle: "C++ ஓர் அறிமுகம் மற்றும் கட்டுப்பாட்டு கட்டமைப்புகள்", pages: 28, importance: "⭐⭐⭐ C++ Programming", summary: "Tokens, Data types, Variables, if-else, switch case, for, while, do-while loops.", keyPoints: ["C++ was developed by Bjarne Stroustrup."], formulae: [] }
        ],
        pyqs: [
          { year: 2025, exam: "11th CS Model 2025", tamilExam: "11-ஆம் வகுப்பு கணினி அறிவியல் மாதிரி 2025", date: "Jan 2025", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Model Key", downloadCount: 19100 },
          { year: 2024, exam: "11th CS Public March 2024", tamilExam: "பொதுத்தேர்வு மார்ச் 2024", date: "March 2024", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Original", downloadCount: 31200 },
          { year: 2023, exam: "11th CS Public March 2023", tamilExam: "பொதுத்தேர்வு மார்ச் 2023", date: "March 2023", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Solved", downloadCount: 24700 },
          { year: 2022, exam: "11th CS Public May 2022", tamilExam: "பொதுத்தேர்வு மே 2022", date: "May 2022", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Standard", downloadCount: 19900 },
          { year: 2021, exam: "11th CS PTA Sets", tamilExam: "PTA வினாத்தாள்கள் 1-6", date: "2021", fileSize: "3.3 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Bank", downloadCount: 33400 },
          { year: 2020, exam: "11th CS Public March 2020", tamilExam: "பொதுத்தேர்வு மார்ச் 2020", date: "March 2020", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Original", downloadCount: 18200 },
          { year: 2019, exam: "11th CS SCERT Bank 2019", tamilExam: "சிறப்பு மாதிரி வங்கி 2019", date: "2019", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Standard", downloadCount: 15600 }
        ],
        importantQuestions: [
          { category: "5 Marks", list: [{ q: "Convert $(192)_{10}$ to Binary, Octal, and Hexadecimal representations.", tamilQ: "$(192)_{10}$ என்ற பதின்ம எண்ணை இரும, எண்ம மற்றும் பதினாறும எண்களாக மாற்றுக.", chapter: "Number Systems", yearTag: "Expected", isGolden: true }] }
        ]
      },
      maths: {
        syllabusInfo: { title: "Class 11 Mathematics", tamilTitle: "11-ஆம் வகுப்பு கணிதம்", academicYear: "2024 - 2025", totalMarks: 90, passMark: 25, blueprint: [] },
        chapters: [
          { id: "m11-1", number: 1, title: "Sets, Relations and Functions", tamilTitle: "கணங்கள், தொடர்புகள் மற்றும் சார்புகள்", pages: 24, importance: "⭐⭐ Equivalence Relations", summary: "Reflexive, symmetric, transitive relations, types of functions, domain and range.", keyPoints: ["Equivalence relation is reflexive, symmetric, and transitive."], formulae: [] },
          { id: "m11-3", number: 3, title: "Trigonometry", tamilTitle: "முக்கோணவியல்", pages: 32, importance: "⭐⭐⭐ Compound Angles (10-15 Marks)", summary: "Compound angle identities, multiple angle identities, general solution of trigonometric equations.", keyPoints: ["$\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B$."], formulae: ["sin 2A = 2 sin A cos A", "cos 2A = cos² A - sin² A"] }
        ],
        pyqs: [
          { year: 2025, exam: "11th Maths Model 2025", tamilExam: "11-ஆம் வகுப்பு கணிதம் மாதிரி 2025", date: "Jan 2025", fileSize: "2.5 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Model Key", downloadCount: 22100 },
          { year: 2024, exam: "11th Maths Public March 2024", tamilExam: "பொதுத்தேர்வு மார்ச் 2024", date: "March 2024", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Original", downloadCount: 35600 },
          { year: 2023, exam: "11th Maths Public March 2023", tamilExam: "பொதுத்தேர்வு மார்ச் 2023", date: "March 2023", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Solved", downloadCount: 28400 },
          { year: 2022, exam: "11th Maths Public May 2022", tamilExam: "பொதுத்தேர்வு மே 2022", date: "May 2022", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Standard", downloadCount: 22100 },
          { year: 2021, exam: "11th Maths PTA Sets", tamilExam: "PTA மாதிரி வினா வங்கி", date: "2021", fileSize: "3.6 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Bank", downloadCount: 37800 },
          { year: 2020, exam: "11th Maths Public March 2020", tamilExam: "பொதுத்தேர்வு மார்ச் 2020", date: "March 2020", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Original", downloadCount: 20100 },
          { year: 2019, exam: "11th Maths SCERT Bank 2019", tamilExam: "அரசு மாதிரி வங்கி 2019", date: "2019", fileSize: "2.5 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Standard", downloadCount: 17500 }
        ],
        importantQuestions: [
          { category: "5 Marks", list: [{ q: "Prove that $\\cos 20^\\circ \\cos 40^\\circ \\cos 60^\\circ \\cos 80^\\circ = \\frac{1}{16}$.", tamilQ: "நிரூபிக்க: $\\cos 20^\\circ \\cos 40^\\circ \\cos 60^\\circ \\cos 80^\\circ = \\frac{1}{16}$", chapter: "Trigonometry", yearTag: "Golden 5-Mark", isGolden: true }] }
        ]
      },
      tamil: {
        syllabusInfo: { title: "11-ஆம் வகுப்பு தமிழ்", tamilTitle: "11-ஆம் வகுப்பு தமிழ்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [
          { id: "t11-1", number: 1, title: "யுகத்தின் பாடல் (இயல் 1)", tamilTitle: "இயல் 1: யுகத்தின் பாடல் & பேச்சுமொழியும் கவிதைமொழியும்", pages: 18, importance: "⭐⭐ சு. வில்வரத்தினம் கவிதைகள்", summary: "சு. வில்வரத்தினத்தின் யுகத்தின் பாடல், இந்திரனின் பேச்சுமொழியும் கவிதைமொழியும்.", keyPoints: ["மொழி மனிதனின் வரலாற்றுப் பெட்டகம்."], formulae: [] }
        ],
        pyqs: [
          { year: 2025, exam: "11th Tamil Model 2025", tamilExam: "11-ஆம் வகுப்பு தமிழ் மாதிரி 2025", date: "Jan 2025", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 20400 },
          { year: 2024, exam: "11th Tamil Public March 2024", tamilExam: "பொதுத்தேர்வு தமிழ் மார்ச் 2024", date: "March 2024", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 33400 },
          { year: 2023, exam: "11th Tamil Public March 2023", tamilExam: "பொதுத்தேர்வு தமிழ் மார்ச் 2023", date: "March 2023", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 26800 },
          { year: 2022, exam: "11th Tamil Public May 2022", tamilExam: "பொதுத்தேர்வு தமிழ் மே 2022", date: "May 2022", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 21900 },
          { year: 2021, exam: "11th Tamil PTA Sets", tamilExam: "PTA மாதிரி வினா வங்கி", date: "2021", fileSize: "3.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 35800 },
          { year: 2020, exam: "11th Tamil Public March 2020", tamilExam: "பொதுத்தேர்வு தமிழ் மார்ச் 2020", date: "March 2020", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 19800 },
          { year: 2019, exam: "11th Tamil SCERT Bank 2019", tamilExam: "அரசு மாதிரி வங்கி 2019", date: "2019", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 17200 }
        ],
        importantQuestions: [
          { category: "குறு வினாக்கள்", list: [{ q: "வில்வரத்தினம் பாடலின் மையக்கருத்தினை விளக்குக.", tamilQ: "வில்வரத்தினம் பாடலின் மையக்கருத்தினை விளக்குக.", chapter: "யுகத்தின் பாடல்", yearTag: "March 2024", isGolden: true }] }
        ]
      },
      english: {
        syllabusInfo: { title: "Class 11 English", tamilTitle: "11-ஆம் வகுப்பு ஆங்கிலம்", academicYear: "2024 - 2025", totalMarks: 90, passMark: 25, blueprint: [] },
        chapters: [
          { id: "e11-1", number: 1, title: "The Portrait of a Lady (Khushwant Singh)", tamilTitle: "Unit 1: பாட்டியின் பாசம் - The Portrait of a Lady", pages: 16, importance: "⭐⭐ Emotional bond", summary: "Author's touching relationship with his grandmother throughout childhood, university, and her peaceful demise.", keyPoints: ["Grandmother's routine with sparrows and rosary beads."], formulae: [] }
        ],
        pyqs: [
          { year: 2025, exam: "11th English Model 2025", tamilExam: "11-ஆம் வகுப்பு ஆங்கில மாதிரி 2025", date: "Jan 2025", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Model Key", downloadCount: 19800 },
          { year: 2024, exam: "11th English Public March 2024", tamilExam: "பொதுத்தேர்வு ஆங்கிலம் மார்ச் 2024", date: "March 2024", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Original", downloadCount: 32600 },
          { year: 2023, exam: "11th English Public March 2023", tamilExam: "பொதுத்தேர்வு ஆங்கிலம் மார்ச் 2023", date: "March 2023", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Solved", downloadCount: 26100 },
          { year: 2022, exam: "11th English Public May 2022", tamilExam: "பொதுத்தேர்வு ஆங்கிலம் மே 2022", date: "May 2022", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Standard", downloadCount: 20900 },
          { year: 2021, exam: "11th English PTA Sets", tamilExam: "PTA மாதிரி வினா வங்கி", date: "2021", fileSize: "3.2 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Grammar Key", downloadCount: 34900 },
          { year: 2020, exam: "11th English Public March 2020", tamilExam: "பொதுத்தேர்வு ஆங்கிலம் மார்ச் 2020", date: "March 2020", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Original", downloadCount: 18900 },
          { year: 2019, exam: "11th English SCERT Bank 2019", tamilExam: "அரசு மாதிரி வங்கி 2019", date: "2019", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Standard", downloadCount: 16400 }
        ],
        importantQuestions: [
          { category: "Paragraph Questions", list: [{ q: "Describe the unique relationship between the author and his grandmother.", tamilQ: "ஆசிரியருக்கும் அவரது பாட்டிக்கும் இடையேயான பிணைப்பை விவரி.", chapter: "The Portrait of a Lady", yearTag: "Sure 5-Mark", isGolden: true }] }
        ]
      },
      biology: {
        syllabusInfo: { title: "Class 11 Biology", tamilTitle: "11-ஆம் வகுப்பு உயிரியல்", academicYear: "2024 - 2025", totalMarks: 70, passMark: 15, blueprint: [] },
        chapters: [
          { id: "bio11-1", number: 1, title: "The Living World (உயிருலகம்)", tamilTitle: "உயிருலகம்", pages: 18, importance: "⭐ Taxonomy", summary: "Characteristics of living organisms, taxonomic hierarchy, binomial nomenclature, five kingdom classification.", keyPoints: ["Binomial nomenclature was popularized by Carolus Linnaeus."], formulae: [] }
        ],
        pyqs: [
          { year: 2025, exam: "11th Biology Model 2025", tamilExam: "11-ஆம் வகுப்பு உயிரியல் மாதிரி 2025", date: "Jan 2025", fileSize: "2.4 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Model Key", downloadCount: 18100 },
          { year: 2024, exam: "11th Biology Public March 2024", tamilExam: "பொதுத்தேர்வு மார்ச் 2024", date: "March 2024", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Original", downloadCount: 29800 },
          { year: 2023, exam: "11th Biology Public March 2023", tamilExam: "பொதுத்தேர்வு மார்ச் 2023", date: "March 2023", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Solved", downloadCount: 23900 },
          { year: 2022, exam: "11th Biology Public May 2022", tamilExam: "பொதுத்தேர்வு மே 2022", date: "May 2022", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Standard", downloadCount: 19100 },
          { year: 2021, exam: "11th Biology PTA Sets", tamilExam: "PTA மாதிரி வினா வங்கி", date: "2021", fileSize: "3.3 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Bank", downloadCount: 32100 },
          { year: 2020, exam: "11th Biology Public March 2020", tamilExam: "பொதுத்தேர்வு மார்ச் 2020", date: "March 2020", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Original", downloadCount: 17400 },
          { year: 2019, exam: "11th Biology SCERT Bank 2019", tamilExam: "அரசு மாதிரி வங்கி 2019", date: "2019", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 70, highlight: "Standard", downloadCount: 15100 }
        ],
        importantQuestions: [
          { category: "5 Marks", list: [{ q: "Explain the salient features of the Five Kingdom Classification.", tamilQ: "ஐந்துலக வகைப்பாட்டின் முக்கிய பண்புகளை விளக்குக.", chapter: "The Living World", yearTag: "Repeated", isGolden: true }] }
        ]
      },
      commerce: {
        syllabusInfo: { title: "Class 11 Commerce", tamilTitle: "11-ஆம் வகுப்பு வணிகவியல்", academicYear: "2024 - 2025", totalMarks: 90, passMark: 25, blueprint: [] },
        chapters: [
          { id: "com11-1", number: 1, title: "Historical Background of Commerce in Sub-Continent", tamilTitle: "இந்தியாவில் வணிகத்தின் வரலாற்று பின்னணி", pages: 18, importance: "⭐ Ancient Tamil Ports", summary: "Evolution of commerce in ancient Tamilakam, Sangam literature references (Maduraikanchi, Pattinappalai), coastal ports like Poompuhar.", keyPoints: ["Sangam ports: Musiri, Korkai, Kaveripoompattinam."], formulae: [] }
        ],
        pyqs: [
          { year: 2025, exam: "11th Commerce Model 2025", tamilExam: "11-ஆம் வகுப்பு வணிகவியல் மாதிரி 2025", date: "Jan 2025", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Model Key", downloadCount: 17400 },
          { year: 2024, exam: "11th Commerce Public March 2024", tamilExam: "பொதுத்தேர்வு மார்ச் 2024", date: "March 2024", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Original", downloadCount: 28400 },
          { year: 2023, exam: "11th Commerce Public March 2023", tamilExam: "பொதுத்தேர்வு மார்ச் 2023", date: "March 2023", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Solved", downloadCount: 22800 },
          { year: 2022, exam: "11th Commerce Public May 2022", tamilExam: "பொதுத்தேர்வு மே 2022", date: "May 2022", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Standard", downloadCount: 18100 },
          { year: 2021, exam: "11th Commerce PTA Sets", tamilExam: "PTA வினாத்தாள்கள் 1-6", date: "2021", fileSize: "3.2 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Bank", downloadCount: 30800 },
          { year: 2020, exam: "11th Commerce Public March 2020", tamilExam: "பொதுத்தேர்வு மார்ச் 2020", date: "March 2020", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Original", downloadCount: 16500 },
          { year: 2019, exam: "11th Commerce SCERT Bank 2019", tamilExam: "சிறப்பு மாதிரி வங்கி 2019", date: "2019", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 90, highlight: "Standard", downloadCount: 14200 }
        ],
        importantQuestions: [
          { category: "5 Marks", list: [{ q: "Explain the coastal trade in ancient Tamil Nadu during the Sangam period.", tamilQ: "சங்க காலத்தில் தமிழகத்தின் கடலோர வர்த்தகத்தை விவரி.", chapter: "History of Commerce", yearTag: "Expected", isGolden: true }] }
        ]
      }
    },

    // ========================================================
    // CLASS 10 (SSLC STATE BOARD)
    // ========================================================
    "10": {
      // 1. MATHEMATICS (கணிதம்) - Class 10 (All 8 Chapters Covered!)
      maths: {
        syllabusInfo: {
          title: "Class 10 Mathematics TN SCERT Syllabus (2024-2025)",
          tamilTitle: "10-ஆம் வகுப்பு கணிதம் - பாடத்திட்டம் & மதிப்பெண் பங்கீடு",
          academicYear: "2024 - 2025",
          totalMarks: 100,
          passMark: 35,
          blueprint: [
            { type: "1 Mark (MCQs)", count: 14, marks: 14, compulsory: "No compulsory" },
            { type: "2 Marks (Short)", count: 10, marks: 20, compulsory: "Q.No 28 Compulsory" },
            { type: "5 Marks (Long)", count: 10, marks: 50, compulsory: "Q.No 42 Compulsory" },
            { type: "8 Marks (Practical Geom & Graph)", count: 2, marks: 16, compulsory: "Internal Choice" }
          ]
        },
        chapters: [
          {
            id: "m10-1",
            number: 1,
            title: "Relations and Functions",
            tamilTitle: "அலகு 1: உறவுகளும் சார்புகளும்",
            pages: 18,
            importance: "⭐⭐⭐ High Weightage (10-14 Marks)",
            summary: "Cartesian product, ordered pairs, relations, types of functions (one-to-one, onto, bijection), composition of functions $(f \\circ g)(x)$.",
            keyPoints: [
              "Cartesian Product: $A \\times B = \\{(a, b) \\mid a \\in A, b \\in B\\}$. If $n(A) = p$ and $n(B) = q$, then $n(A \\times B) = pq$.",
              "A relation $R$ from $A$ to $B$ is a subset of $A \\times B$. Total relations = $2^{pq}$.",
              "Horizontal line test: A curve represents a 1-1 function if every horizontal line intersects the curve at at most one point.",
              "Composition: $(f \\circ g)(x) = f(g(x))$. In general, $f \\circ g \\neq g \\circ f$, but composition is associative: $f \\circ (g \\circ h) = (f \\circ g) \\circ h$."
            ],
            formulae: [
              "n(A × B) = n(A) × n(B)",
              "Total relations = 2^(p·q)",
              "(f ∘ g)(x) = f(g(x))"
            ]
          },
          {
            id: "m10-2",
            number: 2,
            title: "Numbers and Sequences",
            tamilTitle: "அலகு 2: எண்களும் தொடர்வரிசைகளும்",
            pages: 24,
            importance: "⭐⭐⭐ High Weightage (12-16 Marks)",
            summary: "Euclid's division lemma, Fundamental theorem of arithmetic, Arithmetic Progression (A.P), Geometric Progression (G.P), Special series $\\sum n, \\sum n^2, \\sum n^3$.",
            keyPoints: [
              "Euclid's Division Lemma: $a = bq + r$, where $0 \\leq r < |b|$.",
              "A.P general term: $t_n = a + (n-1)d$; Sum $S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}(a + l)$.",
              "G.P general term: $t_n = a \\cdot r^{n-1}$; Sum $S_n = \\frac{a(r^n - 1)}{r - 1}$ (for $r > 1$).",
              "Sum of first $n$ natural numbers: $\\sum n = \\frac{n(n+1)}{2}$.",
              "Sum of squares: $\\sum n^2 = \\frac{n(n+1)(2n+1)}{6}$; Sum of cubes: $\\sum n^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$."
            ],
            formulae: [
              "t_n = a + (n - 1)d",
              "S_n = n/2 [2a + (n - 1)d]",
              "t_n = a · r^(n-1)",
              "Σ n = n(n + 1) / 2",
              "Σ n² = n(n + 1)(2n + 1) / 6",
              "Σ n³ = [n(n + 1) / 2]²"
            ]
          },
          {
            id: "m10-3",
            number: 3,
            title: "Algebra",
            tamilTitle: "அலகு 3: இயற்கணிதம்",
            pages: 34,
            importance: "⭐⭐⭐ Maximum Weightage (20-24 Marks)",
            summary: "Linear equations in three variables, GCD and LCM of polynomials, Square root of polynomials by division method, Quadratic equations, Nature of roots, Matrices and operations.",
            keyPoints: [
              "Relationship: $GCD \\times LCM = f(x) \\times g(x)$.",
              "Quadratic formula: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.",
              "Discriminant $\\Delta = b^2 - 4ac$: if $\\Delta > 0$ real & distinct; $\\Delta = 0$ real & equal; $\\Delta < 0$ no real roots.",
              "Matrix multiplication: $A_{m \\times n} \\times B_{n \\times p} = C_{m \\times p}$."
            ],
            formulae: [
              "x = (-b ± √(b² - 4ac)) / (2a)",
              "Δ = b² - 4ac (Nature of roots)",
              "α + β = -b/a, αβ = c/a"
            ]
          },
          {
            id: "m10-4",
            number: 4,
            title: "Geometry",
            tamilTitle: "அலகு 4: வடிவியல்",
            pages: 28,
            importance: "⭐⭐⭐ Thales, Angle Bisector & Pythagoras Theorems (5 & 8 Marks)",
            summary: "Basic Proportionality Theorem (Thales Theorem), Angle Bisector Theorem, Pythagoras Theorem with proofs, Tangents to circle, Alternate segment theorem.",
            keyPoints: [
              "Basic Proportionality Theorem (BPT): A line drawn parallel to one side of a triangle dividing the other two sides in the same ratio.",
              "Angle Bisector Theorem: Internal bisector of an angle of a triangle divides the opposite side internally in the ratio of the corresponding sides.",
              "Pythagoras Theorem: In a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides."
            ],
            formulae: ["AD / DB = AE / EC (BPT)", "AB / AC = BD / DC (ABT)", "AC² = AB² + BC² (Pythagoras)"]
          },
          {
            id: "m10-5",
            number: 5,
            title: "Coordinate Geometry",
            tamilTitle: "அலகு 5: ஆயத்தொலை வடிவியல்",
            pages: 24,
            importance: "⭐⭐ Area of Triangle & Quadrilateral, Slope & Equations (10-14 Marks)",
            summary: "Area of triangle and quadrilateral, Collinear condition, Slope of line, Equations of straight lines in various forms, Parallel and Perpendicular lines.",
            keyPoints: [
              "Area of Triangle: $\\frac{1}{2} |(x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2))|$.",
              "Slope $m = \\tan \\theta = \\frac{y_2 - y_1}{x_2 - x_1} = -\\frac{a}{b}$ for line $ax + by + c = 0$.",
              "Parallel lines condition: $m_1 = m_2$; Perpendicular lines condition: $m_1 \\cdot m_2 = -1$."
            ],
            formulae: [
              "Area = 1/2 · |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|",
              "Slope m = (y2 - y1) / (x2 - x1) = -a/b",
              "Parallel: m1 = m2; Perpendicular: m1 · m2 = -1"
            ]
          },
          {
            id: "m10-6",
            number: 6,
            title: "Trigonometry",
            tamilTitle: "அலகு 6: முக்கோணவியல்",
            pages: 22,
            importance: "⭐⭐ Trigonometric Identities & Heights/Distances",
            summary: "Trigonometric identities, Angle of elevation and angle of depression, Heights and distances multi-step problems.",
            keyPoints: [
              "Identities: $\\sin^2 \\theta + \\cos^2 \\theta = 1$, $1 + \\tan^2 \\theta = \\sec^2 \\theta$, $1 + \\cot^2 \\theta = \\text{cosec}^2 \\theta$.",
              "Angle of elevation: when observer looks upwards; Angle of depression: when observer looks downwards."
            ],
            formulae: [
              "sin² θ + cos² θ = 1",
              "1 + tan² θ = sec² θ",
              "1 + cot² θ = cosec² θ"
            ]
          },
          {
            id: "m10-7",
            number: 7,
            title: "Mensuration",
            tamilTitle: "அலகு 7: அளவியல்",
            pages: 24,
            importance: "⭐⭐ Solid Shapes & Combined Solids (8-12 Marks)",
            summary: "Surface area and volume of Cylinder, Hollow Cylinder, Cone, Sphere, Hemisphere, Frustum, and conversion of solids from one shape to another.",
            keyPoints: [
              "Cylinder: CSA = $2\\pi r h$, Volume = $\\pi r^2 h$.",
              "Cone: CSA = $\\pi r l$ where slant height $l = \\sqrt{r^2 + h^2}$, Volume = $\\frac{1}{3} \\pi r^2 h$.",
              "Sphere: Surface Area = $4\\pi r^2$, Volume = $\\frac{4}{3} \\pi r^3$."
            ],
            formulae: [
              "Cylinder CSA = 2πrh, Vol = πr²h",
              "Cone CSA = πrl, Vol = 1/3 πr²h",
              "Sphere Area = 4πr², Vol = 4/3 πr³",
              "Hemisphere CSA = 2πr², TSA = 3πr², Vol = 2/3 πr³"
            ]
          },
          {
            id: "m10-8",
            number: 8,
            title: "Statistics and Probability",
            tamilTitle: "அலகு 8: புள்ளியியலும் நிகழ்தகவும்",
            pages: 22,
            importance: "⭐⭐ High Scoring & Centum Booster (10-14 Marks)",
            summary: "Range, Standard deviation $\\sigma$, Variance, Coefficient of variation $C.V = \\frac{\\sigma}{\\bar{x}} \\times 100$, Addition theorem of probability $P(A \\cup B)$.",
            keyPoints: [
              "Range $R = L - S$ (Largest value - Smallest value).",
              "Coefficient of Variation: $C.V. = \\frac{\\sigma}{\\bar{x}} \\times 100\\%$ (Lesser CV indicates more consistent performance).",
              "Addition Theorem: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. If mutually exclusive, $P(A \\cap B) = 0$."
            ],
            formulae: [
              "Range R = L - S",
              "CV = (σ / x̄) × 100%",
              "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)"
            ]
          }
        ],
        pyqs: [
          { year: 2025, exam: "Class 10 Maths Model & Revision 2025", tamilExam: "10-ஆம் வகுப்பு கணிதம் மாதிரி பொதுத்தேர்வு 2025", date: "Jan 2025", fileSize: "2.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Latest Pattern with Compulsory Q28 & Q42", downloadCount: 38200 },
          { year: 2024, exam: "Class 10 Maths Public Exam March 2024", tamilExam: "அரசு பொதுத்தேர்வு கணிதம் மார்ச் 2024 அசல் வினாத்தாள்", date: "March 2024", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Official Board Paper + Full SCERT Step Marking", downloadCount: 52400 },
          { year: 2023, exam: "Class 10 Maths Public Exam April 2023", tamilExam: "அரசு பொதுத்தேர்வு கணிதம் ஏப்ரல் 2023", date: "April 2023", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Full 100 Marks Solved Solutions Included", downloadCount: 44200 },
          { year: 2022, exam: "Class 10 Maths Public Exam May 2022", tamilExam: "அரசு பொதுத்தேர்வு கணிதம் மே 2022", date: "May 2022", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Post-Covid Full Syllabus Exam Paper", downloadCount: 36800 },
          { year: 2021, exam: "10th Maths PTA Model Sets 1-6", tamilExam: "பெற்றோர் ஆசிரியர் கழக (PTA) மாதிரி வினாத்தாள்கள் 1-6", date: "2021", fileSize: "3.9 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Golden Questions Repository by Expert Board Examiners", downloadCount: 58200 },
          { year: 2020, exam: "Class 10 Maths DGE Official Bank 2020", tamilExam: "அரசு தேர்வுகள் இயக்ககம் சிறப்பு மாதிரி வினா வங்கி 2020", date: "2020", fileSize: "2.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Chapter-wise Golden Question Blueprint", downloadCount: 31200 },
          { year: 2019, exam: "Class 10 Maths Public Exam March 2019", tamilExam: "அரசு பொதுத்தேர்வு கணிதம் மார்ச் 2019", date: "March 2019", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard Board Benchmark Question Paper", downloadCount: 29500 }
        ],
        importantQuestions: [
          {
            category: "2 Marks (குறு வினாக்கள் - Compulsory Q28 Models)",
            list: [
              { q: "If $A = \\{1, 3, 5\\}$ and $B = \\{2, 3\\}$, find $A \\times B$ and $B \\times A$. Is $A \\times B = B \\times A$?", tamilQ: "$A = \\{1, 3, 5\\}$ மற்றும் $B = \\{2, 3\\}$ எனில் $A \\times B$ மற்றும் $B \\times A$ காண்க.", chapter: "Relations & Functions", yearTag: "Repeated in 2022, 2024", isGolden: true },
              { q: "Find the 19th term of an A.P: -11, -15, -19, ...", tamilQ: "-11, -15, -19, ... என்ற கூட்டுத்தொடர் வரிசையின் 19-வது உறுப்பைக் காண்க.", chapter: "Numbers & Sequences", yearTag: "March 2023", isGolden: false },
              { q: "Determine the nature of the roots for $2x^2 - 2x + 9 = 0$.", tamilQ: "$2x^2 - 2x + 9 = 0$ என்ற இருபடிச் சமன்பாட்டின் மூலங்களின் தன்மையைக் கூறுக.", chapter: "Algebra", yearTag: "Compulsory Q28 Candidate", isGolden: true },
              { q: "Find the slope of a line joining $(-6, 1)$ and $(-3, 2)$.", tamilQ: "$(-6, 1)$ மற்றும் $(-3, 2)$ ஆகிய புள்ளிகளை இணைக்கும் நேர்க்கோட்டின் சாய்வைக் காண்க.", chapter: "Coordinate Geometry", yearTag: "PTA Repeated", isGolden: false }
            ]
          },
          {
            category: "5 Marks (நெடு வினாக்கள் - Compulsory Q42 Candidate)",
            list: [
              { q: "State and prove Basic Proportionality Theorem (Thales Theorem).", tamilQ: "அடிப்படை விகிதசம தேற்றத்தை (தேல்ஸ் தேற்றம்) எழுதி நிறுவுக.", chapter: "Geometry", yearTag: "⭐⭐ Guaranteed 5 Marks - Appeared 5 Times", isGolden: true },
              { q: "Find the square root of $64x^4 - 16x^3 + 17x^2 - 2x + 1$ by division method.", tamilQ: "வகுத்தல் முறையில் $64x^4 - 16x^3 + 17x^2 - 2x + 1$-ன் வர்க்கமூலம் காண்க.", chapter: "Algebra", yearTag: "Public 2023 & 2024", isGolden: true },
              { q: "Find the sum to n terms of the series $5 + 55 + 555 + \\dots$", tamilQ: "$5 + 55 + 555 + \\dots$ என்ற தொடரின் முதல் $n$ உறுப்புகளின் கூடுதல் காண்க.", chapter: "Numbers & Sequences", yearTag: "March 2022, Model 2025", isGolden: true },
              { q: "From the top of a rock 50√3 m high, the angle of depression of a car on the ground is 30°. Find the distance of the car from the rock.", tamilQ: "50√3 மீ உயரமுள்ள பாறையின் உச்சியிலிருந்து 30° இறக்கக் கோணத்தில் தரையிலுள்ள மகிழுந்து ஒன்று பார்க்கப்படுகிறது எனில், மகிழுந்திற்கும் பாறைக்கும் இடையேயுள்ள தொலைவைக் காண்க.", chapter: "Trigonometry", yearTag: "Compulsory Q42 Special", isGolden: true }
            ]
          },
          {
            category: "8 Marks (செய்முறை வடிவியல் & வரைபடம்)",
            list: [
              { q: "Draw a circle of diameter 6 cm from a point P, which is 8 cm away from its centre. Draw the two tangents PA and PB to the circle and measure their lengths.", tamilQ: "6 செ.மீ விட்டமுள்ள வட்டம் வரைந்து வட்டத்தின் மையத்திலிருந்து 8 செ.மீ தொலைவிலுள்ள ஒரு புள்ளியிலிருந்து வட்டத்திற்கு தொடுகோடுகள் வரைக.", chapter: "Practical Geometry", yearTag: "Sure 8 Marks", isGolden: true },
              { q: "Draw the graph of $y = x^2 - 4x + 3$ and use it to solve $x^2 - 6x + 9 = 0$.", tamilQ: "$y = x^2 - 4x + 3$-ன் வரைபடம் வரைந்து, அதன் மூலம் $x^2 - 6x + 9 = 0$ என்ற சமன்பாட்டைத் தீர்க்க.", chapter: "Graph", yearTag: "Sure 8 Marks", isGolden: true }
            ]
          }
        ]
      },

      // 2. SCIENCE (அறிவியல்) - Class 10 (Physics, Chemistry, Biology complete!)
      science: {
        syllabusInfo: {
          title: "Class 10 Science (Physics, Chemistry, Biology) Syllabus",
          tamilTitle: "10-ஆம் வகுப்பு அறிவியல் - பாடத்திட்டம் & மதிப்பெண் பங்கீடு",
          academicYear: "2024 - 2025",
          totalMarks: 75, // + 25 practicals
          passMark: 25,
          blueprint: [
            { type: "1 Mark (Choose)", count: 12, marks: 12, compulsory: "Direct" },
            { type: "2 Marks (Short Answer)", count: 7, marks: 14, compulsory: "Q.No 22 Compulsory" },
            { type: "4 Marks (Brief)", count: 7, marks: 28, compulsory: "Q.No 32 Compulsory" },
            { type: "7 Marks (Detailed / Either-or)", count: 3, marks: 21, compulsory: "Internal Choice in Physics, Chem, Bio" }
          ]
        },
        chapters: [
          {
            id: "s10-1",
            number: 1,
            title: "Laws of Motion (Physics)",
            tamilTitle: "அலகு 1: இயக்க விதிகள் (இயற்பியல்)",
            pages: 16,
            importance: "⭐⭐⭐ Physics Core (7-10 Marks)",
            summary: "Newton's First, Second, and Third laws, Inertia, Linear momentum, Law of Conservation of Momentum, Rocket propulsion, Universal Law of Gravitation, Weightlessness.",
            keyPoints: [
              "Newton's First Law defines Force and Inertia.",
              "Newton's Second Law: $F = ma = \\frac{dp}{dt}$ (Force = mass × acceleration).",
              "Law of Conservation of Linear Momentum: In the absence of an external force, the total linear momentum of a system remains conserved ($m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$).",
              "Universal Law of Gravitation: $F = \\frac{G m_1 m_2}{r^2}$, where $G = 6.674 \\times 10^{-11} \\text{ N m}^2\\text{ kg}^{-2}$."
            ],
            formulae: ["F = m × a", "p = m × v", "F = G(m1·m2)/r²", "g = GM / R² = 9.8 m/s²"]
          },
          {
            id: "s10-2",
            number: 2,
            title: "Optics (Physics)",
            tamilTitle: "அலகு 2: ஒளியியல் (இயற்பியல்)",
            pages: 18,
            importance: "⭐⭐⭐ Ray Diagrams & Problems (6-8 Marks)",
            summary: "Refraction, Snell's law, Convex & Concave lenses, Lens formula $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$, Power of lens $P = \\frac{1}{f}$, Eye defects (Myopia & Hypermetropia).",
            keyPoints: [
              "Snell's Law: $\\frac{\\sin i}{\\sin r} = \\frac{\\mu_2}{\\mu_1}$.",
              "Lens Formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$.",
              "Myopia (Short sightedness): corrected using a Concave lens.",
              "Hypermetropia (Long sightedness): corrected using a Convex lens.",
              "Power of lens $P = \\frac{1}{f \\text{ (in metres)}}$, measured in Dioptre (D)."
            ],
            formulae: ["1/f = 1/v - 1/u", "P = 1/f (Dioptre)", "m = v / u"]
          },
          {
            id: "s10-7",
            number: 7,
            title: "Atoms and Molecules (Chemistry)",
            tamilTitle: "அலகு 7: அணுக்களும் மூலக்கூறுகளும் (வேதியியல்)",
            pages: 18,
            importance: "⭐⭐⭐ Chemistry High Weightage",
            summary: "Relative Atomic Mass (RAM), Avogadro's hypothesis, Mole concept, Gram molecular mass, Molar volume at STP (22.4 L), Calculation of mass and molecules.",
            keyPoints: [
              "Avogadro's Number: $N_A = 6.023 \\times 10^{23}$ entities per mole.",
              "Molar volume of any gas at STP = $22.4 \\text{ litres}$ or $22400 \\text{ ml}$.",
              "Number of moles $n = \\frac{\\text{Mass}}{\\text{Molar Mass}} = \\frac{\\text{Number of molecules}}{6.023 \\times 10^{23}}$."
            ],
            formulae: ["Moles = Given Mass / Molar Mass", "Vapour Density = Molar Mass / 2"]
          },
          {
            id: "s10-12",
            number: 12,
            title: "Plant Anatomy and Plant Physiology (Biology)",
            tamilTitle: "அலகு 12: தாவர உள்ளமைப்பியல் மற்றும் தாவர செயலியல் (உயிரியல்)",
            pages: 20,
            importance: "⭐⭐⭐ Biology 7-Mark Diagrams",
            summary: "Tissue systems in plants, Dicot & Monocot root & stem anatomy, Plastids, Photosynthesis, Cellular respiration (Aerobic & Anaerobic).",
            keyPoints: [
              "Tissues: Dermal, Ground, and Vascular tissue systems.",
              "Dicot root has Tetrarch xylem, whereas Monocot root has Polyarch xylem.",
              "Photosynthesis equation: $6CO_2 + 12H_2O \\xrightarrow[\\text{Chlorophyll}]{\\text{Light}} C_6H_{12}O_6 + 6H_2O + 6O_2$."
            ],
            formulae: ["Aerobic: C6H12O6 + 6O2 → 6CO2 + 6H2O + ATP"]
          }
        ],
        pyqs: [
          { year: 2025, exam: "Class 10 Science Model 2025", tamilExam: "10-ஆம் வகுப்பு அறிவியல் மாதிரி 2025", date: "Jan 2025", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Includes Physics Compulsory Numerical & Biology Diagrams", downloadCount: 36400 },
          { year: 2024, exam: "Class 10 Science Public Exam March 2024", tamilExam: "அரசு பொதுத்தேர்வு அறிவியல் மார்ச் 2024", date: "March 2024", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Official Board Paper + Full Key", downloadCount: 48900 },
          { year: 2023, exam: "Class 10 Science Public Exam April 2023", tamilExam: "அரசு பொதுத்தேர்வு அறிவியல் ஏப்ரல் 2023", date: "April 2023", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Solved Key", downloadCount: 41200 },
          { year: 2022, exam: "Class 10 Science Public Exam May 2022", tamilExam: "அரசு பொதுத்தேர்வு அறிவியல் மே 2022", date: "May 2022", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Standard", downloadCount: 34100 },
          { year: 2021, exam: "10th Science PTA Model Sets 1-6", tamilExam: "அறிவியல் PTA மாதிரி வினாத்தாள்கள் 1-6", date: "2021", fileSize: "3.7 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Golden Questions Bank", downloadCount: 52100 },
          { year: 2020, exam: "Class 10 Science DGE Bank 2020", tamilExam: "அரசு வினா வங்கி 2020", date: "2020", fileSize: "2.5 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Diagram Questions", downloadCount: 28900 },
          { year: 2019, exam: "Class 10 Science Public Exam March 2019", tamilExam: "அரசு பொதுத்தேர்வு அறிவியல் மார்ச் 2019", date: "March 2019", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Standard", downloadCount: 26800 }
        ],
        importantQuestions: [
          {
            category: "4 Marks (சிறு வினாக்கள்)",
            list: [
              { q: "State and prove the Law of Conservation of Linear Momentum with neat diagram.", tamilQ: "நேர்க்கோட்டு உந்த மாறாக் கோட்பாட்டை எழுதி, சமன்பாட்டை நிரூபிக்கவும்.", chapter: "Laws of Motion", yearTag: "⭐⭐ Sure 4/7 Marks", isGolden: true },
              { q: "Draw the internal structure of Dicot Root and label the parts.", tamilQ: "இருவித்திலைத் தாவர வேரின் உள்ளமைப்பை படத்துடன் விவரி.", chapter: "Plant Anatomy", yearTag: "Repeated Diagram", isGolden: true }
            ]
          }
        ]
      },

      // 3. TAMIL (தமிழ்) - Class 10
      tamil: {
        syllabusInfo: {
          title: "10-ஆம் வகுப்பு தமிழ் பாடத்திட்டம் மற்றும் மதிப்பீடு முறை",
          tamilTitle: "10-ஆம் வகுப்பு தமிழ் - முழு பாடத்திட்டம் & வினாத்தாள் அமைப்பு",
          academicYear: "2024 - 2025",
          totalMarks: 100,
          passMark: 35,
          blueprint: [
            { type: "பகுதி 1 (பலவுள் தெரிக)", count: 15, marks: 15, compulsory: "அனைத்தும்" },
            { type: "பகுதி 2 (குறு வினாக்கள்)", count: 9, marks: 18, compulsory: "வினா 21 & 28 கட்டாயம்" },
            { type: "பகுதி 3 (சிறு வினாக்கள்)", count: 6, marks: 18, compulsory: "வினா 34 & 37 கட்டாயம்" },
            { type: "பகுதி 4 (நெடு வினாக்கள்)", count: 5, marks: 25, compulsory: "கடிதம், படிவம், கவிதை" },
            { type: "பகுதி 5 (கட்டுரை வினாக்கள்)", count: 3, marks: 24, compulsory: "உரைநடை, துணைப்பாடம்" }
          ]
        },
        chapters: [
          {
            id: "t10-1",
            number: 1,
            title: "அன்னை மொழியே (இயல் 1)",
            tamilTitle: "இயல் 1: அமுதூற்று - அன்னை மொழியே & தமிழ்ச்சொல் வளம்",
            pages: 18,
            importance: "⭐⭐⭐ பாவாணர் & பெருஞ்சித்திரனார் வினாக்கள்",
            summary: "பாவலேறு பெருஞ்சித்திரனாரின் கணிச்சாறு தொகுப்பு, தேவநேயப் பாவாணரின் தமிழ்ச்சொல் வளம், இரட்டுற மொழிதல் (சந்தக்கவிமணி தமிழழகனார்).",
            keyPoints: [
              "அன்னை மொழியே கவிதை: 'சின்னக் குழந்தையின் சிரிப்பும் ஆனவள்; பழுத்த நரையின் பட்டறிவும் ஆனவள்!'",
              "தமிழ்ச் சொல் வளம்: அடி வகை (தாள், தண்டு, கோல், தூறு), கிளைப் பிரிவுகள் (கவை, கொம்பு, சினை, போத்து)."
            ],
            formulae: []
          },
          {
            id: "t10-2",
            number: 2,
            title: "காற்றே வா! (இயல் 2)",
            tamilTitle: "இயல் 2: இயற்கை - காற்றே வா & கேட்கிறதா என் குரல்!",
            pages: 16,
            importance: "⭐⭐ பாரதியார் கவிதை & முல்லைப்பாட்டு",
            summary: "மகாகவி பாரதியாரின் காற்றே வா வசன கவிதை, நப்பூதனாரின் முல்லைப்பாட்டு, தொகைநிலைத் தொடர்கள் இலக்கணம்.",
            keyPoints: [
              "தொகைநிலைத் தொடர் ஆறு வகைப்படும்: வேற்றுமை, வினை, பண்பு, உவமை, உம்மை, அன்மொழித்தொகை."
            ],
            formulae: []
          }
        ],
        pyqs: [
          { year: 2025, exam: "Class 10 Tamil Model Exam 2025", tamilExam: "10-ஆம் வகுப்பு தமிழ் அரசு மாதிரி வினாத்தாள் 2025", date: "Jan 2025", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Latest Pattern", downloadCount: 37400 },
          { year: 2024, exam: "Class 10 Tamil Public Exam March 2024", tamilExam: "அரசு பொதுத்தேர்வு தமிழ் மார்ச் 2024", date: "March 2024", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original Paper + 100/100 Key", downloadCount: 51200 },
          { year: 2023, exam: "Class 10 Tamil Public Exam April 2023", tamilExam: "அரசு பொதுத்தேர்வு தமிழ் ஏப்ரல் 2023", date: "April 2023", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 42100 },
          { year: 2022, exam: "Class 10 Tamil Public Exam May 2022", tamilExam: "அரசு பொதுத்தேர்வு தமிழ் மே 2022", date: "May 2022", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 35100 },
          { year: 2021, exam: "10th Tamil PTA Question Sets 1-6", tamilExam: "10-ஆம் வகுப்பு தமிழ் PTA வினாத்தாள்கள் 1-6", date: "2021", fileSize: "3.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Golden Questions", downloadCount: 54900 },
          { year: 2020, exam: "Class 10 Tamil Special Revision 2020", tamilExam: "தமிழ் சிறப்பு திருப்புதல் வினா வங்கி 2020", date: "2020", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 29800 },
          { year: 2019, exam: "Class 10 Tamil Public Exam March 2019", tamilExam: "அரசு பொதுத்தேர்வு தமிழ் மார்ச் 2019", date: "March 2019", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 27900 }
        ],
        importantQuestions: [
          {
            category: "மனப்பாடப் பகுதிகள் (கட்டாய வினா 3 மதிப்பெண்)",
            list: [
              { q: "'நற்றணையே தென்னன் மகளே...' எனத் தொடங்கும் அன்னை மொழியே பாடலை எழுதுக.", tamilQ: "'நற்றணையே தென்னன் மகளே...' எனத் தொடங்கும் அன்னை மொழியே பாடலை எழுதுக.", chapter: "அன்னை மொழியே", yearTag: "⭐⭐ கட்டாய வினா எண் 34", isGolden: true }
            ]
          }
        ]
      },

      // 4. ENGLISH - Class 10
      english: {
        syllabusInfo: {
          title: "Class 10 English TN SCERT Syllabus & Pattern",
          tamilTitle: "10-ஆம் வகுப்பு ஆங்கிலம் - பாடத்திட்டம் மற்றும் மதிப்பீடு",
          academicYear: "2024 - 2025",
          totalMarks: 100,
          passMark: 35,
          blueprint: [
            { type: "Part 1 (Synonyms, Antonyms, Grammar)", count: 14, marks: 14, compulsory: "All" },
            { type: "Part 2 (Prose Short Answers, Poetry, Grammar)", count: 10, marks: 20, compulsory: "Road Map Q28" },
            { type: "Part 3 (Paragraphs, Poetic Devices, Notice/Letter)", count: 10, marks: 50, compulsory: "Quote from Memory Q39" },
            { type: "Part 4 (Supplementary Essay / Comprehension)", count: 2, marks: 16, compulsory: "Internal Choice" }
          ]
        },
        chapters: [
          {
            id: "e10-1",
            number: 1,
            title: "His First Flight (Liam O'Flaherty)",
            tamilTitle: "Unit 1: முதல் பறத்தல் - His First Flight",
            pages: 14,
            importance: "⭐⭐⭐ Core Prose Question",
            summary: "Story of a young seagull that is afraid to fly. Overcoming fear with hunger and mother seagull's clever encouragement.",
            keyPoints: [
              "Themes: Self-confidence, courage, parental guidance.",
              "Grammar: Modals, Prepositions, Active and Passive Voice."
            ],
            formulae: []
          },
          {
            id: "e10-3",
            number: 3,
            title: "Life (Poem by Henry Van Dyke)",
            tamilTitle: "Unit 1 Poem: வாழ்க்கை (மனப்பாடப் பாடல்)",
            pages: 8,
            importance: "⭐⭐⭐ Memory Poem (Guaranteed 5 Marks)",
            summary: "A positive sonnet inspiring readers to live life courageously forward without mournful regrets.",
            keyPoints: [
              "Memory Lines: 'Let me but live my life from year to year, With forward face and unreluctant soul; Not hurrying to, nor turning from the goal...'"
            ],
            formulae: []
          }
        ],
        pyqs: [
          { year: 2025, exam: "Class 10 English Model Exam 2025", tamilExam: "10-ஆம் வகுப்பு ஆங்கிலம் மாதிரி வினாத்தாள் 2025", date: "Jan 2025", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 34200 },
          { year: 2024, exam: "Class 10 English Public Exam March 2024", tamilExam: "அரசு பொதுத்தேர்வு ஆங்கிலம் மார்ச் 2024", date: "March 2024", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 49800 },
          { year: 2023, exam: "Class 10 English Public Exam April 2023", tamilExam: "அரசு பொதுத்தேர்வு ஆங்கிலம் ஏப்ரல் 2023", date: "April 2023", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 41200 },
          { year: 2022, exam: "Class 10 English Public Exam May 2022", tamilExam: "அரசு பொதுத்தேர்வு ஆங்கிலம் மே 2022", date: "May 2022", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 33400 },
          { year: 2021, exam: "10th English PTA Question Sets 1-6", tamilExam: "10-ஆம் வகுப்பு ஆங்கிலம் PTA வினாத்தாள்கள் 1-6", date: "2021", fileSize: "3.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Grammar Master Guide", downloadCount: 52100 },
          { year: 2020, exam: "Class 10 English DGE Bank 2020", tamilExam: "அரசு ஆங்கில வினா வங்கி 2020", date: "2020", fileSize: "2.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Vocabulary Bank", downloadCount: 28400 },
          { year: 2019, exam: "Class 10 English Public Exam March 2019", tamilExam: "அரசு பொதுத்தேர்வு ஆங்கிலம் மார்ச் 2019", date: "March 2019", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 26100 }
        ],
        importantQuestions: [
          {
            category: "Memory Poem (Compulsory 5 Marks)",
            list: [
              { q: "Quote from memory: 'Life' poem from 'Let me but live...' to '...the crown.' (Henry Van Dyke)", tamilQ: "'Let me but live...' முதல் தொடங்கும் Life மனப்பாடப் பாடல்", chapter: "Life Poem", yearTag: "⭐⭐ Sure Question 5 Marks", isGolden: true }
            ]
          }
        ]
      },

      // 5. SOCIAL SCIENCE - Class 10
      social: {
        syllabusInfo: {
          title: "Class 10 Social Science (History, Geo, Civics, Eco) Syllabus",
          tamilTitle: "10-ஆம் வகுப்பு சமூக அறிவியல் - பாடத்திட்டம் & வரைபட வழிகாட்டி",
          academicYear: "2024 - 2025",
          totalMarks: 100,
          passMark: 35,
          blueprint: [
            { type: "Part 1 (One Mark MCQs)", count: 14, marks: 14, compulsory: "All 4 subjects" },
            { type: "Part 2 (2 Marks Short)", count: 10, marks: 20, compulsory: "Compulsory Q28" },
            { type: "Part 3 (5 Marks Detail & Timeline)", count: 10, marks: 50, compulsory: "Compulsory Q42 (Timeline/Map)" },
            { type: "Part 4 (8 Marks Detail)", count: 2, marks: 16, compulsory: "Tamil Nadu or World Map" }
          ]
        },
        chapters: [
          {
            id: "ss10-1",
            number: 1,
            title: "Outbreak of World War I and Its Aftermath (History)",
            tamilTitle: "வரலாறு அலகு 1: முதல் உலகப்போர் மற்றும் அதன் விளைவுகள்",
            pages: 16,
            importance: "⭐⭐ Causes & Results of WWI (5 Marks)",
            summary: "Causes of WWI, Treaty of Versailles (1919), League of Nations causes of failure.",
            keyPoints: ["Immediate cause: Assassination of Archduke Franz Ferdinand in Sarajevo (June 1914)."],
            formulae: []
          },
          {
            id: "ss10-3",
            number: 1,
            title: "India - Location, Relief and Drainage (Geography)",
            tamilTitle: "புவியியல் அலகு 1: இந்தியா - அமைவிடம், நிலத்தோற்றம் மற்றும் வடிகாலமைப்பு",
            pages: 20,
            importance: "⭐⭐⭐ Map Questions & Physical Features",
            summary: "India's latitudinal and longitudinal extent, Himalayas, Northern Plains, Peninsular Plateau, Rivers.",
            keyPoints: ["Standard Meridian of India is 82° 30' E passing through Mirzapur."],
            formulae: []
          },
          {
            id: "ss10-4",
            number: 1,
            title: "Indian Constitution (Civics)",
            tamilTitle: "குடிமையியல் அலகு 1: இந்திய அரசியலமைப்பு",
            pages: 16,
            importance: "⭐⭐⭐ Fundamental Rights (Part III) 5 Marks",
            summary: "Making of the Constitution, Fundamental Rights, Directive Principles of State Policy, Amendment procedure.",
            keyPoints: ["Dr. B.R. Ambedkar was Chairman of the Drafting Committee."],
            formulae: []
          }
        ],
        pyqs: [
          { year: 2025, exam: "Class 10 Social Model 2025", tamilExam: "10-ஆம் வகுப்பு சமூக அறிவியல் மாதிரி 2025", date: "Jan 2025", fileSize: "2.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 35100 },
          { year: 2024, exam: "Class 10 Social Public March 2024", tamilExam: "பொதுத்தேர்வு மார்ச் 2024", date: "March 2024", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 50400 },
          { year: 2023, exam: "Class 10 Social Public April 2023", tamilExam: "பொதுத்தேர்வு ஏப்ரல் 2023", date: "April 2023", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 42800 },
          { year: 2022, exam: "Class 10 Social Public May 2022", tamilExam: "பொதுத்தேர்வு மே 2022", date: "May 2022", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 34900 },
          { year: 2021, exam: "10th Social PTA Question Sets 1-6", tamilExam: "10-ஆம் வகுப்பு சமூக அறிவியல் PTA வினாத்தாள்கள் 1-6", date: "2021", fileSize: "3.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Timeline & Map Bank", downloadCount: 55400 },
          { year: 2020, exam: "Class 10 Social DGE Bank 2020", tamilExam: "அரசு வினா வங்கி 2020", date: "2020", fileSize: "2.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 29800 },
          { year: 2019, exam: "Class 10 Social Public March 2019", tamilExam: "பொதுத்தேர்வு மார்ச் 2019", date: "March 2019", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 27400 }
        ],
        importantQuestions: [
          {
            category: "Timeline & Map (கட்டாய வினாக்கள் 5 & 8 Marks)",
            list: [
              { q: "Draw a Timeline of any 5 important events of the Indian National Movement between 1920 and 1940.", tamilQ: "1920 முதல் 1940 வரை இந்திய தேசிய இயக்கத்தின் ஏதேனும் ஐந்து நிகழ்வுகளுக்கான காலக்கோடு வரைக.", chapter: "History Timeline", yearTag: "⭐⭐ கட்டாய வினா Compulsory Q42", isGolden: true }
            ]
          }
        ]
      }
    },

    // ========================================================
    // CLASS 9
    // ========================================================
    "9": {
      maths: {
        syllabusInfo: { title: "Class 9 Mathematics", tamilTitle: "9-ஆம் வகுப்பு கணிதம்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [
          { id: "m9-1", number: 1, title: "Set Language (கணமொழி)", tamilTitle: "கணமொழி", pages: 18, importance: "⭐⭐ De Morgan's Laws", summary: "Representation of sets, types of sets, Venn diagrams, De Morgan's laws.", keyPoints: ["$(A \\cup B)' = A' \\cap B'$"], formulae: ["n(A ∪ B) = n(A) + n(B) - n(A ∩ B)"] },
          { id: "m9-2", number: 2, title: "Real Numbers (மெய் எண்கள்)", tamilTitle: "மெய் எண்கள்", pages: 20, importance: "⭐⭐ Surds & Rationalization", summary: "Rational and irrational numbers, surds, scientific notation.", keyPoints: ["Surd rationalization."], formulae: ["(a + √b)(a - √b) = a² - b"] }
        ],
        pyqs: [
          { year: 2025, exam: "Class 9 Annual Model 2025", tamilExam: "9-ஆம் வகுப்பு மாதிரி 2025", date: "Jan 2025", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 16800 },
          { year: 2024, exam: "Class 9 Annual Exam 2024", tamilExam: "ஆண்டு இறுதித் தேர்வு 2024", date: "April 2024", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 28400 },
          { year: 2023, exam: "Class 9 Annual Exam 2023", tamilExam: "ஆண்டு இறுதித் தேர்வு 2023", date: "April 2023", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 22100 },
          { year: 2022, exam: "Class 9 Summative 2022", tamilExam: "மதிப்பீட்டுத் தேர்வு 2022", date: "May 2022", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 18900 },
          { year: 2021, exam: "Class 9 Question Bank", tamilExam: "வினா வங்கி 2021", date: "2021", fileSize: "2.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 29500 },
          { year: 2020, exam: "Class 9 Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 16700 },
          { year: 2019, exam: "Class 9 Annual Exam 2019", tamilExam: "ஆண்டு இறுதித் தேர்வு 2019", date: "April 2019", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 15400 }
        ],
        importantQuestions: [
          { category: "5 Marks", list: [{ q: "Verify De Morgan's laws for set difference using Venn diagrams.", tamilQ: "வென்படங்களைப் பயன்படுத்தி கண வித்தியாசத்திற்கான டி மார்கனின் விதிகளைச் சரிபார்க்க.", chapter: "Set Language", yearTag: "Annual Regular", isGolden: true }] }
        ]
      },
      science: {
        syllabusInfo: { title: "Class 9 Science", tamilTitle: "9-ஆம் வகுப்பு அறிவியல்", academicYear: "2024 - 2025", totalMarks: 75, passMark: 25, blueprint: [] },
        chapters: [
          { id: "s9-1", number: 1, title: "Measurement (அளவீடு)", tamilTitle: "அளவீடு", pages: 16, importance: "⭐⭐ Vernier & Screw Gauge", summary: "Least count of Vernier Caliper (0.01 cm) and Screw Gauge (0.01 mm).", keyPoints: ["Least Count = Pitch / Total Head Scale Divisions."], formulae: ["W = m × g"] }
        ],
        pyqs: [
          { year: 2025, exam: "Class 9 Science Model 2025", tamilExam: "9-ஆம் வகுப்பு அறிவியல் மாதிரி 2025", date: "Jan 2025", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Model Key", downloadCount: 15400 },
          { year: 2024, exam: "Class 9 Science Annual 2024", tamilExam: "அறிவியல் ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Original", downloadCount: 26800 },
          { year: 2023, exam: "Class 9 Science Annual 2023", tamilExam: "அறிவியல் ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Solved", downloadCount: 20900 },
          { year: 2022, exam: "Class 9 Science Exam 2022", tamilExam: "அறிவியல் தேர்வு 2022", date: "May 2022", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Standard", downloadCount: 17800 },
          { year: 2021, exam: "Class 9 Science Bank", tamilExam: "அறிவியல் வினா வங்கி 2021", date: "2021", fileSize: "2.6 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Bank", downloadCount: 27900 },
          { year: 2020, exam: "Class 9 Science Term 3 2020", tamilExam: "பருவம் 3 அறிவியல் 2020", date: "March 2020", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Original", downloadCount: 15400 },
          { year: 2019, exam: "Class 9 Science Annual 2019", tamilExam: "அறிவியல் ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 75, highlight: "Standard", downloadCount: 14100 }
        ],
        importantQuestions: [
          { category: "4 Marks", list: [{ q: "Explain the construction and working of a screw gauge with neat diagram.", tamilQ: "திருகு அளவியின் அமைப்பு மற்றும் செயல்படும் விதத்தை படத்துடன் விவரி.", chapter: "Measurement", yearTag: "Repeated", isGolden: true }] }
        ]
      },
      tamil: {
        syllabusInfo: { title: "9-ஆம் வகுப்பு தமிழ்", tamilTitle: "9-ஆம் வகுப்பு தமிழ்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [
          { id: "t9-1", number: 1, title: "திராவிட மொழிக்குடும்பம் (இயல் 1)", tamilTitle: "இயல் 1: மொழி - திராவிட மொழிக்குடும்பம்", pages: 18, importance: "⭐⭐ கால்டுவெல் ஒப்பிலக்கணம்", summary: "தென், நடு, வட திராவிட மொழிகள், கால்டுவெல்லின் திராவிட மொழிகளின் ஒப்பிலக்கணம்.", keyPoints: ["திராவிடம் என்ற சொல்லை முதன்முதலில் பயன்படுத்தியவர் குமரிலபட்டர்."], formulae: [] }
        ],
        pyqs: [
          { year: 2025, exam: "Class 9 Tamil Model 2025", tamilExam: "9-ஆம் வகுப்பு தமிழ் மாதிரி 2025", date: "Jan 2025", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 17800 },
          { year: 2024, exam: "Class 9 Tamil Annual 2024", tamilExam: "தமிழ் ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 29800 },
          { year: 2023, exam: "Class 9 Tamil Annual 2023", tamilExam: "தமிழ் ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 24100 },
          { year: 2022, exam: "Class 9 Tamil Exam 2022", tamilExam: "தமிழ் தேர்வு 2022", date: "May 2022", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 19800 },
          { year: 2021, exam: "Class 9 Tamil Bank", tamilExam: "தமிழ் வினா வங்கி 2021", date: "2021", fileSize: "2.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 31200 },
          { year: 2020, exam: "Class 9 Tamil Term 3 2020", tamilExam: "பருவம் 3 தமிழ் 2020", date: "March 2020", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 16500 },
          { year: 2019, exam: "Class 9 Tamil Annual 2019", tamilExam: "தமிழ் ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 14900 }
        ],
        importantQuestions: [
          { category: "குறு வினாக்கள்", list: [{ q: "திராவிட மொழிகளின் பிரிவுகள் யாவை? உதாரணங்கள் தருக.", tamilQ: "திராவிட மொழிகளின் பிரிவுகள் யாவை? உதாரணங்கள் தருக.", chapter: "திராவிட மொழிக்குடும்பம்", yearTag: "Expected", isGolden: true }] }
        ]
      },
      english: {
        syllabusInfo: { title: "Class 9 English", tamilTitle: "9-ஆம் வகுப்பு ஆங்கிலம்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [
          { id: "e9-1", number: 1, title: "Learning the Game (Sachin Tendulkar)", tamilTitle: "Unit 1: விளையாட்டைக் கற்றல் - Sachin Tendulkar", pages: 14, importance: "⭐⭐ Inspirational Biography", summary: "Sachin Tendulkar's early coaching days under Ramakant Achrekar at Shivaji Park.", keyPoints: ["The one rupee coin placed on top of the stumps."], formulae: [] }
        ],
        pyqs: [
          { year: 2025, exam: "Class 9 English Model 2025", tamilExam: "9-ஆம் வகுப்பு ஆங்கில மாதிரி 2025", date: "Jan 2025", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 16500 },
          { year: 2024, exam: "Class 9 English Annual 2024", tamilExam: "ஆங்கில ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 27900 },
          { year: 2023, exam: "Class 9 English Annual 2023", tamilExam: "ஆங்கில ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 22400 },
          { year: 2022, exam: "Class 9 English Exam 2022", tamilExam: "ஆங்கில தேர்வு 2022", date: "May 2022", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 18400 },
          { year: 2021, exam: "Class 9 English Bank", tamilExam: "ஆங்கில வினா வங்கி 2021", date: "2021", fileSize: "2.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 29800 },
          { year: 2020, exam: "Class 9 English Term 3 2020", tamilExam: "பருவம் 3 ஆங்கிலம் 2020", date: "March 2020", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 15600 },
          { year: 2019, exam: "Class 9 English Annual 2019", tamilExam: "ஆங்கில ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 14200 }
        ],
        importantQuestions: [
          { category: "Paragraph Questions", list: [{ q: "How did Achrekar sir mold Sachin into a disciplined cricketer?", tamilQ: "சச்சினை அச்சிரேக்கர் சார் எவ்வாறு ஒரு சிறந்த கிரிக்கெட் வீரராக உருவாக்கினார்?", chapter: "Learning the Game", yearTag: "Expected", isGolden: true }] }
        ]
      },
      social: {
        syllabusInfo: { title: "Class 9 Social Science", tamilTitle: "9-ஆம் வகுப்பு சமூக அறிவியல்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [
          { id: "ss9-1", number: 1, title: "Evolution of Humans and Society", tamilTitle: "மனித பரிணாம வளர்ச்சியும் சமூகமும்", pages: 18, importance: "⭐⭐ Keezhadi Archaeological Site", summary: "Old Stone Age, New Stone Age, Megalithic culture in Tamil Nadu (Adichanallur, Keezhadi).", keyPoints: ["Keezhadi excavations confirm urban Sangam civilization on the banks of Vaigai."], formulae: [] }
        ],
        pyqs: [
          { year: 2025, exam: "Class 9 Social Model 2025", tamilExam: "9-ஆம் வகுப்பு சமூக அறிவியல் மாதிரி 2025", date: "Jan 2025", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 16100 },
          { year: 2024, exam: "Class 9 Social Annual 2024", tamilExam: "சமூக அறிவியல் ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 27400 },
          { year: 2023, exam: "Class 9 Social Annual 2023", tamilExam: "சமூக அறிவியல் ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 21900 },
          { year: 2022, exam: "Class 9 Social Exam 2022", tamilExam: "சமூக அறிவியல் தேர்வு 2022", date: "May 2022", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 17900 },
          { year: 2021, exam: "Class 9 Social Bank", tamilExam: "சமூக அறிவியல் வினா வங்கி 2021", date: "2021", fileSize: "2.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 29400 },
          { year: 2020, exam: "Class 9 Social Term 3 2020", tamilExam: "பருவம் 3 தேர்வு 2020", date: "March 2020", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 15100 },
          { year: 2019, exam: "Class 9 Social Annual 2019", tamilExam: "சமூக அறிவியல் ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 13900 }
        ],
        importantQuestions: [
          { category: "5 Marks", list: [{ q: "Explain the significant archaeological findings at Keezhadi.", tamilQ: "கீழடி அகழாய்வின் சிறப்புகளை விவரி.", chapter: "Evolution of Humans", yearTag: "Expected", isGolden: true }] }
        ]
      }
    },

    // ========================================================
    // CLASSES 6, 7, 8 (MIDDLE SCHOOL FOUNDATION)
    // ========================================================
    "8": {
      maths: {
        syllabusInfo: { title: "Class 8 Mathematics", tamilTitle: "8-ஆம் வகுப்பு கணிதம்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "m8-1", number: 1, title: "Rational Numbers (விகிதமுறு எண்கள்)", tamilTitle: "விகிதமுறு எண்கள்", pages: 16, importance: "⭐ Core Math", summary: "Properties of rational numbers, closure, commutative, associative.", keyPoints: ["Standard rational form."], formulae: ["a/b + c/d = (ad + bc)/bd"] }],
        pyqs: [
          { year: 2025, exam: "Class 8 Model 2025", tamilExam: "8-ஆம் வகுப்பு மாதிரி 2025", date: "Jan 2025", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 12400 },
          { year: 2024, exam: "Class 8 Annual 2024", tamilExam: "ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 22100 },
          { year: 2023, exam: "Class 8 Annual 2023", tamilExam: "ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 17800 },
          { year: 2022, exam: "Class 8 Exam 2022", tamilExam: "தேர்வு 2022", date: "May 2022", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 14200 },
          { year: 2021, exam: "Class 8 Bank 2021", tamilExam: "வினா வங்கி 2021", date: "2021", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 23400 },
          { year: 2020, exam: "Class 8 Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 12400 },
          { year: 2019, exam: "Class 8 Annual 2019", tamilExam: "ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 11200 }
        ],
        importantQuestions: [{ category: "Short Questions", list: [{ q: "Simplify: $\\frac{7}{9} + \\frac{-4}{3}$.", tamilQ: "சுருக்குக: $\\frac{7}{9} + \\frac{-4}{3}$", chapter: "Rational Numbers", yearTag: "Expected", isGolden: true }] }]
      },
      science: {
        syllabusInfo: { title: "Class 8 Science", tamilTitle: "8-ஆம் வகுப்பு அறிவியல்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "s8-1", number: 1, title: "Measurement (அளவீட்டியல்)", tamilTitle: "அளவீட்டியல்", pages: 14, importance: "⭐ Units", summary: "SI units, luminous intensity, temperature conversions.", keyPoints: ["Triple point of water: 273.16 K."], formulae: ["T(K) = t(°C) + 273.15"] }],
        pyqs: [
          { year: 2025, exam: "Class 8 Science Model 2025", tamilExam: "8-ஆம் வகுப்பு அறிவியல் மாதிரி 2025", date: "Jan 2025", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 11400 },
          { year: 2024, exam: "Class 8 Science Annual 2024", tamilExam: "அறிவியல் ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 20900 },
          { year: 2023, exam: "Class 8 Science Annual 2023", tamilExam: "அறிவியல் ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 16800 },
          { year: 2022, exam: "Class 8 Science Exam 2022", tamilExam: "அறிவியல் தேர்வு 2022", date: "May 2022", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 13200 },
          { year: 2021, exam: "Class 8 Science Bank", tamilExam: "அறிவியல் வினா வங்கி 2021", date: "2021", fileSize: "2.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 22100 },
          { year: 2020, exam: "Class 8 Science Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 11800 },
          { year: 2019, exam: "Class 8 Science Annual 2019", tamilExam: "அறிவியல் ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 10500 }
        ],
        importantQuestions: [{ category: "Short Questions", list: [{ q: "Define Luminous Intensity and its SI unit.", tamilQ: "ஒளிச்செறிவை வரையறுத்து அதன் அலகைக் கூறுக.", chapter: "Measurement", yearTag: "Expected", isGolden: true }] }]
      },
      tamil: {
        syllabusInfo: { title: "8-ஆம் வகுப்பு தமிழ்", tamilTitle: "8-ஆம் வகுப்பு தமிழ்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "t8-1", number: 1, title: "தமிழ்மொழி வாழ்த்து (இயல் 1)", tamilTitle: "இயல் 1: தமிழ்மொழி வாழ்த்து", pages: 14, importance: "⭐ பாரதியார் வாழ்த்து", summary: "மகாகவி பாரதியாரின் 'வாழ்க நிரந்தரம் வாழ்க தமிழ்மொழி வாழிய வாழியவே!'.", keyPoints: ["தொல்காப்பியர் மரபுச் சொற்கள்."], formulae: [] }],
        pyqs: [
          { year: 2025, exam: "Class 8 Tamil Model 2025", tamilExam: "8-ஆம் வகுப்பு தமிழ் மாதிரி 2025", date: "Jan 2025", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 12900 },
          { year: 2024, exam: "Class 8 Tamil Annual 2024", tamilExam: "தமிழ் ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 23100 },
          { year: 2023, exam: "Class 8 Tamil Annual 2023", tamilExam: "தமிழ் ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 18400 },
          { year: 2022, exam: "Class 8 Tamil Exam 2022", tamilExam: "தமிழ் தேர்வு 2022", date: "May 2022", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 14100 },
          { year: 2021, exam: "Class 8 Tamil Bank", tamilExam: "தமிழ் வினா வங்கி 2021", date: "2021", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 24500 },
          { year: 2020, exam: "Class 8 Tamil Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 12100 },
          { year: 2019, exam: "Class 8 Tamil Annual 2019", tamilExam: "தமிழ் ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 10900 }
        ],
        importantQuestions: [{ category: "மனப்பாடப் பாடல்", list: [{ q: "'வாழ்க நிரந்தரம்...' எனத் தொடங்கும் பாரதியாரின் பாடல்", tamilQ: "'வாழ்க நிரந்தரம்...' எனத் தொடங்கும் பாரதியாரின் பாடல்", chapter: "தமிழ்மொழி வாழ்த்து", yearTag: "கட்டாயம்", isGolden: true }] }]
      },
      english: {
        syllabusInfo: { title: "Class 8 English", tamilTitle: "8-ஆம் வகுப்பு ஆங்கிலம்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "e8-1", number: 1, title: "The Nose-Jewel (C. Rajagopalachari)", tamilTitle: "Unit 1: மூக்குத்தி கதை - The Nose-Jewel", pages: 12, importance: "⭐ Moral Tale", summary: "Two sparrows and a diamond nose-jewel: lesson that greed brings misery.", keyPoints: ["Rajaji's moral lesson."], formulae: [] }],
        pyqs: [
          { year: 2025, exam: "Class 8 English Model 2025", tamilExam: "8-ஆம் வகுப்பு ஆங்கில மாதிரி 2025", date: "Jan 2025", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 11900 },
          { year: 2024, exam: "Class 8 English Annual 2024", tamilExam: "ஆங்கில ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 21900 },
          { year: 2023, exam: "Class 8 English Annual 2023", tamilExam: "ஆங்கில ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 17400 },
          { year: 2022, exam: "Class 8 English Exam 2022", tamilExam: "ஆங்கில தேர்வு 2022", date: "May 2022", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 13500 },
          { year: 2021, exam: "Class 8 English Bank", tamilExam: "ஆங்கில வினா வங்கி 2021", date: "2021", fileSize: "2.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 23800 },
          { year: 2020, exam: "Class 8 English Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 11400 },
          { year: 2019, exam: "Class 8 English Annual 2019", tamilExam: "ஆங்கில ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 10200 }
        ],
        importantQuestions: [{ category: "Short Questions", list: [{ q: "What lesson did Ramayya and his wife learn?", tamilQ: "ராமையாவும் அவர் மனைவியும் கற்றுக்கொண்ட பாடம் என்ன?", chapter: "The Nose-Jewel", yearTag: "Expected", isGolden: true }] }]
      },
      social: {
        syllabusInfo: { title: "Class 8 Social Science", tamilTitle: "8-ஆம் வகுப்பு சமூக அறிவியல்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "ss8-1", number: 1, title: "Advent of the Europeans", tamilTitle: "ஐரோப்பியர்களின் வருகை", pages: 16, importance: "⭐ Battle of Plassey", summary: "Vasco da Gama, Battle of Plassey (1757) and Buxar (1764).", keyPoints: ["Fort St. George built in 1640."], formulae: [] }],
        pyqs: [
          { year: 2025, exam: "Class 8 Social Model 2025", tamilExam: "8-ஆம் வகுப்பு சமூக அறிவியல் மாதிரி 2025", date: "Jan 2025", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 12100 },
          { year: 2024, exam: "Class 8 Social Annual 2024", tamilExam: "சமூக அறிவியல் ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 22400 },
          { year: 2023, exam: "Class 8 Social Annual 2023", tamilExam: "சமூக அறிவியல் ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 17900 },
          { year: 2022, exam: "Class 8 Social Exam 2022", tamilExam: "சமூக அறிவியல் தேர்வு 2022", date: "May 2022", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 13900 },
          { year: 2021, exam: "Class 8 Social Bank", tamilExam: "சமூக அறிவியல் வினா வங்கி 2021", date: "2021", fileSize: "2.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 24100 },
          { year: 2020, exam: "Class 8 Social Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 11900 },
          { year: 2019, exam: "Class 8 Social Annual 2019", tamilExam: "சமூக அறிவியல் ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 10600 }
        ],
        importantQuestions: [{ category: "Short Questions", list: [{ q: "Write a note on Battle of Plassey (1757).", tamilQ: "பிளாசிப் போர் (1757) குறித்து சிறு குறிப்பு வரைக.", chapter: "Advent of Europeans", yearTag: "Expected", isGolden: true }] }]
      }
    },

    "7": {
      maths: {
        syllabusInfo: { title: "Class 7 Mathematics", tamilTitle: "7-ஆம் வகுப்பு கணிதம்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "m7-1", number: 1, title: "Integers (முழுக்கள்)", tamilTitle: "முழுக்கள்", pages: 14, importance: "⭐ Properties", summary: "Addition, subtraction and multiplication of integers.", keyPoints: ["(-a) × (-b) = a × b"], formulae: [] }],
        pyqs: [
          { year: 2025, exam: "Class 7 Model 2025", tamilExam: "7-ஆம் வகுப்பு மாதிரி 2025", date: "Jan 2025", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 9800 },
          { year: 2024, exam: "Class 7 Annual 2024", tamilExam: "ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 18400 },
          { year: 2023, exam: "Class 7 Annual 2023", tamilExam: "ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 14700 },
          { year: 2022, exam: "Class 7 Exam 2022", tamilExam: "தேர்வு 2022", date: "May 2022", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 11900 },
          { year: 2021, exam: "Class 7 Bank 2021", tamilExam: "வினா வங்கி 2021", date: "2021", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 19800 },
          { year: 2020, exam: "Class 7 Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 10400 },
          { year: 2019, exam: "Class 7 Annual 2019", tamilExam: "ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 9200 }
        ],
        importantQuestions: [{ category: "Short Questions", list: [{ q: "Simplify: $(-12) \\times (-5)$.", tamilQ: "சுருக்குக: $(-12) \\times (-5)$", chapter: "Integers", yearTag: "Expected", isGolden: true }] }]
      },
      science: {
        syllabusInfo: { title: "Class 7 Science", tamilTitle: "7-ஆம் வகுப்பு அறிவியல்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "s7-1", number: 1, title: "Measurement (அளவீட்டியல்)", tamilTitle: "அளவீட்டியல்", pages: 12, importance: "⭐ Irregular objects", summary: "Measuring area of irregular objects using graph sheet.", keyPoints: ["Density = Mass / Volume"], formulae: ["Density = Mass / Volume"] }],
        pyqs: [
          { year: 2025, exam: "Class 7 Science Model 2025", tamilExam: "7-ஆம் வகுப்பு அறிவியல் மாதிரி 2025", date: "Jan 2025", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 9200 },
          { year: 2024, exam: "Class 7 Science Annual 2024", tamilExam: "அறிவியல் ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 17600 },
          { year: 2023, exam: "Class 7 Science Annual 2023", tamilExam: "அறிவியல் ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 13900 },
          { year: 2022, exam: "Class 7 Science Exam 2022", tamilExam: "அறிவியல் தேர்வு 2022", date: "May 2022", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 11200 },
          { year: 2021, exam: "Class 7 Science Bank", tamilExam: "அறிவியல் வினா வங்கி 2021", date: "2021", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 18900 },
          { year: 2020, exam: "Class 7 Science Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 9800 },
          { year: 2019, exam: "Class 7 Science Annual 2019", tamilExam: "அறிவியல் ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 8700 }
        ],
        importantQuestions: [{ category: "Short Questions", list: [{ q: "What is Density? State its SI unit.", tamilQ: "அடர்த்தி என்றால் என்ன? அதன் அலகைக் கூறுக.", chapter: "Measurement", yearTag: "Expected", isGolden: true }] }]
      },
      tamil: {
        syllabusInfo: { title: "7-ஆம் வகுப்பு தமிழ்", tamilTitle: "7-ஆம் வகுப்பு தமிழ்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "t7-1", number: 1, title: "எங்கள் தமிழ் (இயல் 1)", tamilTitle: "இயல் 1: எங்கள் தமிழ்", pages: 12, importance: "⭐ நாமக்கல் கவிஞர்", summary: "நாமக்கல் கவிஞர் வெ. இராமலிங்கனாரின் 'அருள்நெறி அறிவைத் தரலாகும்'.", keyPoints: ["அகிம்சைக் கொள்கை."], formulae: [] }],
        pyqs: [
          { year: 2025, exam: "Class 7 Tamil Model 2025", tamilExam: "7-ஆம் வகுப்பு தமிழ் மாதிரி 2025", date: "Jan 2025", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 10400 },
          { year: 2024, exam: "Class 7 Tamil Annual 2024", tamilExam: "தமிழ் ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 19800 },
          { year: 2023, exam: "Class 7 Tamil Annual 2023", tamilExam: "தமிழ் ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 15400 },
          { year: 2022, exam: "Class 7 Tamil Exam 2022", tamilExam: "தமிழ் தேர்வு 2022", date: "May 2022", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 12200 },
          { year: 2021, exam: "Class 7 Tamil Bank", tamilExam: "தமிழ் வினா வங்கி 2021", date: "2021", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 20900 },
          { year: 2020, exam: "Class 7 Tamil Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 10500 },
          { year: 2019, exam: "Class 7 Tamil Annual 2019", tamilExam: "தமிழ் ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 9400 }
        ],
        importantQuestions: [{ category: "மனப்பாடப் பாடல்", list: [{ q: "'அருள்நெறி அறிவைத் தரலாகும்...' எங்கள் தமிழ் பாடல்", tamilQ: "'அருள்நெறி அறிவைத் தரலாகும்...' எங்கள் தமிழ் பாடல்", chapter: "எங்கள் தமிழ்", yearTag: "கட்டாயம்", isGolden: true }] }]
      },
      english: {
        syllabusInfo: { title: "Class 7 English", tamilTitle: "7-ஆம் வகுப்பு ஆங்கிலம்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "e7-1", number: 1, title: "Eidgah (Premchand)", tamilTitle: "Unit 1: ஈத்கா - Eidgah", pages: 12, importance: "⭐ Empathy", summary: "Hamid buys a pair of tongs for his grandmother Ameena.", keyPoints: ["Love and sacrifice."], formulae: [] }],
        pyqs: [
          { year: 2025, exam: "Class 7 English Model 2025", tamilExam: "7-ஆம் வகுப்பு ஆங்கில மாதிரி 2025", date: "Jan 2025", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 9600 },
          { year: 2024, exam: "Class 7 English Annual 2024", tamilExam: "ஆங்கில ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 18100 },
          { year: 2023, exam: "Class 7 English Annual 2023", tamilExam: "ஆங்கில ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 14200 },
          { year: 2022, exam: "Class 7 English Exam 2022", tamilExam: "ஆங்கில தேர்வு 2022", date: "May 2022", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 11400 },
          { year: 2021, exam: "Class 7 English Bank", tamilExam: "ஆங்கில வினா வங்கி 2021", date: "2021", fileSize: "1.9 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 19800 },
          { year: 2020, exam: "Class 7 English Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 9900 },
          { year: 2019, exam: "Class 7 English Annual 2019", tamilExam: "ஆங்கில ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 8800 }
        ],
        importantQuestions: [{ category: "Short Questions", list: [{ q: "Why did Hamid choose the tongs?", tamilQ: "ஹமீத் ஏன் இடுக்கியைத் தேர்ந்தெடுத்தான்?", chapter: "Eidgah", yearTag: "Expected", isGolden: true }] }]
      },
      social: {
        syllabusInfo: { title: "Class 7 Social Science", tamilTitle: "7-ஆம் வகுப்பு சமூக அறிவியல்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "ss7-1", number: 1, title: "Sources of Medieval India", tamilTitle: "இடைக்கால இந்திய வரலாற்று ஆதாரங்கள்", pages: 14, importance: "⭐ Inscriptions", summary: "Inscriptions, Uttiramerur inscription on village administration.", keyPoints: ["Kudavolai electoral system."], formulae: [] }],
        pyqs: [
          { year: 2025, exam: "Class 7 Social Model 2025", tamilExam: "7-ஆம் வகுப்பு சமூக அறிவியல் மாதிரி 2025", date: "Jan 2025", fileSize: "1.6 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 9900 },
          { year: 2024, exam: "Class 7 Social Annual 2024", tamilExam: "சமூக அறிவியல் ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 18700 },
          { year: 2023, exam: "Class 7 Social Annual 2023", tamilExam: "சமூக அறிவியல் ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 14500 },
          { year: 2022, exam: "Class 7 Social Exam 2022", tamilExam: "சமூக அறிவியல் தேர்வு 2022", date: "May 2022", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 11600 },
          { year: 2021, exam: "Class 7 Social Bank", tamilExam: "சமூக அறிவியல் வினா வங்கி 2021", date: "2021", fileSize: "2.0 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 20400 },
          { year: 2020, exam: "Class 7 Social Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 10100 },
          { year: 2019, exam: "Class 7 Social Annual 2019", tamilExam: "சமூக அறிவியல் ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 8900 }
        ],
        importantQuestions: [{ category: "Short Questions", list: [{ q: "What does Uttiramerur inscription describe?", tamilQ: "உத்திரமேரூர் கல்வெட்டு எதை விவரிக்கிறது?", chapter: "Medieval Sources", yearTag: "Expected", isGolden: true }] }]
      }
    },

    "6": {
      maths: {
        syllabusInfo: { title: "Class 6 Mathematics", tamilTitle: "6-ஆம் வகுப்பு கணிதம்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "m6-1", number: 1, title: "Numbers (எண்கள்)", tamilTitle: "எண்கள்", pages: 12, importance: "⭐ BODMAS Rule", summary: "Place value, BODMAS rule, large numbers.", keyPoints: ["BODMAS order."], formulae: [] }],
        pyqs: [
          { year: 2025, exam: "Class 6 Model 2025", tamilExam: "6-ஆம் வகுப்பு மாதிரி 2025", date: "Jan 2025", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 8200 },
          { year: 2024, exam: "Class 6 Annual 2024", tamilExam: "ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 16100 },
          { year: 2023, exam: "Class 6 Annual 2023", tamilExam: "ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 12400 },
          { year: 2022, exam: "Class 6 Exam 2022", tamilExam: "தேர்வு 2022", date: "May 2022", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 9900 },
          { year: 2021, exam: "Class 6 Bank 2021", tamilExam: "வினா வங்கி 2021", date: "2021", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 17200 },
          { year: 2020, exam: "Class 6 Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 8900 },
          { year: 2019, exam: "Class 6 Annual 2019", tamilExam: "ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 7800 }
        ],
        importantQuestions: [{ category: "Short Questions", list: [{ q: "Simplify using BODMAS: $24 + 2 \\times 8 \\div 2 - 1$.", tamilQ: "BODMAS விதியைப் பயன்படுத்தி சுருக்குக.", chapter: "Numbers", yearTag: "Expected", isGolden: true }] }]
      },
      science: {
        syllabusInfo: { title: "Class 6 Science", tamilTitle: "6-ஆம் வகுப்பு அறிவியல்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "s6-1", number: 1, title: "Measurements (அளவீடுகள்)", tamilTitle: "அளவீடுகள்", pages: 12, importance: "⭐ SI Units", summary: "Measurement of length, mass, time, SI units.", keyPoints: ["1 m = 100 cm = 1000 mm."], formulae: [] }],
        pyqs: [
          { year: 2025, exam: "Class 6 Science Model 2025", tamilExam: "6-ஆம் வகுப்பு அறிவியல் மாதிரி 2025", date: "Jan 2025", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 7900 },
          { year: 2024, exam: "Class 6 Science Annual 2024", tamilExam: "அறிவியல் ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 15400 },
          { year: 2023, exam: "Class 6 Science Annual 2023", tamilExam: "அறிவியல் ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 11900 },
          { year: 2022, exam: "Class 6 Science Exam 2022", tamilExam: "அறிவியல் தேர்வு 2022", date: "May 2022", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 9400 },
          { year: 2021, exam: "Class 6 Science Bank", tamilExam: "அறிவியல் வினா வங்கி 2021", date: "2021", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 16400 },
          { year: 2020, exam: "Class 6 Science Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 8400 },
          { year: 2019, exam: "Class 6 Science Annual 2019", tamilExam: "அறிவியல் ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 7300 }
        ],
        importantQuestions: [{ category: "Short Questions", list: [{ q: "What is parallax error?", tamilQ: "இடமாறு தோற்றப் பிழை என்றால் என்ன?", chapter: "Measurements", yearTag: "Expected", isGolden: true }] }]
      },
      tamil: {
        syllabusInfo: { title: "6-ஆம் வகுப்பு தமிழ்", tamilTitle: "6-ஆம் வகுப்பு தமிழ்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "t6-1", number: 1, title: "இன்பத்தமிழ் (இயல் 1)", tamilTitle: "இயல் 1: இன்பத்தமிழ்", pages: 12, importance: "⭐ பாரதிதாசன்", summary: "பாரதிதாசனின் 'தமிழுக்கும் அமுதென்று பேர்!'.", keyPoints: ["தமிழ் எங்கள் உயிருக்கு நேர்."], formulae: [] }],
        pyqs: [
          { year: 2025, exam: "Class 6 Tamil Model 2025", tamilExam: "6-ஆம் வகுப்பு தமிழ் மாதிரி 2025", date: "Jan 2025", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 8600 },
          { year: 2024, exam: "Class 6 Tamil Annual 2024", tamilExam: "தமிழ் ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 16800 },
          { year: 2023, exam: "Class 6 Tamil Annual 2023", tamilExam: "தமிழ் ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 12900 },
          { year: 2022, exam: "Class 6 Tamil Exam 2022", tamilExam: "தமிழ் தேர்வு 2022", date: "May 2022", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 10100 },
          { year: 2021, exam: "Class 6 Tamil Bank", tamilExam: "தமிழ் வினா வங்கி 2021", date: "2021", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 17900 },
          { year: 2020, exam: "Class 6 Tamil Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 8800 },
          { year: 2019, exam: "Class 6 Tamil Annual 2019", tamilExam: "தமிழ் ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 7600 }
        ],
        importantQuestions: [{ category: "மனப்பாடப் பாடல்", list: [{ q: "'தமிழுக்கும் அமுதென்று பேர்...' இன்பத்தமிழ் பாடல்", tamilQ: "'தமிழுக்கும் அமுதென்று பேர்...' இன்பத்தமிழ் பாடல்", chapter: "இன்பத்தமிழ்", yearTag: "கட்டாயம்", isGolden: true }] }]
      },
      english: {
        syllabusInfo: { title: "Class 6 English", tamilTitle: "6-ஆம் வகுப்பு ஆங்கிலம்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "e6-1", number: 1, title: "Sea Turtles", tamilTitle: "Unit 1: கடல் ஆமைகள் - Sea Turtles", pages: 12, importance: "⭐ Olive Ridley", summary: "Olive Ridley mass nesting (Arribada).", keyPoints: ["Coastal conservation."], formulae: [] }],
        pyqs: [
          { year: 2025, exam: "Class 6 English Model 2025", tamilExam: "6-ஆம் வகுப்பு ஆங்கில மாதிரி 2025", date: "Jan 2025", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 8100 },
          { year: 2024, exam: "Class 6 English Annual 2024", tamilExam: "ஆங்கில ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 15900 },
          { year: 2023, exam: "Class 6 English Annual 2023", tamilExam: "ஆங்கில ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 12100 },
          { year: 2022, exam: "Class 6 English Exam 2022", tamilExam: "ஆங்கில தேர்வு 2022", date: "May 2022", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 9600 },
          { year: 2021, exam: "Class 6 English Bank", tamilExam: "ஆங்கில வினா வங்கி 2021", date: "2021", fileSize: "1.7 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 16900 },
          { year: 2020, exam: "Class 6 English Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 8400 },
          { year: 2019, exam: "Class 6 English Annual 2019", tamilExam: "ஆங்கில ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 7200 }
        ],
        importantQuestions: [{ category: "Short Questions", list: [{ q: "What is 'Arribada'?", tamilQ: "அரிபடா என்றால் என்ன?", chapter: "Sea Turtles", yearTag: "Expected", isGolden: true }] }]
      },
      social: {
        syllabusInfo: { title: "Class 6 Social Science", tamilTitle: "6-ஆம் வகுப்பு சமூக அறிவியல்", academicYear: "2024 - 2025", totalMarks: 100, passMark: 35, blueprint: [] },
        chapters: [{ id: "ss6-1", number: 1, title: "What is History?", tamilTitle: "வரலாறு என்றால் என்ன?", pages: 12, importance: "⭐ Ashoka", summary: "Meaning of history, Emperor Ashoka's edicts.", keyPoints: ["Dharma Chakra."], formulae: [] }],
        pyqs: [
          { year: 2025, exam: "Class 6 Social Model 2025", tamilExam: "6-ஆம் வகுப்பு சமூக அறிவியல் மாதிரி 2025", date: "Jan 2025", fileSize: "1.5 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Model Key", downloadCount: 8400 },
          { year: 2024, exam: "Class 6 Social Annual 2024", tamilExam: "சமூக அறிவியல் ஆண்டுத் தேர்வு 2024", date: "April 2024", fileSize: "1.4 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 16200 },
          { year: 2023, exam: "Class 6 Social Annual 2023", tamilExam: "சமூக அறிவியல் ஆண்டுத் தேர்வு 2023", date: "April 2023", fileSize: "1.3 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Solved", downloadCount: 12600 },
          { year: 2022, exam: "Class 6 Social Exam 2022", tamilExam: "சமூக அறிவியல் தேர்வு 2022", date: "May 2022", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 9800 },
          { year: 2021, exam: "Class 6 Social Bank", tamilExam: "சமூக அறிவியல் வினா வங்கி 2021", date: "2021", fileSize: "1.8 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Bank", downloadCount: 17400 },
          { year: 2020, exam: "Class 6 Social Term 3 2020", tamilExam: "பருவம் 3 2020", date: "March 2020", fileSize: "1.2 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Original", downloadCount: 8700 },
          { year: 2019, exam: "Class 6 Social Annual 2019", tamilExam: "சமூக அறிவியல் ஆண்டுத் தேர்வு 2019", date: "April 2019", fileSize: "1.1 MB", hasAnswerKey: true, totalMarks: 100, highlight: "Standard", downloadCount: 7500 }
        ],
        importantQuestions: [{ category: "Short Questions", list: [{ q: "Why did Ashoka embrace Buddhism?", tamilQ: "அசோகர் ஏன் பௌத்தத்தைத் தழுவினார்?", chapter: "What is History?", yearTag: "Expected", isGolden: true }] }]
      }
    }
  }
};
