import { API_URL } from ".";

interface IReturnBase {
  success: boolean;
  message: string;
  accessToken?: string;
  refreshToken?: string;
}

type IReturn<T extends boolean> = T extends true
  ? IReturnBase & { accessToken: string; refreshToken: string }
  : IReturnBase;

async function loginRequest<T extends boolean>(
  username: string,
  password: string
): Promise<IReturn<T>> {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    username: username,
    password: password,
  });

  var requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  let response;

  try {
    response = await fetch(`${API_URL}/v1/api/auth/login`, requestOptions);
  } catch (err) {
    if (response === undefined) {
      return {
        success: false,
        message: "Is your API on?",
      } as IReturn<T>;
    }
  }

  let jsonResponse = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: jsonResponse.details.reason as string,
    } as IReturn<T>;
  }

  return {
    success: true,
    message: "",
    accessToken: jsonResponse.accessToken,
    refreshToken: jsonResponse.refreshToken,
  } as IReturn<T>;
}

export { loginRequest };
