# ✦ Riya Singh — Portfolio

A modern, dark-themed personal portfolio website built with **HTML**, **CSS**, and **JavaScript**.  
Features GSAP scroll animations, a canvas particle background, custom cursor, and fully responsive design.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white)

🌐 **Live Site:** [portfolio-dusky-six-74.vercel.app](https://portfolio-dusky-six-74.vercel.app/)

---

## 🚀 Quick Start

### Option 1 — Open directly
Open `index.html` in any modern browser.

### Option 2 — Local dev server
```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# VS Code — Install "Live Server" extension → Right-click index.html → Open with Live Server
```
Then visit `http://localhost:8000`

---

## 📂 Project Structure
```
website/
├── index.html        # Main page — all sections (Hero, About, Skills, Projects, Achievements, Contact)
├── resume.html       # Resume viewer/downloader page
├── style.css         # Dark theme, glassmorphism, responsive design (1380+ lines)
├── script.js         # GSAP animations, custom cursor, canvas particles, interactions
├── images/
│   ├── my_photo.jpeg # Profile photo
│   ├── drone.png     # Project screenshot — Drone Detection
│   ├── rti.png       # Project screenshot — RTI Summarizer
│   └── lexiverse.png # Project screenshot — LexiVerse
├── assets/
│   └── Riya_Singh_CV.pdf  # Resume PDF
├── .gitignore
├── LICENSE
└── README.md
```

---

## ✨ Features

| Feature | Details |
|---|---|
| **Dark Theme** | Monochromatic black with purple/teal gradient accents |
| **Custom Cursor** | Dot + follower ring with hover scaling (desktop) |
| **Canvas Background** | Animated smoke particles in the hero section |
| **Scroll Animations** | GSAP ScrollTrigger — fade-up, stagger, parallax |
| **3D Tilt Cards** | Interactive tilt effect on project cards |
| **Animated Counters** | Count-up stats (LeetCode, accuracy, patent) |
| **Marquee Ticker** | Auto-scrolling tech skills banner |
| **Resume Viewer** | Embedded PDF viewer with download button |
| **Responsive** | Fully adaptive — desktop, tablet, and mobile |
| **Glassmorphism Navbar** | Sticky with blur backdrop on scroll |

---

## 📑 Sections

1. **Navbar** — Logo, section links, Resume (opens new tab), Contact CTA, hamburger menu
2. **Hero** — Animated title, subtitle, CTA buttons, scroll indicator
3. **About** — Photo, bio, tags, education timeline
4. **Skills** — Languages, Core Concepts, Systems & Databases, Web Technologies, Libraries & Frameworks, AI/ML, Soft Skills
5. **Projects** — Drone Detection System, RTI Summarizer, LexiVerse Search Engine
6. **Achievements** — Awards, published patent (clickable), competitive programming stats, certifications with links
7. **Contact** — Email, LinkedIn, GitHub, phone
8. **Footer** — Availability status, social links

---

## 🌐 Deployment

✅ **Currently deployed on Vercel**  
Live at: [portfolio-dusky-six-74.vercel.app](https://portfolio-dusky-six-74.vercel.app/)

Any push to the `main` branch on GitHub automatically triggers a redeployment on Vercel.

### GitHub Pages (Alternative)
1. Go to **Settings → Pages → Source**: `main` branch, `/ (root)` → **Save**
2. Site goes live at `https://riya-singh10.github.io/portfolio`

---

## 🛠 Tech Stack

- **HTML5** — Semantic structure, SEO meta tags
- **CSS3** — Custom properties, Grid, Flexbox, keyframe animations, glassmorphism
- **JavaScript** — Vanilla ES6+
- **[GSAP 3](https://greensock.com/gsap/)** + ScrollTrigger — Scroll-driven animations
- **[Google Fonts](https://fonts.google.com/)** — Syne (headings) + Inter (body)
- **[Vercel](https://vercel.com)** — Hosting & continuous deployment

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Built with ☕ by <strong>Riya Singh</strong><br>
  <a href="https://www.linkedin.com/in/riya-singh30">LinkedIn</a> · 
  <a href="https://github.com/riya-singh10">GitHub</a> · 
  <a href="mailto:singhriya1003@gmail.com">Email</a>
</p>
