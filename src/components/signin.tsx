import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SignIn = () => {
  return (
    <div className="flex h-lvh w-full items-center justify-center bg-[url(/signin-background.png)] bg-cover">
      <div className="bg-background flex h-1/2 w-2/3 flex-col items-center justify-center gap-2 rounded-2xl">
        <label className="font-bold">Sign In with Google</label>
        <a
          className="bg-text text-background w-3/4 rounded-2xl p-2 text-center"
          href="http://localhost:3000/api/auth/signin"
        >
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </div>
    </div>
  );
};
