import React from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import Form from "./Form";
import SongsList from "./SongsList";
import useMusicState from "./useMusicState";
import "./styles.css";

const App = () => {
  const { songs, addSong, deleteSong } = useMusicState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Music Player
      </Typography>

      <Form
        saveSong={(songTitle) => {
          const trimmedText = songTitle.trim();

          if (trimmedText.length > 0) {
            addSong(trimmedText);
          }
        }}
      />

      <SongsList songs={songs} deleteSong={deleteSong} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
