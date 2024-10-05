# Modern Portfolio Website

A dynamic, animated portfolio website built with React, Three.js, and Framer Motion. Features a 3D animated background, smooth transitions, and a responsive design.

![Portfolio Preview](/api/placeholder/800/400)

## 🌟 Features

- **Interactive 3D Background**
  - Dynamic particle system using Three.js
  - Responsive to mouse movement
  - Automatic rotation for continuous engagement

- **Smooth Animations**
  - Page section transitions using Framer Motion
  - Staggered content reveal animations
  - Interactive hover effects
  - Mobile-friendly animations

- **Responsive Design**
  - Mobile-first approach
  - Animated mobile navigation menu
  - Fluid typography and spacing
  - Optimized for all screen sizes

- **Modern UI Components**
  - Custom animated cards for experience and projects
  - Interactive skill tags
  - Smooth scrolling navigation
  - Contact form with animations

## 🚀 Tech Stack

- **Frontend Framework**: React
- **3D Graphics**: Three.js
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=Your Portfolio
VITE_CONTACT_EMAIL=your.email@example.com
```

### Customization

1. **Personal Information**
   - Edit `src/data/profile.js` to update your personal information
   - Modify contact details in `src/components/Contact.jsx`

2. **Content**
   - Update experience cards in `src/data/experience.js`
   - Modify project cards in `src/data/projects.js`
   - Edit skills in `src/data/skills.js`

3. **Styling**
   - Customize colors in `tailwind.config.js`
   - Modify animations in `src/styles/animations.js`
   - Update background settings in `src/components/Background.jsx`

## 📱 Responsive Design

The portfolio is optimized for the following breakpoints:

- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Desktop: 769px and above

## 🎨 Animation Settings

Key animation configurations:

```javascript
// Animation variants for sections
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Stagger container for list items
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

## 🛠️ Development

### Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Background.jsx
│   │   ├── Navbar.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   ├── experience.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── styles/
│   │   └── animations.js
│   └── App.jsx
├── public/
├── .env
└── package.json
```

### Adding New Features

1. Create new component in `src/components`
2. Add data file in `src/data` if needed
3. Import and add animations from `src/styles/animations.js`
4. Update routes in `App.jsx` if necessary

## 📈 Performance Optimization

- Lazy loading for images and components
- Optimized Three.js rendering
- Minimal bundle size through code splitting
- Efficient animation triggers using `whileInView`

## 🚨 Common Issues

1. **Three.js Background Performance**
   - Reduce particle count for better mobile performance
   - Adjust animation complexity based on device capabilities

2. **Animation Performance**
   - Use `viewport={{ once: true }}` to prevent re-rendering
   - Implement `useCallback` for event handlers
   - Optimize animation complexity for mobile devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Jalish Chauhan  
Email: chauhanjalish005@gmail.com  
LinkedIn: [Jalish Chauhan](https://www.linkedin.com/in/jalish-chauhan/)  
GitHub: [jalishchauhan07](https://github.com/jalishchauhan07)

---

Made with ❤️ by Jalish Chauhan
