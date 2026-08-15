import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FindBlood from "./pages/FindBlood";
import BloodBanks from "./pages/BloodBanks";
import BecomeDonor from "./pages/BecomeDonor";
import Emergency from "./pages/Emergency";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
  <Route
    path="/"
    element={
      <div className="page-animation">
        <Home />
      </div>
    }
  />

  <Route
    path="/find-blood"
    element={
      <div className="page-animation">
        <FindBlood />
      </div>
    }
  />

  <Route
    path="/blood-banks"
    element={
      <div className="page-animation">
        <BloodBanks />
      </div>
    }
  />

  <Route
    path="/become-donor"
    element={
      <div className="page-animation">
        <BecomeDonor />
      </div>
    }
  />

  <Route
    path="/emergency"
    element={
      <div className="page-animation">
        <Emergency />
      </div>
    }
  />
</Routes>

      
    </BrowserRouter>
  );
}

export default App;