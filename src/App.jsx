import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landingpage from "./pages/Landingpage";
import Homepage from "./pages/Homepage";

function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/home" element={<Homepage />} /> 
        </Routes>
    </Router>
    </>
  );
}

export default App;
