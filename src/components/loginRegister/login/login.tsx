import "./login.scss";
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

import { useAppSelector, useAppDispatch } from "../../../state/hooks";
import {
  notShowPassword,
  showPassword,
} from "../../../state/reducers/passwordSlice";
import { useRef, useState } from "react";
import { useLogin } from "../../../hooks/useLogin";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../../../state/reducers/authSlice";

function _Login() {
  let navigate = useNavigate();

  // Redux State
  const passwordShown = useAppSelector((state) => state.password.showPassword);
  const dispatch = useAppDispatch();

  // Local state
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Reducer
  const reducer = () => {
    passwordShown ? dispatch(notShowPassword()) : dispatch(showPassword());
  };

  // Refs
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <form
      className="Login"
      onSubmit={async (e) => {
        e.preventDefault();
        setButtonDisabled(true);

        const { success, message } = await useLogin(username, password);

        setButtonDisabled(false);

        if (!success) {
          return toast.error(message);
        }

        // Now that we know that login request is successful, we should then update the redux store
        dispatch(login());

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
    </form>
  );
}

export default _Login;
