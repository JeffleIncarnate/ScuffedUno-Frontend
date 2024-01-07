import "./splash.scss";

import { useRef } from "react";
import { toast } from "react-toastify";

import { socket } from "../../core/socket/socket";
import { useNavigate } from "react-router-dom";
import { IRoomArgs, createRoom } from "../../state/reducers/roomSlice";
import { useAppDispatch } from "../../state/hooks";

function Splash() {
  const gameId = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleGameJoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!gameId.current || gameId.current.value === "") {
      return toast.error("Bro forgor his game code 💀☠️");
    }

    if (!socket.active) {
      socket.connect();
    }

    socket.emit("room:join", gameId.current.value);
  };

  const handleRoomCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!socket.active) {
      socket.connect();
    }

    socket.emit("room:create");
  };

  socket.on("room:join-error", (errMsg: string) => {
    toast.error(errMsg);
  });

  socket.on("room:create-success", (roomArgs: IRoomArgs) => {
    console.log(roomArgs);

    dispatch(createRoom(roomArgs));

    navigate("/room");
  });

  return (
    <header className="Splash">
      <div className="Splash__Headings">
        <h1>
          Scuffed<span>Uno</span>
        </h1>
        <p>Hate the player, not the game</p>
      </div>

      <div className="Splash__Actions">
        <div className="Splash__Join">
          <form onSubmit={handleGameJoin}>
            <p>Join A Game</p>
            <input
              type="text"
              placeholder="Enter a Code"
              ref={gameId}
              style={{ textTransform: "capitalize" }}
              onInput={(e) => {
                if (e.currentTarget.value.split("").includes(" ")) {
                  const tmp = e.currentTarget.value
                    .split("")
                    .filter((char) => char !== " ");
                  e.currentTarget.value = tmp.join("");
                }
                e.currentTarget.value = e.currentTarget.value.toUpperCase();
              }}
            />
          </form>
        </div>

        <div className="Splash__Create">
          <form onSubmit={handleRoomCreate}>
            <p>Create a Private Game</p>
            <button type="submit">Proceed</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Splash;
