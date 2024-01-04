import { API_URL } from ".";

type SuccessResponse = {
  success: true;
  accessToken: string;
  refreshToken: string;
};

type ErrorResponse = {
  success: false;
  message: string;
};

async function loginRequest(
  username: string,
  password: string
): Promise<SuccessResponse | ErrorResponse> {
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
    console.log(response);
  } catch (err) {
    if (response === undefined) {
      return {
        success: false,
        message: "Is your API on?",
      };
    }
  }

  let jsonResponse = await response.json();

  console.log(response.ok);

  if (!response.ok) {
    return {
      success: false,
      message:
        (jsonResponse.details.reason as string) ||
        "Some unknown error has occurred. Please try again later",
    };
  }

  return {
    success: true,
    accessToken: jsonResponse.accessToken,
    refreshToken: jsonResponse.refreshToken,
  };
}

export { loginRequest };
