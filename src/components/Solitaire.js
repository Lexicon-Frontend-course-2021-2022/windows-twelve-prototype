const Internet = () => {
  return (
    <div id="Solitaire" className="window">
      <div className="caption">
        <img src="solitaire-icon.png" alt="icon" />
        Solitaire

        <div className="buttons">
          <div className="button min" />
          <div className="button max" />
          <div className="button close" />
        </div>
      </div>

      <div className="menu">
        <div>Game</div>
        <div>Help</div>
      </div>


      <div className="content inset solitaire">

      </div>

      <div className="statusbar">Score: 0 Time: 0</div>
    </div>
  );
}

export default Internet;