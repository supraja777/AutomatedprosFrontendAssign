import React, { useState } from "react";
import "./TargetSum.css"

const TargetSum = () => {
  const [numbers, setNumbers] = useState("");
  const [target, setTarget] = useState("");
  const [pairs, setPairs] = useState([]);

  const findPairs = () => {
    //converting the comma-separated string of numbers entered by the
    // user into an array of integers.
    const numArray = numbers.split(",").map((num) => {
      return parseInt(num);
    });

    const pairs = [];
    const seen = new Set();

    for (let num of numArray) {
      // Caluclating the complement of the current num
      const complement = target - num;

      if (seen.has(complement) && !seen.has(num)) {
        // If the complement of the number is present and if the
        // current num is not present in set - seen, then it's a valid pair

        // Note: If even nums is present in the set along with the complement number,
        //  then we will get duplicate pairs
        pairs.push([num, complement]);
      }

      // Adding the current number to the set
      seen.add(num);
    }
    setTarget("");
    setNumbers("");
    setPairs(pairs);
  };
  return (
    <div className="container">
        <h1>5 Target Sum Pair</h1>
      <div>
        <label>Enter comma seperated numbers (eg: 1,2,3,4 ) </label>
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Enter target sum: </label>
        <input
          type="text"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        ></input>
      </div>
      <div>
        <h3>Pairs that add up to the target: </h3>

        {pairs.length > 0 ? (
          <ul>
            {pairs.map((pair, index) => (
              <li key={index}>{`${pair[0]}, ${pair[1]}`}</li>
            ))}
          </ul>
        ) : (
          <p>No valid pairs found.</p>
        )}
      </div>
      <button onClick={findPairs}>Find pairs</button>
    </div>
  );
};

export default TargetSum;
