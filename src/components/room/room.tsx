import "./room.scss";

import Clock from "react-spinners/ClockLoader";
import { store } from "../../state/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { socket } from "../../core/socket/socket";

function Room() {
  socket.on("room:joined", (data: any) => {
    console.log(data);
  });

  return (
    <main className="Room">
      <div className="Room__Players">
        <h3>Players</h3>
        <ol>
          <li>e</li>
        </ol>
      </div>

      <div className="Room__Code">
        <h3>Code</h3>
        <p
          onClick={() => {
            toast.info("Copied code to clipboard");
            navigator.clipboard.writeText(
              store.getState().room.roomArgs.roomId as string
            );
          }}
        >
          {store.getState().room.roomArgs.roomId}
          <FontAwesomeIcon icon={faCopy} className="Room__Code__Copy" />
        </p>
      </div>

      <div className="Room__Settings">
        <h3>Settings</h3>
      </div>
      <div className="Room__Start">
        <button onClick={() => toast.success("start game")}>Start</button>
      </div>
      <div className="Room__Loading">
        <Clock color="#e5eae8" size={170} />
        <h3>Waiting for Host to start game...</h3>
      </div>
    </main>
  );
}

export default Room;
