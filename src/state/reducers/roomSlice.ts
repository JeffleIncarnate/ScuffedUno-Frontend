import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface IRoomArgs {
  roomId: string | undefined;
  roomRules: {
    maxPlayers: number | undefined;
    sevenRule: boolean | undefined;
    immediateWinCard: boolean | undefined;
    startingCards: number | undefined;
  };
}

interface RoomState {
  roomArgs: IRoomArgs;
}

const initialState: RoomState = {
  roomArgs: {
    roomId: undefined,
    roomRules: {
      maxPlayers: undefined,
      sevenRule: undefined,
      immediateWinCard: undefined,
      startingCards: undefined,
    },
  },
};

export const roomSlice = createSlice({
  name: "room",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    createRoom: (state, action: PayloadAction<IRoomArgs>) => {
      state.roomArgs = action.payload;
    },
  },
});

export const { createRoom } = roomSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectRoomArgs = (state: RootState) => state.room.roomArgs;

export default roomSlice.reducer;
