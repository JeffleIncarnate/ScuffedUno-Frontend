import { io } from "socket.io-client";
import { store } from "../../state/store";

const URL = import.meta.env.VITE_API_URL;

const socket = io(URL, {
  autoConnect: false,
  auth: {
    accessToken: store.getState().auth.accessToken,
  },
});

export { socket };
