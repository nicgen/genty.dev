# Nicolas Genty — Portfolio v2

A high-performance, minimalist, and brutalist portfolio built with **Astro 5** and **React**. Designed for speed, aesthetics, and ease of content management.

## ✨ Features

- **🚀 Astro 5 + React**: Hybrid architecture combining static performance with dynamic interactivity.
- **🎨 Design Tokens**: Centralized design system in `tokens.css` with a dual-color strategy:
  - **Light Mode**: Vibrant Red (`#eb0202`)
  - **Dark Mode**: Vibrant Green (`#bcfd49`)
- **📦 Content Collections**: Type-safe data management for projects and profile info.
- **🎭 Motion**: Smooth gallery transitions and micro-animations using **Framer Motion**.
- **🌗 Smart Theme**: Persistent dark/light mode with FOUC (Flash of Unstyled Content) prevention.
- **🖼️ Optimized Assets**: CSS masks for theme-aware social icons and local image optimization.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Simple Icons](https://simpleicons.org/) via CSS masks
- **Typography**: Outfit & IBM Plex Mono

## 📂 Project Structure

```text
src/
├── components/     # Astro & React components
├── content/        # Data collections (projects, user)
├── context/        # Theme state management
├── layouts/        # Base HTML layout
├── pages/          # File-based routing
└── styles/         # Design tokens & global CSS
```

## 🧞 Commands

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start development server at `localhost:5173` |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |

## 📝 Content Management

The site is data-driven. To update content:

- **Projects**: Edit or add JSON files in `src/content/projects/`.
- **Profile**: Edit `src/content/user/profile.json`.
- **Images**: Place project images in `public/assets/projects/` and reference them in the JSON files.

---
Built by [Nicolas Genty](https://github.com/nicgen)
