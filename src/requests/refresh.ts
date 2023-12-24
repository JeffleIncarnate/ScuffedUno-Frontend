import { API_URL } from ".";

type SuccessResponse = {
  success: true;
  accessToken: string;
  refreshToken: string;
};

type ErrorResponse = {
  success: false;
};

type MyResponseType = SuccessResponse | ErrorResponse;

async function refreshRequest(refreshToken: string): Promise<MyResponseType> {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    refreshToken: refreshToken,
  });

  var requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  let response;

  try {
    response = await fetch(`${API_URL}/v1/api/auth/refresh`, requestOptions);
  } catch (err) {
    if (response === undefined) {
      return {
        success: false,
      };
    }
  }

  let jsonResponse = await response.json();

  if (!response.ok) {
    localStorage.clear();
    sessionStorage.clear();

    return {
      success: false,
    };
  }

  // setting the items local storage for refresh and access in session cause tho the fuck likes access tokens. Me? Nah, fuck that cookie SESSIONS on TOP! 💪💪💪
  sessionStorage.setItem("accessToken", jsonResponse.accessToken);
  localStorage.setItem("refreshToken", jsonResponse.refreshToken);

  return {
    success: true,
    accessToken: jsonResponse.accessToken,
    refreshToken: jsonResponse.refreshToken,
  };
}

export { refreshRequest };
