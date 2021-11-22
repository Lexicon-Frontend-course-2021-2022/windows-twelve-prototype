const Notepad = () => {
  return (
    <div id="Notepad" className="window">
      <div className="caption">
        <img src="notepad.png" alt="icon" />
        Notepad

        <div className="buttons">
          <div className="button min" />
          <div className="button max" />
          <div className="button close" />
        </div>
      </div>

      <div className="menu">
        <div>File</div>
        <div>Edit</div>
        <div>Format</div>
        <div>View</div>
        <div>Help</div>
      </div>
      <div className="content inset">
        <p>Windows Notepad is a simple text editor for Windows; it creates and edits plain text documents. First released in 1983 to commercialize the computer mouse in MS-DOS, Notepad has been part of every version of Windows ever since.</p>
      </div>
    </div>
  );
}

export default Notepad;