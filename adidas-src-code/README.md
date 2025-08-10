# Adidas Official

A modern React application inspired by the Adidas India website. This project is built using [React 19](https://react.dev/), [Vite](https://vitejs.dev/) for a fast development experience, and includes an opinionated ESLint setup for quality code.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Development](#development)

---

## Features

- ⚡ **Fast setup with Vite** for instant reloads and builds
- 💡 **React 19** for building interactive user interfaces
- 🎨 Organized component structure under `src/components/`
- 🛠️ **ESLint** and plugins for code quality
- 🖼️ Static assets and images managed under `public/` and `src/assets/`

---

## Project Structure

```
adidas-offical/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── products/
│   └── ...
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Balaji-webdev/adidas-official.git
   cd adidas-official/adidas-offical
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   This will start the app locally. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint on the project

---

## Development

- The main entry point is `index.html` and `src/main.jsx`.
- Components are located in `src/components/`.
- Static assets (like images) can be placed in `public/` or `src/assets/`.
- ESLint is configured in `eslint.config.js` for code linting and quality.

---
