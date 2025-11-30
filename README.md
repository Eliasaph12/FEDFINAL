# FEDF Donation Management System

A comprehensive donation platform connecting donors with recipients during emergencies and regular needs.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation & Development

```bash
# Clone repository
git clone https://github.com/Eliasaph12/FEDFINAL.git
cd FEDFINAL

# Install React dependencies
cd fed
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` for React app

### Static HTML Pages
Open `index.html` in browser for main platform

## 📦 Deployment

### React App (Recommended)

```bash
# Build for production
cd fed
npm run build

# Deploy dist/ folder to:
# - Vercel: vercel --prod
# - Netlify: netlify deploy --prod --dir=dist
# - GitHub Pages: copy dist/ to gh-pages branch
```

### Static Deployment
Upload all HTML files to any web server

## 🏗️ Project Structure

```
├── fed/                 # React application
│   ├── src/
│   │   ├── App.jsx     # Main React component
│   │   └── main.jsx    # Entry point
│   └── dist/           # Built files (after npm run build)
├── *.html              # Static HTML pages
├── dashboard.html      # Main dashboard
└── README.md
```

## 🔧 Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Code linting
```

## 🌐 Live Demo

- **React App**: Deploy `fed/dist/` folder
- **Static Pages**: Access `index.html` directly

## 📱 Features

- Donor registration and management
- Recipient request system  
- Admin dashboard
- Logistics tracking
- Volunteer coordination
- Real-time reporting

## 🔒 Security Notes

- External CDN links present (consider local hosting)
- Add authentication for production use
- Implement input validation

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push and create PR

## 📄 License

MIT License - see LICENSE file