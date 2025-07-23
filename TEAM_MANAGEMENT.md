# Team Management Guide 👥

This guide explains how to easily manage team members for the Sci-Fi Innovation Club website.

## 📁 File Structure

```
src/
├── components/
│   └── TeamCard.jsx       # Reusable team member card component
├── data/
│   └── team.json         # Team member data (EDIT THIS FILE)
└── app/
    └── team/
        └── page.js       # Team page (uses TeamCard component)
```

## ✏️ How to Add/Edit Team Members

### 1. Edit the JSON File
Open `src/data/team.json` and modify the `teamMembers` array.

### 2. Team Member Object Structure
```json
{
  "id": 1,                           // Unique ID number
  "name": "Your Name",               // Full name
  "role": "Your Role",               // Job title/position
  "description": "Brief bio...",     // Short description (2-3 lines)
  "image": "https://...",            // Profile photo URL
  "linkedin": "your-linkedin-id",    // LinkedIn username (not full URL)
  "github": "your-github-id",        // GitHub username (not full URL)
  "specialties": [                   // Array of expertise areas
    "Skill 1",
    "Skill 2",
    "Skill 3"
  ]
}
```

## 🆕 Adding a New Team Member

1. Open `src/data/team.json`
2. Add a new object to the `teamMembers` array:

```json
{
  "teamMembers": [
    // ... existing members ...
    {
      "id": 7,
      "name": "New Member Name",
      "role": "New Member Role",
      "description": "Description of the new member and their contributions.",
      "image": "https://images.unsplash.com/photo-example",
      "linkedin": "new-member-linkedin",
      "github": "newmembergithub",
      "specialties": ["React", "Node.js", "Design"]
    }
  ]
}
```

## 🗑️ Removing a Team Member

Simply delete the entire member object from the `teamMembers` array in `team.json`.

## 🖼️ Profile Images

### Option 1: Use Unsplash (Free)
- Go to [Unsplash](https://unsplash.com)
- Search for professional photos
- Use this URL format: `https://images.unsplash.com/photo-ID?w=400&h=400&fit=crop&crop=face`

### Option 2: Upload Your Own
- Add images to `public/images/team/`
- Use relative path: `/images/team/member-name.jpg`

## 🔗 Social Media Links

### LinkedIn
- Use only the username part: `your-linkedin-id`
- Example: For `https://linkedin.com/in/john-doe`, use `john-doe`

### GitHub
- Use only the username: `your-github-username`
- Example: For `https://github.com/johndoe`, use `johndoe`

## 🎨 Specialties Tags

Keep specialty tags short and relevant:
- ✅ Good: "Full Stack Development", "AI/ML", "UI/UX Design"
- ❌ Too long: "Full Stack Web Development with React and Node.js"

## 🚀 After Making Changes

1. Save the `team.json` file
2. The website will automatically update
3. No need to restart the development server

## 📝 Example: Complete Team Member Entry

```json
{
  "id": 1,
  "name": "Alex Johnson",
  "role": "Lead Developer",
  "description": "Passionate full-stack developer with 5 years of experience building scalable web applications and leading development teams.",
  "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  "linkedin": "alex-johnson-dev",
  "github": "alexjohnson",
  "specialties": ["React", "Node.js", "Team Leadership", "System Design"]
}
```

## 🔧 Troubleshooting

### Images Not Loading?
- Check if the URL is accessible
- Ensure the image URL ends with proper extension (.jpg, .png, etc.)
- Try using a different image source

### Card Not Displaying?
- Check JSON syntax (commas, brackets, quotes)
- Ensure each member has a unique `id`
- Verify all required fields are present

### Social Links Not Working?
- Use only the username part, not the full URL
- Check for typos in usernames

---

That's it! The team page will automatically update when you modify the JSON file. No coding required! 🎉
