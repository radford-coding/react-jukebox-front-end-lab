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

  const handleSelect = (track) => {
    setSelected(track);
  };

  const handleFormVisible = (track) => {
    if (selected !== track) {
      setIsFormOpen(true);
    } else {
      setIsFormOpen(false);
    };
    if (!track._id) {
      setSelected(null);
    } else {
      setSelected(track);
    };
  };

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.createTrack(formData);
      if (newTrack.err) {
        throw new Error(newTrack.err);
      };
      setTracks([...tracks, newTrack]);
    } catch (error) {
      console.log(error);
    };
  };

  // const handleEdit = (track) => {
  //   setSelected(track);
  //   setIsFormOpen(true);
  // };

  return (
    <>
      <button
        disabled={isFormOpen}
        onClick={handleFormVisible}
      >
        add new track
      </button>
      <TrackList
        tracks={tracks}
        isFormOpen={isFormOpen}
        selected={selected}
        handleFormVisible={handleFormVisible}
        handleSelect={handleSelect}
      />
      {isFormOpen
        ? <TrackForm
          handleAddTrack={handleAddTrack}
        />
        : <></>
      }
    </>
  );
};

export default App;