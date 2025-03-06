// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// // import './index.css'
// // import "./responsive.css";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./components/index.css";
import { registerSW } from "./serviceWorkerRegistration"; // 🔥 Importa el Service Worker

registerSW(); // ✅ Activa el Service Worker

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
