import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Assets from "./Pages/Assets";
import Analytics from "./Pages/Analytics";
import Bridge from "./Pages/Bridge";
import Delegate from "./Pages/Delegate";
import Gauges from "./Pages/Gauges";
import Lock from "./Pages/Lock";
import Options from "./Pages/Options";
import Pools from "./Pages/Pools";
import Rewards from "./Pages/Rewards";
import Single from "./Pages/Single";
import Voting from "./Pages/Voting";
import Liqudity from "./Pages/Liqudity";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/bridge" element={<Bridge />} />
        <Route path="/delegate" element={<Delegate />} />
        <Route path="/gauges" element={<Gauges />} />
        <Route path="/lock" element={<Lock />} />
        <Route path="/options" element={<Options />} />
        <Route path="/pools" element={<Pools />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/single" element={<Single />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/liquidity" element={<Liqudity />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
