import React from 'react';

const About = () => {
  return (
    <div className="page--container">
      <div className="page">
        <div className="page--header">
          <h1 className="page--title">Who is JJ?</h1>
        </div>
        <div className="page--content">
          <h2>What kind of formal design/programming education do I have?</h2>
          <p>
            I'm one of those people who spent 6 years in community college, but I don't regret one minute of it
            because I had like 120 units of art classes under my belt before I even made it to university.
          </p>

          <p>
            After that I chose the Web Developement & Interactive Media program at the Art Institute of California (in Santa Monica) because
            I believed they gave me the best quality for my time, and I was right. No, it's not a traditional CS program at a traditional school,
            but I had the opportunity to learn from some of the smartest people out there. AI has been in the news a lot lately for scamming kids
            out of their tuition money, but I'm still truly proud of my degree.
          </p>

          <h2>Where have I worked?</h2>
          <ul>
            <li>
              <h3>Ucode</h3>
              <p>Instructor, Curriculum Development</p>
              <p>2012-2014</p>
              <p>They say that the best way to truly learn something is to have to teach it to someone else.</p>
            </li>
            <li>
              <h3>Runtriz</h3>
              <p>Front-end developer, UX</p>
              <p>2014-2017</p>
              <p>Ember, platform, design, teamwork</p>
            </li>
            <li>
              <h3>Fantasmo</h3>
              <p>Senior Full-stack Engineer, et. al.</p>
              <p>2017-2019</p>
              <p>A true startup. Kubernetes, docker, full stack</p>
            </li>
          </ul>

          <h2>Strengths</h2>
          <p>It's odd to brag about yourself. Here, let me give it a go:</p>
          <ul>
            <li>I have a VERY strong design background, which makes me a great multi-tool</li>
            <li>My start-up work experience has made me very self-reliant, while it also value taught me the value of teamwork and collaboration.</li>
            <li>I'm great at searching when I don't know the answer</li>
            <li>I have great versioning habits</li>
            <li>I write lots of comments</li>
          </ul>

          <h2>Weaknesses</h2>
          <p>I think it's important to acknowledge my own weaknesses as a developer.</p>
          <ul>
            <li>I'm not a walking dictionary of Javascript definitions- but I don't think this makes me any less of a professional.</li>
            <li>I didn't get a traditional CS degree. I'm currently working on reading the Algorithm Design Manual (Skeina) to make up for it.</li>
            <li>My low-level programming knowledge needs improvement</li>
            <li>I wish I contributed more open-source work</li>
            <li>I bite my nails when I'm focused</li>
          </ul>

          <h2>Grave Dislikes</h2>
          <p>Mayonnaise</p>
          <p>Tarantulas</p>

          <h2>Side Projects</h2>
          <p>Re-working existing Game UI's for use on the browser (see "Overwatch UI Rework")</p>
          <p>Full-stack game development (see Yana's Delivery Service & Trash Pandas)</p>

          <h2>Related Interests</h2>
          <p>Motion Graphics</p>
          <p>3D printing and design</p>
          <p>Project Zarya</p>
        </div>
      </div>
    </div>
  );
}

export default About;
