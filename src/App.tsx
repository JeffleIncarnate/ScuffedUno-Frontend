import "./index.scss";

import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { initialReducer } from "./state/initialReducer";
import { useAppDispatch } from "./state/hooks";
import { login } from "./state/reducers/authSlice";
import { toast } from "react-toastify";

// Components
import HomePage from "./pages/home";
import SetupPage from "./pages/setup";
import RoomPage from "./pages/room";
import Navbar from "./components/navbar/navbar";

function App() {
  // This is run the first time the page loads and if the use has a refresh token
  const dispatch = useAppDispatch();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      (async () => {
        let res = await initialReducer();

        if (!res.success) {
          return;
        }

        dispatch(
          login({
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          })
        );

        toast.success("Successful auto login");
      })();
    }
  }, []);

  return (
    <>
      <Navbar />
      <ToastContainer
        pauseOnHover={false}
        position="top-right"
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/room" element={<RoomPage />} />
      </Routes>
    </>
  );
}

export default App;
