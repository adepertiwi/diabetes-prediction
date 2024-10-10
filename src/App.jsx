import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";

function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} /> 
        </Routes>
    </Router>
    </>
  );
}

export default App;
