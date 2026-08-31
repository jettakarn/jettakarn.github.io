# jettakarn.github.io

Personal portfolio site for **Jettakarn Khamwai** — a static single-page site built with Astro.

**Live site:** [https://jettakarn.github.io](https://jettakarn.github.io)

## Features

- Hero with name, tagline, and contact CTAs
- Data-driven Projects section
- Education, Skills, and Interests
- Light / dark theme toggle (dark by default)

## Stack

- [Astro](https://astro.build/) 6
- [Tailwind CSS](https://tailwindcss.com/) 4
- GitHub Pages via GitHub Actions

## Project structure

```text
/
├── .github/workflows/deploy.yml
├── public/
├── src/
│   ├── data/cvData.js      # CV and project content
│   ├── pages/index.astro   # Single-page layout
│   └── styles/global.css   # Theme and styles
├── astro.config.mjs
└── package.json
```

## Local development

Requires **Node.js `>=22.12`**.

| Command            | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Install dependencies                        |
| `npm run dev`      | Start dev server at `localhost:4321`        |
| `npm run build`    | Build production site to `./dist/`          |
| `npm run preview`  | Preview the production build locally        |

## Deploy

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and deploys it to GitHub Pages.

In the repo settings, set **Pages → Source** to **GitHub Actions**.

## Editing content

Update [`src/data/cvData.js`](src/data/cvData.js) for name, tagline, projects, education, skills, and links. Layout and styles live in `src/pages/index.astro` and `src/styles/global.css`.
