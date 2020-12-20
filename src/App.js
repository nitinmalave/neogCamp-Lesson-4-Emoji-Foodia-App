import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti"
};

var emojiLists = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, handleInputText] = useState("");

  function handleChangeHandler(event) {
    console.log(event.target.value);
    var userInput = event.target.value;

    if (userInput in emojiDictionary) {
      var meaning = emojiDictionary[userInput];
    } else {
      meaning = `We don't have this emoji in out database.`;
    }
    handleInputText(meaning);
  }

  function selectEmojiHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    handleInputText(emojiMeaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Welcome To Emoji-Foodia!!</h1>

      <input
        style={{
          padding: "0.2rem",
          borderColor: "black",
          borderWidth: "medium"
        }}
        onChange={handleChangeHandler}
        placeholder="Enter your emoji"
      />

      <h2 style={{ color: "red" }}>{emojiMeaning}</h2>

      <h3>Please select an emoji from below list 👇</h3>

      <ul>
        {emojiLists.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => selectEmojiHandler(emoji)}
              style={{
                fontSize: "large",
                padding: "0.5rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
