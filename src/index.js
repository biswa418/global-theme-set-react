import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./ThemeContext";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
