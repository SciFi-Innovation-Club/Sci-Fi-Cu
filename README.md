<div align="center">

# Sci-Fi Innovation Club Website

### Official website for the Sci-Fi Innovation Club at Chandigarh University

[![Live Website](https://img.shields.io/badge/Website-scifi--innovation.in-blue?style=for-the-badge&logo=vercel)](https://scifi-innovation.in/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[🌐 Live Demo](https://scifi-innovation.in/) • [📦 Repository](https://github.com/SciFi-Innovation-Club/Sci-Fi-Cu) • [🐛 Report Bug](https://github.com/SciFi-Innovation-Club/Sci-Fi-Cu/issues) • [✨ Request Feature](https://github.com/SciFi-Innovation-Club/Sci-Fi-Cu/issues)

</div>

---

## 📖 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Data Management](#data-management)
- [Components](#components)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Project Admins](#project-admins)
- [License](#license)

---

## 🎯 About

The **Sci-Fi Innovation Club** is a vibrant community of students, researchers, and technology enthusiasts at Chandigarh University dedicated to exploring cutting-edge technologies. This website serves as the digital hub for our club, showcasing:

- 🎓 Our mission and vision
- 📅 Upcoming and past events
- 👥 Team members and leadership
- 📝 Event reports and documentation
- 🤝 Membership opportunities

Built with modern web technologies, the site delivers a seamless, responsive experience with dark/light mode support and engaging animations.

---

## ✨ Features

### 🎨 **Design & User Experience**
- **🌓 Dark/Light Mode**: Automatic theme detection with manual toggle
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **🎭 Smooth Animations**: Powered by Framer Motion and Motion library
- **⚡ Fast Performance**: Next.js 15 with Turbopack for blazing-fast builds
- **♿ Accessible**: Semantic HTML and ARIA labels for better accessibility

### 📄 **Pages**

#### 🏠 **Home Page** (`/home`)
- Compelling hero section with call-to-action
- Club statistics showcase
- Technology domains covered
- Neutral dark aesthetic with grid background

#### 📅 **Events Page** (`/events`)
- Dynamic event cards loaded from JSON
- Status indicators (Upcoming, Ongoing, Completed)
- Category-based organization
- Event tags and location details
- Registration links

#### ℹ️ **About Page** (`/about`)
- Mission and vision statements
- Core values showcase
- Technology domains
- **Journey Timeline**: Dynamically generated from events data (chronological)
- Activities breakdown

#### 👥 **Team Page** (`/team`)
- Team member profiles
- Social media links
- Role descriptions

#### 🎯 **Join Page** (`/join`)
- Membership information
- Benefits overview
- Application process

#### 📞 **Contact Page** (`/contact`)
- Interactive DecryptedText effect (hover to reveal)
- Minimalist design with backdrop blur

### 🛠️ **Technical Features**
- **Server-Side Rendering** with Next.js App Router
- **Client Components** for interactive elements
- **JSON-based** data management
- **Reusable components** architecture
- **Modern CSS** with Tailwind CSS 4

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 15.5.4 | React framework with App Router |
| **React** | 19.1.0 | UI library |
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **Framer Motion** | 12.23.22 | Animation library |
| **Motion** | 12.23.26 | Advanced animations |
| **Lucide React** | 0.544.0 | Icon library |
| **Turbopack** | - | Fast bundler (dev & build) |

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Git**: Version control

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SciFi-Innovation-Club/Sci-Fi-Cu.git
   cd Sci-Fi-Cu
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

---

## 📁 Project Structure

```
Sci-Fi-Cu/
├── public/                      # Static assets
│   ├── LOGO.png                # Club logo (dark mode)
│   ├── LOGO-black.png          # Club logo (light mode)
│   └── *.jpeg                  # Team member photos
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.js            # Root - redirects to /home
│   │   ├── layout.js          # Root layout with Navbar
│   │   ├── globals.css        # Global styles
│   │   │
│   │   ├── home/              # Landing page
│   │   │   └── page.js
│   │   │
│   │   ├── about/             # About page with timeline
│   │   │   └── page.js
│   │   │
│   │   ├── events/            # Events listing
│   │   │   └── page.js
│   │   │
│   │   ├── team/              # Team members
│   │   │   └── page.js
│   │   │
│   │   ├── join/              # Membership page
│   │   │   └── page.js
│   │   │
│   │   └── contact/           # Contact with DecryptedText
│   │       └── page.js
│   │
│   ├── components/            # Reusable React components
│   │   ├── DecryptedText.js  # Hover-to-decrypt text effect
│   │   ├── FaviconHandler.js # Dynamic favicon
│   │   ├── Navbar.js         # Navigation bar
│   │   ├── ThemedBackground.js # Background wrapper
│   │   ├── ThemeProvider.js  # Theme context provider
│   │   └── ThemeToggle.js    # Dark/light mode toggle
│   │
│   └── data/                  # JSON data files
│       ├── events.json        # Events data
│       └── team.json          # Team members data
│
├── tailwind.config.js         # Tailwind configuration
├── next.config.mjs            # Next.js configuration
├── postcss.config.mjs         # PostCSS configuration
├── eslint.config.mjs          # ESLint configuration
├── jsconfig.json              # JavaScript config
└── package.json               # Dependencies & scripts
```

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Root | Redirects to `/home` |
| `/home` | Home | Landing page with hero, stats, and CTA |
| `/about` | About | Mission, values, domains, and event timeline |
| `/events` | Events | Event cards with filters and status badges |
| `/team` | Team | Team member profiles |
| `/join` | Join | Membership information and benefits |
| `/contact` | Contact | Contact dialog with interactive text effect |

## Routes

- `/` redirects to `/home`
- `/home` landing page
- `/events` renders event cards from JSON data
- `/about` includes an “Our Journey” timeline generated from events
- `/team` team listing
- `/join` membership/join page
- `/contact` simple contact page with a dialog + DecryptedText effect

## Data files

### Events

Edit `src/data/events.json`.

Minimum fields used by the UI:

```json
{
  "id": 1,
  "title": "Event Title",
  "description": "Short description for cards",
  "date": "2025-12-25",
  "time": "2:00 PM - 6:00 PM",
  "location": "Venue",
  "status": "upcoming",
  "category": "workshop",
  "tags": ["AI", "ML"]
}
```

Notes:

- `date` is displayed as-is. For multi-day events you can use a comma-separated list (the about-page timeline uses the first date for sorting).
- Optional: add a long `report` field for detailed writeups.

### Team

Edit `src/data/team.json`.

## UI components

- `src/components/ThemedBackground.js`: site background wrapper
- `src/components/Navbar.js`: navigation
- `src/components/ThemeProvider.js` + `src/components/ThemeToggle.js`: theme handling
- `src/components/DecryptedText.js`: hover/view text “decrypt” effect (uses `motion/react`)





## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Update documentation as needed
- Test your changes thoroughly
- Ensure the build succeeds (`npm run build`)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Author

<table>
<tr>
<td align="center">
<a href="https://github.com/sandeepvashishtha">
  <img src="https://avatars.githubusercontent.com/u/64915843?v=4" height="170px" width="170px" alt="Sandeep">
</a><br>
<sub><b>Sandeep Vashishtha</b><br>
<a href="https://github.com/sandeepvashishtha" target="_blank">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="25" height="25" alt="GitHub"/>
</a>
<a href="https://www.linkedin.com/in/sandeepvashishtha/" target="_blank">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="25" height="25" alt="LinkedIn"/>
</a>
</sub>
</td>
</tr>
</table>

---


<div align="center">

Made with ❤️ by the Sci-Fi Innovation Club

**[⬆ back to top](#-sci-fi-innovation-club-website)**

</div>
