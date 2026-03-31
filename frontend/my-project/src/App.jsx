import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import English from "./pages/English"
import Hindi from "./pages/Hindi";
import Maths from "./pages/Mathematics";
import SST from "./pages/SST";
import Science from "./pages/Science";
import ChapterDetails from "./pages/ChapterDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="english" element={<English />} />
        <Route path="hindi" element={<Hindi />} />
        <Route path="maths" element={<Maths />} />
        <Route path="maths/chapter/:id" element={<ChapterDetails />} />
        <Route path="sst" element={<SST />} />
        <Route path="science" element={<Science />} />
        <Route path="science/chapter/:id" element={<ChapterDetails />} />
      </Route>
    </Routes>
  );
}

export default App;