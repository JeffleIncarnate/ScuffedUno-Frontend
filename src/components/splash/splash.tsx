import "./splash.scss";

function Splash() {
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
          <form onSubmit={() => alert("Join Room")}>
            <p>Join A Game</p>
            <input type="text" placeholder="Enter a Code" />
          </form>
        </div>

        <div className="Splash__Create">
          <form onSubmit={() => alert("Join Room")}>
            <p>Create a Private Game</p>
            <button type="submit">Proceed</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Splash;
