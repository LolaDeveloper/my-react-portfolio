import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages";
import MyWork from "./Pages/MyWork";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/MyWork" element={<MyWork />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}
