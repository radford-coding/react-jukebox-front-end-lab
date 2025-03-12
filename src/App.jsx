import { useState, useEffect } from 'react'
import * as trackService from './services/trackService.js';
import TrackList from './components/TrackList/TrackList.jsx';
import './App.css';

const App = () => {

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchedTracks = await trackService.indexTracks();
        if (fetchedTracks.err) {
          throw new Error(fetchedTracks.err);
        };
        setTracks(fetchedTracks);
      } catch (error) {
        console.log(error);
      };
    };
    fetchTracks();
  }, []);


  return (
    <>
      <TrackList tracks={tracks}/>
    </>
  );
};

export default App;