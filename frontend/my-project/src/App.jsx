import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import English from "./pages/English";
import Hindi from "./pages/Hindi";
import Mathematics from "./pages/Mathematics";
import SST from "./pages/SST";
import Science from "./pages/Science";

import FirstFlight from "./pages/FirstFlight";
import Footprints from "./pages/FootPrints";

import Sparsh2 from "./pages/Sparsh2";
import Kshitij2 from "./pages/Kshitij2";

import History from "./pages/History";
import Geography from "./pages/Geography";
import Civics from "./pages/Civics";
import Economics from "./pages/Economics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>

        {/* Main Subjects */}
        <Route path="english" element={<English />} />
        <Route path="hindi" element={<Hindi />} />
        <Route path="maths" element={<Mathematics />} />
        <Route path="sst" element={<SST />} />
        <Route path="science" element={<Science />} />

        {/* English Subsections */}
        <Route path="english/firstflight" element={<FirstFlight />} />
        <Route path="english/footprints" element={<Footprints />} />

        {/* Hindi Subsections */}
        <Route path="hindi/sparsh2" element={<Sparsh2 />} />
        <Route path="hindi/kshitij2" element={<Kshitij2 />} />

        {/* SST Subsections */}
        <Route path="sst/history" element={<History />} />
        <Route path="sst/geography" element={<Geography />} />
        <Route path="sst/civics" element={<Civics />} />
        <Route path="sst/economics" element={<Economics />} />

      </Route>
    </Routes>
  );
}

export default App;