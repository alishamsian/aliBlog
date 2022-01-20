import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/homepage/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
