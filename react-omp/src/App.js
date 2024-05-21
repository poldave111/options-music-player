import { useRef, useState, useEffect, useMemo, useCallback} from 'react';
import './App.scss';
import MusicPlayer2 from './components/MusicPlayer2/MusicPlayer2';

function App() {
  const songs = [
    {"filename": 15, "title": "15"}, 
    {"filename": 3, "title": "3"}, 
    {"filename": 6, "title": "6"}, 
    {"filename": 9, "title": "9"}, 
    {"filename": 12, "title": "12"}
  ];
  const [musicFile, setMusicFile] = useState(songs[4]);

  const prev = () => (setMusicFile(prevValue => {
    // find song index in array songs
    console.log(prevValue);
    const songIndex = songs.findIndex(value => prevValue.title == value.title && prevValue.filename == value.filename);
    // set index -1 
    let newIndex = songIndex - 1;
    // if value is less then 0, set next index = index - 1
    if(newIndex < 0) {
      newIndex = 0; 
    }
    // set setMusicFile on new index 
    return songs[newIndex];
    // console.log(songIndex);
    // return songs[0];
  }));
  const next = () => (setMusicFile(prevValue => {
    const songIndex = songs.findIndex(value => prevValue.title == value.title && prevValue.filename == value.filename);
    let newIndex = songIndex + 1;

    if(newIndex >= songs.length) {
      newIndex=songs.length-1; 
    }
    return songs[newIndex];
  }));

  return (
    <div className="App">
      <h1>Music Player</h1>
      <MusicPlayer2 song={musicFile} prev={prev} next={next}/>
    </div>
  );
}

export default App;
