import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router} from "react-router";
import { AuthProvider } from "./components/authContext/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>  
    <StrictMode>
      <Router>
        <App /> 
      </Router>
    </StrictMode>
  </AuthProvider>
);
