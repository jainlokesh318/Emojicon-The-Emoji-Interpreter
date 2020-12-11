import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "🤗": "Hugging Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState("");

  function doOnChange(event) {
    var meaning = emojiDictionary[event.target.value];
    if (meaning === undefined) {
      meaning = "This emoji is not yet in my database";
    }
    setEmojiMeaning(meaning);
  }

  function emojiHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emojicon</h1>

      <input onChange={doOnChange} />

      <div>{emojiMeaning}</div>

      <h2>The emojis we know </h2>
      {emojisWeKnow.map((item) => {
        return (
          <span
            onClick={() => emojiHandler(item)}
            style={{ fontSize: "2rem", cursor: "pointer", padding: "2rem" }}
            key={item}
          >
            {item}
          </span>
        );
      })}
      <div style={{ margin: "5rem" }}> By Lokesh Jain</div>
    </div>
  );
}
