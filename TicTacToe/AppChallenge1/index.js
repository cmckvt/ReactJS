import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import AppChallenge1 from "./AppChallenge1";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppChallenge1 />
  </StrictMode>
);
