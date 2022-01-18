import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/topbar/TopBar";
import HomePage from "./pages/homePage/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
