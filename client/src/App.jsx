import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import Calender from "./pages/Calender";
import Toolkit from "./pages/Toolkit";
import Settings from "./pages/Settings";
import EntryView from "./pages/EntryView";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Home />} />
        <Route path="/journal" element={<EntryView />} />
        <Route path="/insights" element={<Insights />} />

        <Route path="/calender" element={<Calender />} />

        <Route path="/toolkit" element={<Toolkit />} />

        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
