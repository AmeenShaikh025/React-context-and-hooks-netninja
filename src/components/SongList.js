import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost Home", id: 1 },
    { title: "Memory Gospel", id: 2 },
    { title: "This Wild Darkness", id: 3 }
  ]);
  const [age, setAge] = useState(20);
  const addSong = title => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };
  useEffect(() => {
    console.log("use effect hook run", songs);
  }, [songs]);
  useEffect(() => {
    console.log("use effect hook run", age);
  }, [age]);
  return (
    <div className="song-list">
      <NewSongForm addSong={addSong} />
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
