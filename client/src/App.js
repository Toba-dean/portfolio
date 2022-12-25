import { Routes, Route } from "react-router-dom";

import './App.css';
import { Footer, NavBar } from './component';
import { Home, About, Projects } from "./pages";

function App() {
  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/project" element={<Projects />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
