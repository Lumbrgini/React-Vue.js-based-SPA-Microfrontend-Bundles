import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import App2 from "./App2";

const r1 = document.getElementById("root1");
const r2 = document.getElementById("root2");

if (r1)
  createRoot(r1).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

if (r2)
  createRoot(r2).render(
    <BrowserRouter>
      <App2 />
    </BrowserRouter>
  );

export default App;