# Senior Engineer Profile Roadmap

An interactive senior engineer profile web app inspired by roadmap.sh, showcasing technical expertise, leadership experience, and career progression through an engaging visual roadmap.

## 🚀 Features

- **Interactive Roadmap**: Visual representation of skills and career progression
- **Smart Tooltips**: Detailed information with senior-level accomplishments
- **Responsive Design**: Works beautifully on desktop and mobile
- **Modern Tech Stack**: React, Vite, Tailwind CSS, React Flow, Framer Motion
- **Professional UI**: Clean, modern interface inspired by roadmap.sh

## 🛠 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Visualization**: React Flow
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: AWS Amplify

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd senior-engineer-profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # App header with navigation
│   ├── Roadmap.jsx         # Main roadmap container
│   ├── SkillNode.jsx       # Individual skill nodes
│   └── CategoryNode.jsx    # Category grouping nodes
├── data/
│   └── skillsData.js       # Skills data and connections
├── App.jsx                 # Main app component
└── main.jsx               # App entry point
```

## 🎨 Customization

### Adding New Skills
Edit `src/data/skillsData.js` to add new skills:

```javascript
{
  id: 'new-skill',
  type: 'skill',
  data: { 
    label: 'New Skill',
    accomplishments: [
      "Achievement 1",
      "Achievement 2"
    ],
    technologies: ["Tech1", "Tech2"],
    metrics: ["Metric 1", "Metric 2"]
  },
  position: { x: 100, y: 100 }
}
```

### Styling
- Tailwind classes in component files
- Custom styles in `src/index.css`
- Responsive breakpoints configured in `tailwind.config.js`

## 🚀 Deployment

### AWS Amplify (Recommended)

1. **Push to GitHub**
2. **Connect to Amplify**:
   - Go to AWS Amplify Console
   - Choose "Host web app"
   - Connect your GitHub repository
   - Amplify will automatically detect the build settings

3. **Automatic Deployment**: Every push to main branch triggers deployment

### Manual Build
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📱 Responsive Design

- Mobile-first approach
- Touch-friendly interactions
- Optimized tooltip positioning
- Smooth animations across devices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Assefa Tesfay**
- Senior Software Engineer
- Full-Stack Developer & Technical Leader

---

Built with ❤️ using React and modern web technologies.
