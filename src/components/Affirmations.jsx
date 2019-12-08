import React, { useState, useEffect } from 'react';

const phrases = [
  "++",
  "needs a job",
  "is a web developer",
  "is a night owl",
  "wants a baby Yoda",
  "is an artist",
  "plays Overwatch",
  "will take your dog",
  "is a hacker",
  "loves coffee",
  "is eating",
  "has root access",
  "loves Typescript",
  "is a car guy",
  "has a beard",
  "makes games",
  "wants your number",
  "is smort",
  "likes butts",
  "knows your password",
  "needs a haircut"
];

const Affirmations = (props => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      let next = current + 1 >= phrases.length ? 0 : current + 1;
      setCurrent(next);
    }, 1000);

    return () => clearInterval(interval);
  }, [current])
  

  return (
    <span>{phrases[current]}</span>
  )
});

export default Affirmations;