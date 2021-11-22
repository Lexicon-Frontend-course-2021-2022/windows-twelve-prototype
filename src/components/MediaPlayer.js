const MediaPlayer = () => {
  return (
    <div id="MediaPlayer" className="window">
      <div className="caption">
        <img src="mediaplayer-icon.png" alt="icon" />
        Media Player

        <div className="buttons">
          <div className="button min" />
          <div className="button max" />
          <div className="button close" />
        </div>
      </div>

      <div className="menu">
        <div>View</div>
        <div>options</div>
        <div>Help</div>
      </div>

      <div >
        <iframe width="320" height="240" src="https://www.youtube.com/embed/ApN2eLI4d-4?controls=0&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </div >
  );
}

export default MediaPlayer;