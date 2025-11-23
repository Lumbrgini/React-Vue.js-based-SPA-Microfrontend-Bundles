import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import App2 from "./App2";

const r1 = document.getElementById("root1");
const r2 = document.getElementById("root2");
if (r1) createRoot(r1).render(<App />);
if (r2) createRoot(r2).render(<App2 />);

export default App;
