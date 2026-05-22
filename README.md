<div align="center">
  <h1>🌌 N.Sai Vikas' 3D Portfolio</h1>
  <p>Shaping ideas, concepts, designs, and code into immersive digital experiences.</p>

  <p>
    <img src="https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Three.js-0.174.0-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
    <img src="https://img.shields.io/badge/Tailwindcss-4.0.14-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  </p>
</div>

---

## 🚀 About this portfolio

This repository is a polished personal portfolio built for a Machine Learning Engineer who combines physics, AI, and frontend craftsmanship into a visually rich, interactive web experience.

It showcases a modern, 3D-powered landing page with engaging motion, real-world experience, client testimonials, and a fully interactive contact flow.

**Live site:** https://saivikas-portfolio.vercel.app/

> This repo is meant to teach and inspire. Learn from the code, but please do not simply copy it without attribution.

---

## ✨ What’s included

- **Hero section** with animated headline text and a 3D model experience
- **Project showcase** with smooth transitions and visual storytelling
- **Logo showcase** of partner brands, tools, and technologies
- **Feature cards** highlighting quality, communication, and delivery
- **Experience timeline** with internship details and contributions
- **Animated tech stack** using 3D icons
- **Testimonials** to convey professional trust
- **EmailJS-powered contact form** with clipboard-ready email support

---

## 🧠 Core technologies

- React 19
- Vite 6
- Tailwind CSS 4
- Three.js
- React Three Fiber
- @react-three/drei
- GSAP
- EmailJS

---

## 🗂️ Project structure

- `src/App.jsx` — application layout
- `src/sections/` — content sections such as `Hero`, `ShowcaseSection`, `LogoShowcase`, `FeatureCards`, `Experience`, `TechStack`, `Testimonials`, `Contact`
- `src/components/` — reusable UI controls and animation wrappers
- `src/constants/` — centralized content, icons, experience cards, and testimonials
- `public/` — static assets, images, 3D models, and textures

---

## ⚡ Quick start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root with:

```env
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
VITE_APP_CONTACT_EMAIL=
```

If EmailJS is not configured, the contact section will still display a fallback email address.

### 3. Run the development server

```bash
npm run dev
```

Then open `http://localhost:5173`.

### 4. Build for production

```bash
npm run build
```

### 5. Preview production locally

```bash
npm run preview
```

---

## 🌟 Why this portfolio stands out

- **Immersive 3D experience** rather than a static landing page
- **Fast, responsive performance** with Vite and Tailwind
- **Modern animations** powered by GSAP and React Three Fiber
- **Skill-driven storytelling** for ML, data science, and frontend work
- **Easy contact flow** for hires and collaborations

---

## 📬 Contact

Interested in collaborating or reviewing the code? The portfolio includes a fully interactive contact form, and the site is ready to connect once EmailJS credentials are configured.

---

## License

This repository is licensed under the MIT License.

---

## 🚀 Notes

This README is designed to present your portfolio as a polished, professional project while keeping the setup simple and easy to follow.
