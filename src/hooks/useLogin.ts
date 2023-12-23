import { loginRequest } from "../requests/login";

interface IReturn {
  success: boolean;
  message: string;
}

async function useLogin(
  username: React.RefObject<HTMLInputElement>,
  password: React.RefObject<HTMLInputElement>
): Promise<IReturn> {
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

  // setting the items local storage for refresh and access in session cause tho the fuck likes access tokens. Me? Nah, fuck that cookie storage on TOP! 💪💪💪
  localStorage.setItem("refreshToken", response.refreshToken!);
  sessionStorage.setItem("accessToken", response.accessToken!);

  return { success: true, message: "" };
}

export { useLogin };
