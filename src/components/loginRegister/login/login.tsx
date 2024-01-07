import "./login.scss";
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch } from "../../../state/hooks";
import { useRef, useState } from "react";
import { useLogin } from "../../../hooks/useLogin";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../../../state/reducers/authSlice";
import { motion } from "framer-motion";

function _Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Local state
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  // Reducer
  const reducer = () => {
    setPasswordShown((prev) => !prev);
  };

  // Refs
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <motion.form
      className="Login"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      key={"1"}
      onSubmit={async (e) => {
        e.preventDefault();
        setButtonDisabled(true);

        // This handles everything except redux hooks
        const response = await useLogin(username, password);

        setButtonDisabled(false);

        if (!response.success) {
          return toast.error(response.message);
        }

        // REDUX!
        dispatch(
          login({
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
          })
        );

        navigate("/");
      }}
    >
      <h2>Login</h2>

      <input type="text" placeholder="Username" ref={username} />
      <div className="Login__Password">
        <input
          type={passwordShown ? "text" : "password"}
          placeholder="Password"
          ref={password}
        />
        <FontAwesomeIcon
          className="Login__Password__Icon"
          icon={passwordShown ? faEyeSlash : faEye}
          onClick={() => reducer()}
        />
      </div>

      <p>Forgor password? 💀</p>

      <button disabled={buttonDisabled} type="submit">
        {buttonDisabled ? (
          <>
            <FontAwesomeIcon icon={faCircleNotch} spin /> Loading...
          </>
        ) : (
          "Login"
        )}
      </button>
    </motion.form>
  );
}

export default _Login;
