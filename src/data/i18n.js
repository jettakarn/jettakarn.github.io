export const shared = {
  email: "itsjazzk@proton.me",
  socials: {
    linkedin: "https://www.linkedin.com/in/jettakarn/",
    github: "https://github.com/jettakarn",
    leetcode: "https://leetcode.com/u/jettakarn/",
    instagram: "https://www.instagram.com/jettakarn/",
  },
};

export const locales = {
  en: {
    name: "Jettakarn Khamwai",
    title: "CS Student @ YZU CSE",
    tagline:
      "Building foundations in algorithms, systems, and small tools that scratch real itches.",
    education: [
      {
        degree: "Computer Science and Engineering",
        school: "Yuan Ze University",
        period: "2024 – 2028",
        description:
          "Focusing on foundational computer science principles, system architecture, and software development.",
      },
      {
        degree: "High School Diploma",
        school: "Taoyuan Municipal Yang-Ming Senior High",
        period: "2019 – 2022",
        description:
          "Completed a rigorous academic program with a focus on core subjects including Mathematics, Advanced Sciences, Language Arts, and Social Studies.",
      },
    ],
    skillTiles: {
      techStack: [
        { id: "git", label: "Git" },
        { id: "github", label: "GitHub" },
        { id: "linux", label: "Linux" },
        { id: "nodejs", label: "Node.js" },
        { id: "cpp", label: "C/C++" },
        { id: "python", label: "Python" },
        { id: "htmlcss", label: "HTML/CSS" },
        { id: "bash", label: "Bash" },
      ],
      skills: [
        { id: "brainstorming", label: "Brainstorming" },
        { id: "pcBuilding", label: "PC Building" },
        { id: "videoEditing", label: "Video Editing" },
        { id: "office", label: "Microsoft Office" },
      ],
      languages: [
        { id: "english", label: "English" },
        { id: "mandarin", label: "Mandarin Chinese" },
        { id: "hokkien", label: "Taiwanese Hokkien" },
        { id: "thai", label: "Thai" },
      ],
    },
    projects: [
      {
        name: "ROCLING 2025 TCU Reproduction",
        description:
          "Reproduced parts of the TCU shared task at ROCLING-2025, centered on multilingual-e5-large-instruct with SVR.",
        stack: ["Python", "NLP", "SVR"],
        url: "https://github.com/jettakarn/rocling25-tcu-reproduction",
        year: "2026",
      },
      {
        name: "Islet",
        description:
          "A native Dynamic Island–like feature for GNOME 45+, built as a desktop shell extension.",
        stack: ["JavaScript", "GNOME"],
        url: "https://github.com/jettakarn/islet-gnome-extension",
        year: "2026",
      },
      {
        name: "Personal Portfolio",
        description:
          "This site — a minimal Astro portfolio for projects, education, and contact.",
        stack: ["Astro", "Tailwind"],
        url: "https://github.com/jettakarn/jettakarn.github.io",
        year: "2025",
      },
      {
        name: "2shiftly",
        description: "CLI tool for company daily shift rosters.",
        stack: ["Python"],
        url: "https://github.com/jettakarn/2shiftly",
        year: "2026",
      },
    ],
    ui: {
      connect: "Let's connect",
      viewProjects: "View projects",
      projects: "Projects",
      selectedWork: "Selected work",
      education: "Education",
      techStack: "Tech Stack",
      skills: "Skills",
      languages: "Languages",
      scrollProjects: "Scroll to projects",
      langButton: "Language",
      langEn: "English",
      langZh: "繁體中文",
      themeToLight: "Switch to light mode",
      themeToDark: "Switch to dark mode",
    },
  },
  "zh-Hant": {
    name: "威喆森",
    title: "元智大學資訊工程學系",
    tagline: "打好演算法與系統基礎，並動手做出能解決實際需求的小工具。",
    education: [
      {
        degree: "資訊工程學系",
        school: "元智大學",
        period: "2024 – 2028",
        description: "專注於電腦科學基礎、系統架構與軟體開發。",
      },
      {
        degree: "高中",
        school: "桃園市立陽明高級中學",
        period: "2019 – 2022",
        description:
          "完成扎實的高中課程，著重數學、自然科學、語文與社會領域。",
      },
    ],
    skillTiles: {
      techStack: [
        { id: "git", label: "Git" },
        { id: "github", label: "GitHub" },
        { id: "linux", label: "Linux" },
        { id: "nodejs", label: "Node.js" },
        { id: "cpp", label: "C/C++" },
        { id: "python", label: "Python" },
        { id: "htmlcss", label: "HTML/CSS" },
        { id: "bash", label: "Bash" },
      ],
      skills: [
        { id: "brainstorming", label: "腦力激盪" },
        { id: "pcBuilding", label: "組裝電腦" },
        { id: "videoEditing", label: "影片剪輯" },
        { id: "office", label: "微軟 Office" },
      ],
      languages: [
        { id: "english", label: "英語" },
        { id: "mandarin", label: "華語" },
        { id: "hokkien", label: "台灣閩南語" },
        { id: "thai", label: "泰語" },
      ],
    },
    projects: [
      {
        name: "ROCLING 2025 TCU 重現",
        description:
          "重現 ROCLING-2025 Shared Task 中 TCU 的部分實作，以 multilingual-e5-large-instruct 搭配 SVR 為主線。",
        stack: ["Python", "NLP", "SVR"],
        url: "https://github.com/jettakarn/rocling25-tcu-reproduction",
        year: "2026",
      },
      {
        name: "Islet",
        description:
          "為 GNOME 45+ 環境打造類似 Dynamic Island 的桌面擴充功能。",
        stack: ["JavaScript", "GNOME"],
        url: "https://github.com/jettakarn/islet-gnome-extension",
        year: "2026",
      },
      {
        name: "個人作品集網站",
        description:
          "本網站——基於 Astro 打造的極簡作品集，呈現專案、學歷與聯絡資訊。",
        stack: ["Astro", "Tailwind"],
        url: "https://github.com/jettakarn/jettakarn.github.io",
        year: "2025",
      },
      {
        name: "2shiftly",
        description: "公司每日班表用的 CLI 工具。",
        stack: ["Python"],
        url: "https://github.com/jettakarn/2shiftly",
        year: "2026",
      },
    ],
    ui: {
      connect: "聯絡我",
      viewProjects: "查看專案",
      projects: "專案",
      selectedWork: "精選作品",
      education: "學歷",
      techStack: "技術棧",
      skills: "技能",
      languages: "語言",
      scrollProjects: "捲動至專案",
      langButton: "語言",
      langEn: "English",
      langZh: "繁體中文",
      themeToLight: "切換至淺色模式",
      themeToDark: "切換至深色模式",
    },
  },
};

export const i18nBundle = { shared, locales };
