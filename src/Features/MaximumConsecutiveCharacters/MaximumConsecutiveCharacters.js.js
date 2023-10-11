import React, { useState } from "react";
import "./MaximumConsecutiveCharacters.css";

const FrequentCharacter = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(0);

  const findMaximumConsecutiveCharacters = () => {
    if (inputText.length === 0) {
      setResult(0);
      return;
    }

    // Setting the initial maxCount to 1
    let maxCount = 1;
    let currentCount = 1;
    let maxChars = [inputText[0]];

    //Looping over the input text for finding maximum consecutive characters
    for (let i = 1; i < inputText.length; i++) {
      if (inputText[i] === inputText[i - 1]) {
        currentCount += 1;
      } else {
        currentCount = 1;
      }

      // Updating the maxCount if currentCount is greater than or equal to maxCount
      //  and adding the character
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxChars = [inputText[i]];
      } else if (currentCount === maxCount) {
        maxChars.push(inputText[i]);
      }
    }
    const resultText = `Characters are : ${maxChars.join(
      ", "
    )} with Frequency:  ${maxCount}`;
    setResult(resultText);
  };

  return (
    <div>
      <h1> 4 Maximum Consecutive Characters</h1>
      <label for="textInput">Enter a text:</label>
      <input
        id="textInput"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="button" onClick={findMaximumConsecutiveCharacters}>
        Get maximum consecutive characters
      </button>
      <p>{result}</p>
    </div>
  );
};

export default FrequentCharacter;
