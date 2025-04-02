# genty.dev: webspace for Nic

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── screenshot-app.png
│   │   └── user-profile-image.png
│   ├── components/
│   │   └── icons/
│   │   └── Link.astro
│   │   └── List.astro
│   │   └── Profile.astro
│   │   └── Shadow.astro
│   ├── data/
│   │   └── user.json
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
|:---------------------------| :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
