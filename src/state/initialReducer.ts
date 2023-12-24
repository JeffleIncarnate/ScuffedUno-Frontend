import { refreshRequest } from "../requests/refresh";

type SuccessResponse = {
  success: true;
  accessToken: string;
  refreshToken: string;
};

type ErrorResponse = {
  success: false;
};

type MyResponseType = SuccessResponse | ErrorResponse;

async function initialReducer(): Promise<MyResponseType> {
  let refreshToken = localStorage.getItem("refreshToken");

  if (refreshToken === null) {
    return {
      success: false,
    };
  }

  const response = await refreshRequest(refreshToken);

  if (!response.success) {
    return {
      success: false,
    };
  }

  return {
    success: true,
    accessToken: response.accessToken,
    refreshToken: response.refreshToken,
  };
}

export { initialReducer };
