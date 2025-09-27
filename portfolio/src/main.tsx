import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PresentacionSeccion from "./Seccion/PresentacionSeccion";
import ProyectosSeccion from "./Seccion/ProyectosSeccion";
import ContactoSeccion from "./Seccion/ContactoSeccion";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PresentacionSeccion />
    <ProyectosSeccion />
    <ContactoSeccion />
  </StrictMode>
);
