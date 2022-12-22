import { Routes, Route } from "react-router-dom";

import './App.css';
import { Footer, NavBar } from './component';
import { Home, About } from "./pages";

function App() {
  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
