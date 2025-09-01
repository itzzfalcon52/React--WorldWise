# 🌍 WorldWise

WorldWise is a travel tracking web app where you can keep a record of the cities you’ve visited around the world.  
It provides an interactive map, date picker, and notes feature — all tied together with a smooth React experience.

## ![WorldWise Demo](https://trackwithworldwise.netlify.app/)

---

## 📌 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🔧 Scripts](#-scripts)
- [🌐 Deployment](#-deployment)
- [📌 Future Improvements](#-future-improvements)
- [👨‍💻 Author](#-author)

---

## ✨ Features

- 🏠 **Landing Page** – Welcoming page introducing the app.
- 🔑 **Fake Login Authorization** – Simple authentication flow for demo purposes.
- 🗺️ **Interactive Map** – Built with [React Leaflet](https://react-leaflet.js.org/).
  - Click on the map to select a city.
  - Add a travel date and personal notes.
- 📌 **Travel Log** – Stores all cities you’ve visited.
- 🧭 **Navigation** – Powered by **React Router** for smooth multi-page navigation.
- ⚡ **State Management** – Centralized with **React Context API**.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React](https://react.dev/) (with [Vite](https://vitejs.dev/) bundler)
- **Routing:** [React Router](https://reactrouter.com/)
- **State Management:** Context API
- **Map Library:** [React Leaflet](https://react-leaflet.js.org/)
- **Deployment:** [Netlify](https://www.netlify.com/)

---

## 📂 Project Structure

worldwise-app/
├── public/ # Static assets
├── src/
│ ├── components/ # UI components (Map, CityList, etc.)
│ ├── contexts/ # Context API for cities & auth
│ ├── pages/ # Route pages (Landing, App, Login, etc.)
│ ├── App.jsx # Main App component
│ └── main.jsx # Entry point
├── data/ # JSON-server mock data (cities.json)
├── package.json
└── vite.config.js

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/worldwise-app.git
cd worldwise-app
```

## 🔧 Scripts

-npm run dev – Start Vite dev server

-npm run build – Build for production

-npm run preview – Preview production build locally

-npm run server – Run JSON server (cities database)

## 🌐 Deployment

The app is deployed on **Netlify**.

👉 **Live Demo:** [WorldWise on Netlify](https://trackwithworldwise.netlify.app/)

## 📌 Future Improvements

- 🔒 Implement real authentication system
- 🗃️ Connect to a real backend or cloud database
- 📱 Improve mobile responsiveness
- 📊 Add travel statistics (total trips, countries visited, etc.)

## 👨‍💻 Author

Developed with ❤️ by [Hussain Kagalwala](https://www.linkedin.com/in/hussain-kagalwala-467a77328/)
