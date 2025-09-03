# 🌍 WorldWise

WorldWise is a travel tracking web app where you can keep a record of the cities you’ve visited around the world.  
It provides an interactive map, date picker, and notes feature — all tied together with a smooth React experience.

👉 **Live Demo:** [WorldWise on Netlify](https://trackwithworldwise.netlify.app/)

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
- 🔑 **User Authentication (Supabase)** –
  - Signup with email & password (with email confirmation).
  - Secure login & logout flow.
  - Persistent user sessions across refresh.
  - Demo account available for quick app exploration.
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
- **Backend & Auth:** [Supabase](https://supabase.com/) (authentication, session handling)
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

###2️⃣ Install dependencies

```bash
npm install
```

###3️⃣ Setup Supabase
-Create a free project at Supabase
-Copy your Project URL and Anon Public Key.
-Create a .env file in the root directory and add:

```bash
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

###4️⃣ Run locally

```bash
npm run dev
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

- 🗃️ replace JSON file with supabase tables
- 📱 Improve mobile responsiveness
- 📊 Add travel statistics (total trips, countries visited, etc.)

## 👨‍💻 Author

Developed with ❤️ by [Hussain Kagalwala](https://www.linkedin.com/in/hussain-kagalwala-467a77328/)

```

```
