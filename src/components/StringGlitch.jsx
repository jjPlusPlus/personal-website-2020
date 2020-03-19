import React, { useState, useEffect } from 'react';

const StringGlitch = (props) => {
  const { text, interval } = props;
  const [formattedString, setNewString] = useState(["#", "%", "@", "#", "$", "!", "*", "$"]);
  const [count, setCount] = useState(0);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";

  let seed = [];
  for (var n = 0; n < text.length; n++) {
    const characterIndex = Math.floor(Math.random() * characters.length);
    const character = characters[characterIndex];
    seed.push(character);
  }
  const [formatted, setFormatted] = useState(seed);
  
  /* Option A: change the whole word at once, then change it back n ms later
  useEffect(() => {
    let changeInterval;

    changeInterval = setInterval(() => {
      let formatted = "";

      for (var i = 0; i < text.length; i++) {
        const characterIndex = Math.floor(Math.random() * characters.length);
        const character = characters[characterIndex];

        formatted = formatted.concat(character);
      }
      
      setNewString(formatted);
      setTimeout(() => {
        setNewString(text);
      }, 150);
    }, interval);

    return () => clearInterval(changeInterval);
  }, [formattedString, text, characters, interval]) 
  */

  /* option B: change each letter n times where n is the position of the letter int ehstring */
  useEffect(() => {
    let changeInterval;

    changeInterval = setInterval(() => {
      // for each letter
      for (var i = 0; i < text.length; i++) {

        // if the index is less than count, do nothing
        if (i < count) {
          // do nothing
        } else if (i === count) {
          // if this is the current letter, set it to the correct letter
          formatted[i] = text[i];
          setFormatted(formatted);
        } else if ( count <= text.length ) {
          // select a random character
          const characterIndex = Math.floor(Math.random() * characters.length);
          const character = characters[characterIndex];
          // swap out that character at index
          formatted[i] = character;
          setFormatted(formatted);
        }
      }
      count >= text.length + 8 ? setCount(0) : setCount(count + 1);
      setNewString(formatted);
    }, 200);

    return () => clearInterval(changeInterval);
  }, [formattedString, text, characters, interval, count, formatted])

  return (
    <span>{formattedString}</span>
  )
}
export default StringGlitch;