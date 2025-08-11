# CSS Files Guide for Sci-Fi Innovation Club Website

## 📁 File Structure
```
src/
├── app/
│   ├── page.js              → page.css
│   ├── page.css             ✅ CREATED
│   ├── about/
│   │   ├── page.js          → page.css
│   │   └── page.css         ✅ CREATED
│   ├── contact/
│   │   ├── page.js          → page.css
│   │   └── page.css         ✅ CREATED
│   ├── join/
│   │   ├── page.js          → Join.module.css (already exists)
│   │   └── page.css         ❌ Use existing Join.module.css
│   ├── team/
│   │   ├── page.js          → page.css
│   │   └── page.css         ✅ CREATED
│   ├── timeline/
│   │   ├── page.js          → page.css
│   │   └── page.css         ✅ CREATED
│   └── sponsor/
│       ├── page.js          → page.css
│       └── page.css         ✅ CREATED
└── components/
    ├── Navbar.jsx           → Navbar.css
    ├── Navbar.css           ✅ CREATED
    ├── Footer.jsx           → Footer.css
    ├── Footer.css           ✅ CREATED
    ├── Stars.jsx            → Stars.css
    ├── Stars.css            ✅ CREATED
    ├── TeamCard.jsx         → TeamCard.module.css (already exists)
    └── TeamCard.css         ❌ Use existing TeamCard.module.css
```

## 🎯 How to Use CSS Files

### 1. For Pages (page.js files)
```javascript
// Import the CSS file at the top
import './page.css';

export default function MyPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Title</h1>
      <p className="page-text">Content</p>
    </div>
  );
}
```

### 2. For Components (.jsx files)
```javascript
// Import the CSS file at the top
import './ComponentName.css';

export default function MyComponent() {
  return (
    <div className="component-container">
      <h2 className="component-title">Component Title</h2>
    </div>
  );
}
```

## 📋 CSS Files Created

### ✅ Page CSS Files:
1. **`src/app/page.css`** - Home page styles
2. **`src/app/about/page.css`** - About page styles
3. **`src/app/contact/page.css`** - Contact page styles
4. **`src/app/team/page.css`** - Team page styles
5. **`src/app/timeline/page.css`** - Timeline page styles
6. **`src/app/sponsor/page.css`** - Sponsor page styles

### ✅ Component CSS Files:
1. **`src/components/Navbar.css`** - Navigation component styles
2. **`src/components/Footer.css`** - Footer component styles
3. **`src/components/Stars.css`** - Stars animation component styles

### 🔧 Already Using CSS Modules (Keep as is):
- `src/app/join/` - Uses `Join.module.css`
- `src/components/TeamCard.jsx` - Uses `TeamCard.module.css`

## 🎨 CSS Class Naming Convention

Each CSS file uses a descriptive naming pattern:

### Pages:
- `.page-container` - Main container
- `.page-header` - Header section
- `.page-title` - Main title
- `.page-subtitle` - Subtitle text
- `.page-content` - Content area

### Components:
- `.component-container` - Main wrapper
- `.component-title` - Component title
- `.component-content` - Component content

## 🚀 Easy Editing Guide

### To Change Colors:
1. Open the relevant CSS file
2. Look for color values like `#60a5fa` (blue) or `#a855f7` (purple)
3. Replace with your desired color

### To Change Spacing:
1. Look for `margin` and `padding` properties
2. Values like `1rem`, `2rem`, `3rem` control spacing
3. Increase/decrease numbers to adjust spacing

### To Change Text Size:
1. Look for `font-size` properties
2. Values like `1rem`, `1.5rem`, `2rem` control text size
3. Larger numbers = bigger text

### To Change Animations:
1. Look for `transition` and `animation` properties
2. Change duration values (like `0.3s`) to speed up/slow down
3. Remove entire animation lines to disable effects

## 📱 Responsive Design

All CSS files include responsive design:
- **Mobile**: Default styles
- **Tablet**: `@media (min-width: 768px)`
- **Desktop**: `@media (min-width: 1024px)`

## 🔄 Next Steps

1. **Import CSS files** in their corresponding JS files
2. **Replace className** attributes with the new CSS classes
3. **Test each page** to ensure styling works correctly
4. **Share with your collaborator** - they can now easily edit styles!

## 💡 Benefits for Your Collaborator

- ✅ **Separate files** - Easy to find and edit specific styles
- ✅ **Clear naming** - Class names describe what they style
- ✅ **No complex syntax** - Just regular CSS
- ✅ **Responsive built-in** - Works on all devices
- ✅ **Comments included** - Explains what each section does
- ✅ **Color variables** - Easy to find and change colors
