import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa o componente principal
import "./index.css"; // Estilos globais (opcional)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />); // Renderiza o componente App

export default App;
