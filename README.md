# 🎓 PrepVerse

**Find your career path before you get lost.**

PrepVerse is a career guidance platform for two kinds of students — those heading into **Class 11** (choosing a stream) and those already **in college** (choosing what comes after). It replaces guesswork with a short assessment, matched career paths, and a clear step-by-step roadmap + planner.

🔗 **Live App:** [prepverse-phi.vercel.app](https://prepverse-phi.vercel.app/)
🔗 **Backend API:** [prepverse-backend-o30u.onrender.com](https://prepverse-backend-o30u.onrender.com/api/health)

> ⚠️ Backend is hosted on Render's free tier and may take 30–50 seconds to "wake up" on the first request after inactivity.

---

## 🧩 The Problem

Most students pick a stream or career path based on peer pressure, family expectation, or limited information — not on their actual interests, aptitude, or what the day-to-day work/life balance really looks like. There's no single place that combines *self-discovery* with *practical, actionable next steps*.

## 💡 Our Solution

- **Class 11 students** take a short, interest-based assessment → get matched career paths with salary, work-life balance, and growth data → get a roadmap and personal planner for each.
- **College students** select their course/stream → instantly see career paths relevant to them, with the same salary/WLB/growth breakdown → get the same roadmap and planner tools.

Every career comes with a **visual roadmap** (stream → entrance exam → degree → internship → first job) and a **personal planner board** (To Do / In Progress / Done) that persists across visits.

---

## ✨ Features

- 🔐 Auth flow with role-based onboarding (Class 11 vs College)
- 📝 5-question interest & aptitude assessment with client-side scoring
- 🎯 Career matching engine (tag-based scoring against 22 career profiles)
- 🏫 College dashboard with course-based career filtering
- 🗺️ Visual roadmap timeline for every career
- ✅ Kanban-style planner board (persisted via localStorage)
- 📊 Salary progression chart (Entry / Mid / Senior)
- 🔖 Bookmark careers + Profile page
- 🌗 Full dark/light mode
- 📱 Fully responsive
- ⚡ Smooth micro-interactions (Framer Motion)

---

## 🛠️ Tech Stack

**Frontend:** React (Vite), React Router, Tailwind CSS, Zustand, Framer Motion, Recharts, Lucide Icons, React Hot Toast
**Backend:** Node.js, Express (REST API serving assessment questions + career data)
**Deployment:** Vercel (frontend) · Render (backend)

---

## 🏗️ Architecture

```
PrepVerse/
├── frontend/           React + Vite app
│   └── src/
│       ├── components/ ui / layout / auth / assessment / career / dashboard / common
│       ├── pages/       Landing, Login, Signup, Onboarding, Assessment,
│       │                Results, Dashboard, CareerDetail, Profile
│       ├── store/       Zustand: auth store, theme store
│       ├── services/    API layer (apiClient + domain services)
│       ├── hooks/ utils/ constants/
│       └── routes/       Centralized route definitions + protected routes
│
└── backend/             Node/Express API
    ├── data/            questions.json, careers.json, streams.json
    └── routes/          /api/assessment, /api/careers
```

State is split between **Zustand** (auth, theme — persisted to localStorage) and local component state (forms, wizards). The frontend never talks to the backend directly from components — everything goes through a typed `services/` layer for a clean separation and easy backend swaps.

---

## 🚀 Running Locally

**Backend:**
```bash
cd backend
npm install
npm run dev        # runs on http://localhost:5000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev         # runs on http://localhost:5173
```

Create a `.env` in `frontend/` with:
```
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🔮 What's Next

- More granular assessment (branching questions based on prior answers)
- College-specific entrance exam countdown + prep resources
- Peer/mentor connect for each career path
- Admin panel to add/update careers without redeploying

---

*PrepVerse — because the right path shouldn't be a guess.*
