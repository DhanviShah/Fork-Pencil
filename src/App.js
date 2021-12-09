import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nutritions from "./components/Nutritions";
import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Create from "./components/Create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nutritions" element={<Nutritions />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        {/* <Nutritions /> */}
        {/* <Recipes /> */}
      </div>
    </Router>
  );
}

export default App;
