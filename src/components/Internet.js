const Internet = () => {
  return (
    <div id="Internet" className="window">
      <div className="caption">
        <img src="internet.png" alt="icon" />
        Internet

        <div className="buttons">
          <div className="button min" />
          <div className="button max" />
          <div className="button close" />
        </div>
      </div>

      <div className="menu">
        <div>File</div>
        <div>Edit</div>
        <div>View</div>
        <div>Favorites</div>
        <div>Help</div>
      </div>

      <div className="address-bar">
        <div>Address:</div>
        <div className="input inset">http://www.lunarstorm.se</div>
      </div>

      <div className="content inset lunarstorm">

      </div>
    </div>
  );
}

export default Internet;