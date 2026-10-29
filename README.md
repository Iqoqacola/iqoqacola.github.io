# iqoqacola.github.io

Personal portfolio of Muhammad Iqbal, live at https://iqoqacola.github.io.

Built with React (Vite), Tailwind CSS and Framer Motion. The hero shows a small backend architecture (clients, gateway, services, databases) drawn procedurally with three.js and @react-three/fiber, so the site ships no 3D model files. The scene loads after the page text, pauses when it scrolls out of view, and stays still for visitors who prefer reduced motion.

Profile, projects and experience live in `src/data.js`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Pushing to `main` deploys to GitHub Pages through `.github/workflows/static.yml`.
