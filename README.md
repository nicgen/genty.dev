# Nicolas Genty — Portfolio

A high-performance, minimalist, and brutalist portfolio. Powered by **Astro 5** with a data-driven architecture.

## Key Features

- **Astro 5 Architecture**: Maximum static performance.
- **Advanced Theme System**: Smooth transitions (View Transitions) with persistence.
- **Design System**: Centralized design tokens (`tokens.css`).
- **Content-First**: Content management via typed JSON files.
- **Asset Optimization**: Self-hosted fonts and icons.

## Commands

| Command        | Action                              |
| :------------- | :---------------------------------- |
| `pnpm install` | Install dependencies                |
| `pnpm dev`     | Start development server            |
| `pnpm lint`    | Check code quality                  |
| `pnpm format`  | Format the project                  |
| `pnpm build`   | Generate static site for production |

## Project Structure

```text
src/
├── assets/         # Optimized images
├── components/     # Astro components
├── content/        # JSON data (projects, profile)
├── layouts/        # Layout and theme logic
├── pages/          # Routes
└── styles/         # Design tokens
```

## Content Management

The site is data-driven. To update content:

- **Projects**: Edit or add JSON files in `src/content/projects/`.
- **Profile**: Edit `src/content/user/profile.json`.
- **Images**: Place project images in `src/assets/projects/` and reference them in JSON files (e.g., `../../assets/projects/image.webp`).
- **Icons**: Add new technology icons to `public/icons/` if missing.

---

Built by [Nicolas Genty](https://github.com/nicgen)
