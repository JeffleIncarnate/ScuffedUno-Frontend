import { useContext } from "react";
import { Link } from "@tanstack/react-router";

import { AuthContext } from "../core/context/auth-context";
import { Auth } from "../core/types/auth";
import { isUserAuth } from "../core/utils/type-guard";

export const Navbar = () => {
  const auth = useContext(AuthContext);

  return (
    <nav className="absolute flex w-full p-4">
      <Wrapper auth={auth} />
    </nav>
  );
};

const Wrapper = ({ auth }: { auth: Auth }) => {
  if (auth === null) {
    return <NavbarSignedOut />;
  }

  if (isUserAuth(auth)) {
    return (
      <NavbarSignedIn
        photo={auth.photo}
        firstname={auth.firstname}
        lastname={auth.lastname}
      />
    );
  }

  return <NavbarSignedOut />;
};

const NavbarSignedIn = ({
  photo,
  firstname,
  lastname,
}: {
  photo: string;
  firstname: string;
  lastname: string;
}) => {
  return (
    <div className="flex h-fit w-full">
      <div>
        <div>
          <img src={photo} alt={"user profile picture"} />
        </div>

        <h2>
          Hello, {firstname} {lastname}
        </h2>
      </div>

      <Link to="/signout" className="bg-accent rounded-lg px-8 py-4 font-bold">
        Sign Out
      </Link>
    </div>
  );
};

const NavbarSignedOut = () => {
  return (
    <div>
      <Link
        to="/signin"
        className="bg-accent ml-auto rounded-lg px-8 py-4 font-bold"
      >
        Sign In
      </Link>
    </div>
  );
};
