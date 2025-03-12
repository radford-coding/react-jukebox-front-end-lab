import { useState, useEffect } from 'react'
import * as trackService from './services/trackService.js';
import TrackList from './components/TrackList/TrackList.jsx';
import TrackForm from './components/TrackForm/TrackForm.jsx';
import './App.css';

const App = () => {

  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  const handleFormVisible = (track) => {
    if (!track._id) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <button
        onClick={handleFormVisible}
      >
        add new track
      </button>
      <TrackList
        tracks={tracks}
        isFormOpen={isFormOpen}
        handleFormVisible={handleFormVisible}
      />
      {isFormOpen
        ? <TrackForm />
        : <></>
      }
    </>
  );
};

export default App;