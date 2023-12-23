import "./navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAppSelector /*useAppDispatch*/ } from "../../state/hooks";

function Navbar() {
  const location = useLocation();

  const loggedIn = useAppSelector((state) => state.auth.loggedIn);
  // const dispatch = useAppDispatch();

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
  return (
    <nav className="NavbarDefault">
      <button>
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
