// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.tsx";
import "./firebase.ts";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/pet-react-pizza">
    <App />
  </BrowserRouter>
);
