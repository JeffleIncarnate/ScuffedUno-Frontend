import "./index.scss";

import { Routes, Route } from "react-router-dom";

// Routes
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
