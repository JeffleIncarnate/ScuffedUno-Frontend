import "./navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../state/hooks";
import { logout } from "../../state/reducers/authSlice";
import { useEffect, useState } from "react";
import { store } from "../../state/store";

function Navbar() {
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setLoggedIn(store.getState().auth.loggedIn);

      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <>
      {loggedIn ? (
        <NavbarLoggedIn />
      ) : location.pathname === "/setup" ? (
        <NavbarLoginRegister />
      ) : (
        <NavbarLoggedOut />
      )}
    </>
  );
}

// When the user is logged in
const NavbarLoggedIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();

    dispatch(logout());
    navigate("/setup?mode=login");
  };

  return (
    <nav className="NavbarDefault">
      <button onClick={() => handleLogout()}>
        Logout <FontAwesomeIcon icon={faRightFromBracket} />
      </button>
    </nav>
  );
};

// When the user is not logged in
const NavbarLoggedOut = () => {
  return (
    <nav className="NavbarDefault">
      <Link to="/setup?mode=login">
        Login <FontAwesomeIcon icon={faRightToBracket} />
      </Link>
    </nav>
  );
};

const NavbarLoginRegister = () => {
  const navigate = useNavigate();

  return (
    <nav className="NavbarLoginRegister">
      <h2
        onClick={() => {
          navigate("/");
        }}
      >
        Scuffed<span>Uno</span>
      </h2>
    </nav>
  );
};

export default Navbar;
