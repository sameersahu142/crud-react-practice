import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage";
import Add from "./components/AddPage";
import Edit from "./components/EditPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
