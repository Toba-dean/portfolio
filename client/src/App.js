import { Routes, Route } from "react-router-dom";

import './App.css';
import { Footer, NavBar } from './component';
import { Home, About, Projects, Contact } from "./pages";

function App() {
  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
