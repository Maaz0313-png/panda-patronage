# Panda Patronage

Panda Patronage is a modern, creative digital marketing agency website built with React, Vite, and TailwindCSS. It features a clean, responsive design, dynamic blog, project showcases, and essential company pages. The project is optimized for performance and easy deployment (e.g., Vercel).

## Features

- ⚡️ Fast, modern React app powered by Vite
- 🎨 Beautiful UI with TailwindCSS and Framer Motion animations
- 📰 Dynamic blog with article detail pages
- 💼 Project/case study showcase
- 📄 Company pages: About, Contact, Privacy Policy, Licensing, Terms of Use
- 🧭 Responsive navigation (desktop & mobile)
- 🧩 Modular, reusable components
- 🌐 SEO-friendly and ready for deployment

## Project Structure

- `src/` — Main source code
  - `components/` — Reusable UI components (Header, Footer, Cards, etc.)
  - `pages/` — Top-level route pages (Home, About, Blog, etc.)
  - `sections/` — Page sections for modular layouts
  - `data/` — Centralized data (e.g., blog articles)
  - `assets/` — Static assets (images, icons)
- `public/` — Static files and images
- `index.html` — Main HTML entry point
- `vite.config.js` — Vite configuration
- `tailwind.config.js` — TailwindCSS configuration (if present)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Maaz0313-png/panda-patronage.git
   cd panda-patronage
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Development

Start the local development server:

```sh
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` (or as shown in your terminal).

### Build for Production

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

### Linting

```sh
npm run lint
# or
yarn lint
```

## Deployment

This project is ready for deployment on platforms like Vercel. The `vercel.json` file ensures proper routing for single-page app behavior.

## Customization

- Update content, images, and branding in the `src/` and `public/` folders.
- Add or modify blog articles in `src/data/articles.js`.
- Adjust styles in `src/index.css` and Tailwind config.

## License

See the [Licensing](./src/pages/Licensing.jsx) page for details.

---

**Panda Patronage** — Creative Digital Marketing Agency
