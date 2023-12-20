import "./index.scss";

import { Routes, Route } from "react-router-dom";

// Routes
import HomePage from "./pages/home";
import SetupPage from "./pages/setup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/setup" element={<SetupPage />} />
      </Routes>
    </>
  );
}

export default App;
