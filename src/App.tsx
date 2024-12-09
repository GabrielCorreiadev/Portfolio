// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

export default App;
