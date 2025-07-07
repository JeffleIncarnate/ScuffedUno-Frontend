import { ErrorAuth, UserAuth } from "../types/auth";

export const isUserAuth = (auth: UserAuth | ErrorAuth): auth is UserAuth => {
  return "displayName" in auth;
};
