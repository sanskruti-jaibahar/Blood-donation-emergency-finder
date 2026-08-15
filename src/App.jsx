import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Route path="/" element={<Home />} />
        <Route path="/find-blood" element={<FindBlood />} />
        <Route path="/blood-banks" element={<BloodBanks />} />
        <Route path="/become-donor" element={<BecomeDonor />} />
        <Route path="/emergency" element={<Emergency />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;