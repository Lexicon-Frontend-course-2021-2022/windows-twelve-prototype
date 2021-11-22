import { Link, Route, Routes } from 'react-router-dom';

import Start from './Start';
import Empty from './Empty';
import Notepad from './Notepad';
import Internet from './Internet';
import Solitaire from './Solitaire';
import { useEffect } from 'react';
import Winamp from './Winamp';
import MediaPlayer from './MediaPlayer';


function App() {

  const updateTime = () => {
    const e = document.querySelector("#time");
    const d = new Date();
    const time = d.toLocaleTimeString(
      'sv-SE',
      {
        hour: '2-digit',
        minute: '2-digit'
      }
    )
    e.innerHTML = time;
  }
  useEffect(() => {
    setInterval(() => {
      updateTime();
    }, 1000)

    updateTime();
  });

  return (
    <div className="App">
      <Link to="/">
        <main>
          <img src="bg.png" alt="Desktop background" />
          <Routes>
            <Route path='/' element={<Empty />} />
            <Route path='/start' element={<Start />} />
            <Route path='/notepad' element={<Notepad />} />
            <Route path='/internet' element={<Internet />} />
            <Route path='/solitaire' element={<Solitaire />} />
            <Route path='/winamp' element={<Winamp />} />
            <Route path='/mediaplayer' element={<MediaPlayer />} />
          </Routes>

        </main>
      </Link>
      <footer>
        <nav>
          <Link to="/start" className="start-button">
            <img src="/flag.png" alt="Flag" />Start</Link>
          <div className="systray inset">
            <div id="time"> </div>
          </div>
        </nav>
      </footer>

    </div >
  );
}

export default App;
