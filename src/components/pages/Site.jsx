import React from 'react';

const Site = () => {
  return (
    <div className="page--container">
      <div className="page">
        <div className="page--header">
          <h1 className="page--title">This is a very strange website</h1>
        </div>
        <div className="page--content">
          <h2>Why is it so strange?</h2>
          <p>
            Not to brag, but I plan, design, and build highly useable web applications every day.
            For this reason, I wanted my personal website to be... different.
          </p>
          <h2>What is so strange about it?</h2>
          <p>
            In your standard website, the navigation is ever present. No matter far down you click into the content, you can always either
            get back to the home page or at least one of the top-level pages by clicking on a navigation item (or "page").
          </p>
          <h2>Not your average resumé</h2>
          <p>
            I recently lost my job and had to start interviewing, and the process has made me sad and insecure.
            I was having trouble answering dictionary-style Javascript questions and answering algorithm questions about Binary Search Trees,
            but I was mostly disappointed in my resume.

            Now, I've been on both sides of the interview table so I know a thing or two about hiring a new developer. So I decided to make
            a custom "About" page that describes the things about me that I think are important.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Site;
