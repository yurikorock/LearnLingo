# LEARN LINGO

**LEARN LINGO** is a modern web application for finding language tutors online.  
You can filter tutors by language, student level, and lesson price, as well as save your favorite tutors for quick access.

Built with **React**, **Firebase**, and **Redux Toolkit**, with full authentication support.

---

## 🚀 Features

- 🏠 **Home** — a landing page with service information.
- 👩‍🏫 **Teachers** — a catalog of available tutors with descriptions and ratings.
- 🎯 **Advanced Filtering** — filter tutors by:
  - Teaching language
  - Student level
  - Price per hour
- ⭐ **Favorites** — log in and save your favorite tutors.
- ⚡ **Performance** — optimized with lazy loading and memoization.
- 💾 **Persistent State** — favorites are stored in `localStorage`.

---

## 🧠 Tech Stack

### ⚙️ Core
- React 19.0.0 — UI library
- React Router DOM 7.9.3 — routing
- Redux Toolkit 2.9.0 — state management
- Redux Persist 6.0.0 — persistent state

### 📝 Form Management
- Formik 2.4.6 — form handling
- React Hook Form + Yup — form validation

### 🎨 UI Components
- React Select 5.10.2 — custom dropdowns
- React Hot Toast 2.6.0 — notifications
- React Spinners 0.17.0 — loading indicators

---

## 🔗 Backend & API
- **Firebase Realtime Database** — tutor data storage
- **Firebase Authentication** — registration, login, logout, current user management

### 🧰 Firebase Implementation

| Feature     | Description |
|------------|-------------|
| 🔐 Auth       | Register, login, get current user |
| 🧑‍🏫 Database | Collection `teachers` with tutor data |
| 🎯 Filtering  | Filter by language, level, price |
| ❤️ Favorites | Save favorite tutors per user |

---

## 💡 Highlights

- Modular code structure: `components`, `redux`, `pages`, `firebase`
- Each component has its own `module.css` file
- Pagination with **Load more** button for loading additional tutors
- Fully responsive design (mobile → tablet → desktop)
- Optimized for Vercel deployment

---

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yurikorock/learn-lingo.git

# Navigate to the project directory
cd learn-lingo

# Install dependencies
npm install

# Run the app in development mode
npm run dev

🌍 Deployment

The app is deployed on Vercel.

It uses .env variables to connect to Firebase:
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_DATABASE_URL=https://your_project.firebaseio.com
VITE_PROJECT_ID=your_project
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDER_ID=your_id
VITE_APP_ID=your_app_id

🧑‍💻 Author

Yurii Shaplavskyi
Frontend Developer | React | Redux | Firebase

🌐 LinkedIn: www.linkedin.com/in/yurii-shaplavskyi

💻 GitHub: https://github.com/yurikorock