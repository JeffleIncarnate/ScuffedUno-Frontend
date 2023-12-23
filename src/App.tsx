import "./index.scss";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Routes
import HomePage from "./pages/home";
import SetupPage from "./pages/setup";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" theme="colored" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/setup" element={<SetupPage />} />
      </Routes>
    </>
  );
}

export default App;
