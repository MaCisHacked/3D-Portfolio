# 3D Desk Portfolio (Starter)

A learn-by-doing template for a 3D portfolio: a cozy desk scene in Three.js (via react-three-fiber) with an in-monitor UI showing folders for Projects, About, Blog, and Contact.

## Quickstart

```bash
npm i
npm run dev
```

Open http://localhost:5173

### Deploy to GitHub Pages
1. Commit to a GitHub repo.
2. If it's a *project* page, set `base: '/your-repo-name/'` in `vite.config.js`.
3. Enable Pages: Settings → Pages → Build and deployment: **GitHub Actions**.
4. Keep the workflow below in `.github/workflows/deploy.yml` (already included).
5. Push to `main`. Pages will deploy automatically.

### Customize
- Edit `/public/content/projects.json` to list your projects.
- Change text in `ScreenUI.jsx` and `public/lite.html`.
- Replace the desk geometry in `Desk.jsx` with a real GLB model later.
- Style in `src/styles.css`.
