# Tolulope Adeyomide - Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Designed specifically for UK job applications and international opportunities.

## ✨ Features

- **Elegant Design**: Clean, professional layout inspired by modern CV designs
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Dark/Light Theme**: Automatic theme switching with user preference storage
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Professional Focus**: Tailored content for UK job market applications
- **Performance Optimized**: Built with Next.js 15 and modern web technologies

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Variables
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Font**: Inter & Playfair Display from Google Fonts

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type check
npm run type-check

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and theme variables
│   ├── layout.tsx       # Root layout with theme provider
│   └── page.tsx         # Main portfolio page
└── lib/
    ├── contexts/
    │   └── theme-context.tsx  # Theme management
    └── utils.ts         # Utility functions
```

## 🎨 Design Features

- **Professional Typography**: Serif headings with sans-serif body text
- **Elegant Color Scheme**: Carefully chosen colors for both light and dark themes
- **Smooth Transitions**: Consistent animation patterns throughout
- **Card-based Layout**: Clean sections with subtle shadows and borders
- **Mobile-first Approach**: Responsive design starting from mobile

## 🌟 Key Sections

1. **Hero Section**: Professional introduction with call-to-action
2. **Experience**: Detailed work history with achievements and technologies
3. **Projects**: Featured work with live demos and source code links
4. **Skills**: Technical proficiency with visual progress bars
5. **Contact**: Professional contact information and availability

## 🚀 Deployment

This project is configured for static export and can be deployed to:

- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

```bash
npm run build
```

## 📝 Customization

1. Update personal information in `src/app/page.tsx`
2. Replace project images in `public/img/`
3. Modify theme colors in `src/app/globals.css`
4. Adjust animations in component files

## 📄 License

This project is for personal use. Feel free to use as inspiration for your own portfolio.

---

Built with ❤️ for professional opportunities in the UK and beyond.
