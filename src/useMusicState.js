import { useState } from 'react';

export default initialValue => {
  const [songs, setMusic] = useState(initialValue);
  return {
    songs,
    addSong: songTitle => {
      setMusic([...songs, songTitle]);
    },
    deleteSong: songIndex => {
      const newSong = songs.filter((_, index) => index !== songIndex);
      setMusic(newSong);
    }
  };
};
