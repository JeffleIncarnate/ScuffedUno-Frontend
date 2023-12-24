import { loginRequest } from "../requests/login";

type SuccessResponse = {
  success: true;
  accessToken: string;
  refreshToken: string;
};

type ErrorResponse = {
  success: false;
  message: string;
};

type MyResponseType = SuccessResponse | ErrorResponse;

async function useLogin(
  username: React.RefObject<HTMLInputElement>,
  password: React.RefObject<HTMLInputElement>
): Promise<MyResponseType> {
  if (!username.current || !password.current) {
    return {
      success: false,
      message: "Please provide a Username and Password",
    };
  }

  const user = {
    username: username.current.value,
    password: password.current.value,
  };

  if (user.username === "") {
    return {
      success: false,
      message: "Please provide a Username",
    };
  }

  if (user.password === "") {
    return {
      success: false,
      message: "Please provide a Password",
    };
  }

  const response = await loginRequest(user.username, user.password);

  if (!response.success) {
    return {
      success: false,
      message: response.message,
    };
  }

  // setting the items local storage for refresh and access in session cause tho the fuck likes access tokens. Me? Nah, fuck that cookie SESSIONS on TOP! 💪💪💪
  sessionStorage.setItem("accessToken", response.accessToken);
  localStorage.setItem("refreshToken", response.refreshToken);

  return {
    success: true,
    accessToken: response.accessToken,
    refreshToken: response.refreshToken,
  };
}

export { useLogin };
