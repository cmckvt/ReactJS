import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import AppChallenge2 from "./AppChallenge2";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppChallenge2 />
  </StrictMode>
);
