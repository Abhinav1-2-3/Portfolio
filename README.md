# Abhinav – Personal Portfolio Website

An expressive, modern, and responsive personal developer portfolio website designed for **Abhinav**, Computer Science & Engineering student.

Inspired by a high-contrast editorial aesthetic featuring bold red (`#A9141C`), pitch black (`#111111`), crisp white (`#FFFFFF`), and warm off-white (`#F5F0E9`), large condensed typography, and a modern software engineering identity.

---

## 🚀 Features

- **Iconic Hero Section**: Large contrasting typography ("I am ABHINAV"), "Developer in Progress.", dual CTA buttons ("Explore My Work" & "Contact Me"), and stylized persona artwork with an interactive mode switcher between anime developer persona and digital HUD canvas.
- **Metrics Bar**: Minimalist footer highlights divider ("B.Tech CSE | Problem Solver | Continuous Learner | Modern Tech") mirroring the reference inspiration.
- **Fixed & Responsive Navigation**: Smooth-scrolling active spy navigation for Home, About, Skills, Projects, and Contact, plus mobile drawer menu.
- **About Section**: Highlighting engineering foundations, artificial intelligence exploration, hands-on building, and adaptive learning mindset.
- **Dynamic Skills Grid**: Categorized filter tabs (Languages, Database & Backend, Web Technologies, AI & Developer Tools, Core Competencies) with visual indicators.
- **Featured Projects Showcase**:
  1. **GUN**: AI-Powered Training & Productivity Assistant.
  2. **Algorithmic Workbench**: Java & SQL Data Structure Profiler and Benchmark Engine.
  3. **Campus Nexus**: Modern Student Resource & Peer Collaboration Portal.
  Includes interactive **Project Specs Modal** with architecture details, key engineering highlights, and live/repo links.
- **Validated Contact System**: Real-time form validation (name, email, subject, message), transparent static delivery options (open in mail client / copy composed draft), and easy one-line integration for Formspree/EmailJS.
- **Centralized Data File**: All personal information, social handles, skills, and projects live in `src/data/portfolioData.js` for instant updates.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 5
- **Styling**: Modern Modular CSS with CSS Variables & Responsive Media Queries
- **Icons**: Lucide React
- **Typography**: Google Fonts (*Bebas Neue*, *Syne*, *Plus Jakarta Sans*, *JetBrains Mono*)

---

## 📦 Getting Started

### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
The optimized production bundle is generated in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Your Portfolio

All your data is organized cleanly in a single configuration file:
👉 **`src/data/portfolioData.js`**

### Update Social Links & Email
```javascript
export const personalData = {
  name: "ABHINAV",
  socialLinks: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    twitter: "https://x.com/your-handle",
    email: "your-real-email@domain.com"
  }
};
```

### Add a New Skill
Simply append to `skillsData` in `src/data/portfolioData.js`:
```javascript
{
  name: "Python",
  category: "Languages",
  level: "Intermediate",
  percentage: 85,
  icon: "Code2",
  description: "Scripting, automation, and backend development."
}
```

### Add or Edit Projects
Add an object to `projectsData` in `src/data/portfolioData.js`:
```javascript
{
  id: "my-new-project",
  title: "PROJECT NAME",
  subtitle: "Short Subtitle",
  tagline: "One line value proposition",
  badge: "Web App",
  description: "Detailed description of what you engineered...",
  technologies: ["React", "Node.js", "SQL"],
  highlights: ["Feature 1", "Feature 2"],
  githubUrl: "https://github.com/your-username/repo",
  liveDemoUrl: "https://your-demo.com"
}
```

---

## 🌐 Deploying to the Web

### Deploy on Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import your repo.
3. Keep default settings (`Build Command: npm run build`, `Output Directory: dist`).
4. Click **Deploy**.

### Deploy on Netlify
1. Run `npm run build`.
2. Drag and drop the `dist` folder into Netlify Drop, or link your GitHub repository.
