# 📝 Notiva - Keeper App

Notiva is a clean and modern note-taking application built with **React + Vite**.  
It allows users to quickly create, edit, delete, and manage notes with persistent local storage support.

## ✨ Features

- 📝 Create notes with **title** and **details**
- 🎯 Expanding input field:
  - On focus, input expands into:
    - Title field
    - Note details textarea
- ➕ Add notes with animated Material UI button
- ✏️ Edit existing notes
- 🗑️ Delete notes
- 💾 Notes saved in **localStorage**
- 🌙 Light/Dark mode toggle
- 🎨 Clean responsive UI with Material UI components and animations

## 📸 Preview

<img width="100%" alt="Notiva Keeper App" src="./preview.png" />

## 🛠️ Tech Stack

- **React.js**
- **Vite**
- **Material UI**
- **CSS3**
- **LocalStorage API**

## 📂 Project Structure

```bash
src/
│── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── CreateArea.jsx
│   └── Note.jsx
│
│── App.jsx
│── main.jsx
│── index.css
```

## ⚙️ Components

### `Header`
- App logo/title
- Theme toggle button

### `CreateArea`
- Expanding note input
- Title + content fields
- Add note functionality

### `Note`
- Displays saved notes
- Edit note
- Delete note

### `Footer`
- Footer text and copyright

## 🎨 Material UI Used

```jsx
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
```

Used for:
- Floating add button
- Input animations
- Smooth transitions
- UI styling

## 🔑 How It Works

1. Click on input field.
2. Input expands into title + note details.
3. Write your note.
4. Click add button to save.
5. Edit or delete notes anytime.
6. Notes persist using localStorage.

## 📦 Installation

Clone repository:

```bash
git clone https://github.com/your-username/notiva-keeper-app.git
```

Navigate to project:

```bash
cd notiva-keeper-app
```

Install dependencies:

```bash
npm install
```

Run project:

```bash
npm run dev
```

## 🚀 Future Improvements

- Search notes
- Categories/tags
- Drag & drop notes
- Cloud sync

## 👨‍💻 Author

Made with ❤️ by Your Name



resume data by cluad

Notiva Keeper — React Notes Application
React.js | Vite | Material UI | LocalStorage

Built a full-featured notes application with CRUD operations, dynamic expanding inputs, and reusable component-based architecture using React Hooks and Props.
Implemented localStorage persistence, light/dark theme toggle, and state management by lifting state to the App level across modular components.
Designed a responsive interface with Material UI, featuring animated Fab, Zoom transitions, and a clean mobile-friendly layout.