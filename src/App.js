import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Panel1 from "./pages/panel1"; // Import Panel1
import Panel15 from "./pages/panel15";
import Panel2 from "./pages/panel2";
import Panel25 from "./pages/panel25";
import Panel3 from "./pages/panel3";
import Panel4 from "./pages/panel4";
import Panel5 from "./pages/panel5";
import Panel6 from "./pages/panel6";
import Panel7 from "./pages/panel7";


function App() {
  return (
      <Routes>
        {/* Define the route for Panel1 */}
        <Route path="/panel1" element={<Panel1 />} />
        <Route path="/panel2" element={<Panel2 />} />
        <Route path="/panel3" element={<Panel3 />} />
        <Route path="/panel15" element={<Panel15 />} />
        <Route path="/panel25" element={<Panel25 />} />
        <Route path="/panel4" element={<Panel4 />} />
        <Route path="/panel5" element={<Panel5 />} />
        <Route path="/panel6" element={<Panel6 />} />
        <Route path="/panel7" element={<Panel7 />} />
      </Routes>
  );
}

export default App;
