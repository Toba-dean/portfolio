import { Routes, Route } from "react-router-dom";

import './App.css';
import { Footer, NavBar } from './component';
import { Home } from "./pages";

function App() {
  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
