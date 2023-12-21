import { useEffect, useState } from "react";
import "./loginRegister.scss";

import { useSearchParams } from "react-router-dom";

import _Login from "./login/login";
import _Register from "./register/register";

function LoginRegister() {
  const [searchParams, setSearchParams] = useSearchParams({ mode: "" });
  const [mode, setMode] = useState<string>(searchParams.get("mode") ?? "");

  useEffect(() => {
    // If the mode is not equal to any of these, then we just default to login
    if (mode !== "login" && mode !== "register") {
      setSearchParams(
        (prev) => {
          prev.set("mode", "login");
          return prev;
        },
        { replace: true }
      );
    }
  }, []);

  useEffect(() => {
    setSearchParams(
      (prev) => {
        prev.set("mode", mode);
        return prev;
      },
      { replace: true }
    );
  }, [mode]);

  return (
    <div className="LoginRegister">
      <button
        onClick={() => {
          setMode((prev) => {
            return prev === "login" ? "register" : "login";
          });
        }}
      >
        {mode === "login" ? "Register" : "Login"}
      </button>
      <div className="LoginRegister__Form">
        {mode === "login" ? <_Login /> : <_Register />}
      </div>
      <div className="LoginRegister__Picture"></div>
    </div>
  );
}

export default LoginRegister;
