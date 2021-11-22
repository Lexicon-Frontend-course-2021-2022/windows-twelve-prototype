/* ============================================================================
 * 
 * ========================================================================= */

import { Link } from 'react-router-dom';

const Start = () => {

  return (
    <div id="Start" className="window">
      <div id="sidebar" class="inset">
        <img src="/sidebar.png" alt="icon" />
      </div>

      <div id="start-menu">

        <Link to="/notepad" className="startbar-item">
          <img className="icon" src="/notepad.png" alt="Notepad" /><div>Notepad</div>
        </Link>

        <Link to="/internet" className="startbar-item">
          <img className="icon" src="/internet.png" alt="Internet" /><div>Internet</div>
        </Link>

        <Link to="/solitaire" className="startbar-item">
          <img className="icon" src="/solitaire-icon.png" alt="Solitaire" /><div>Solitaire</div>
        </Link>

        <Link to="/winamp" className="startbar-item">
          <img className="icon" src="/winamp-icon.png" alt="Winamp" /><div>Winamp</div>
        </Link>

        <Link to="/mediaplayer" className="startbar-item">
          <img className="icon" src="/mediaplayer-icon.png" alt="Media Player" /><div>Media Player</div>
        </Link>

      </div>
    </div>
  )
};


export default Start;