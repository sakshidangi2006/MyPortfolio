# 🌐 MyPortfolio

Sakshi Dangi's personal portfolio — a single-page site built with vanilla HTML, CSS, and JavaScript, framed as a running **build log** of shipped and in-progress projects rather than a static showcase.

## 🔗 Live Demo

🌐 [View Live Website](https://sakshidangi2006.github.io/MyPortfolio/)

## ✨ Features

- **Build-log structure** — projects are presented as dated entries (shipped / in progress / building) instead of a flat grid, so visitors see the order things were actually built in
- **Signal-line motif** — an animated SVG line in the hero and a small custom data visual per project (rising bars, a mood wave, sorting bars, a dotted "in training" line) that matches what each project does
- **Reading-progress bar** — a thin line at the top fills in as you scroll, echoing the signal motif
- **Cursor-reactive hero line** — the hero signal line responds subtly to mouse movement on devices with a pointer
- **Scroll reveals** — build-log entries and their visuals animate in via `IntersectionObserver` as they enter the viewport
- **Side index nav** — a fixed vertical section index on desktop that collapses to a horizontal bar on mobile, with the active section highlighted as you scroll
- **Responsive design** — adapts from mobile through desktop
- **Accessible by default** — visible keyboard focus states, a skip-to-content link, and `prefers-reduced-motion` respected throughout

## 🛠️ Tech Stack

| Technology            | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| **HTML5**              | Structure and semantic markup              |
| **CSS3**               | Custom design system, animation, layout    |
| **JavaScript (ES6+)**  | Scroll reveals, nav state, interactivity   |

> No frameworks. No build step. No dependencies beyond Google Fonts. Pure web fundamentals.

## 📁 Project Structure

```
MyPortfolio/
├── index.html        # Page structure and content
├── style.css          # Design system (tokens, layout, animation)
├── script.js          # Scroll reveals, nav highlighting, progress bar
├── Screenshot/         # Preview images of the site
└── README.md          # Project documentation
```

## 🚀 Getting Started

### View Live

```
https://sakshidangi2006.github.io/MyPortfolio/
```

### Run Locally

1. **Clone the repository**
   ```
   git clone https://github.com/sakshidangi2006/MyPortfolio.git
   ```
2. **Navigate into the project folder**
   ```
   cd MyPortfolio
   ```
3. **Open in your browser**
   ```
   open index.html
   # or on Windows
   start index.html
   ```

No build tools or installations required — it runs directly in the browser.

## 🎨 Customization

| What to change              | Where to find it                                  |
| ----------------------------- | --------------------------------------------------- |
| Name, tagline, bio            | `index.html` — `.hero` and `#about`                 |
| Colors, fonts, spacing        | `style.css` — `:root` token block at the top        |
| Build-log entries             | `index.html` — `.entry` blocks inside `#log`        |
| Project visuals (the sparks)  | `index.html` — `.spark` SVGs inside each `.entry`    |
| Roadmap / goals               | `index.html` — `.checklist` inside `#roadmap`        |
| Social links, email           | `index.html` — `.hero__links` and `#contact`         |
| Scroll/hover behavior         | `script.js`                                        |

## 📬 Contact

**Sakshi Dangi**
- 💼 GitHub: [@sakshidangi2006](https://github.com/sakshidangi2006)
- 🔗 LinkedIn: [sakshi-dangi](https://www.linkedin.com/in/sakshi-dangi-633b2635b/)
- ✉️ Email: [sakshidangi2006@gmail.com](mailto:sakshidangi2006@gmail.com)

## 📄 License

This project is open source and available under the MIT License.

---

Made with ❤️ by Sakshi Dangi
