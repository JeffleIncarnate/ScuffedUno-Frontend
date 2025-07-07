import { createContext } from "react";

import { Auth } from "../types/auth";

export const AuthContext = createContext<Auth>(null);
