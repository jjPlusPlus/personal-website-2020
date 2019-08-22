import React, { Component } from 'react';



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

class About extends Component {
  render() {
    return (
      <div className="page--container about-page">

        <div className="page">
          <div className="page--header">
            <h1 className="page--title">Who is JJ?</h1>
          </div>

          <div className="flex flex-center flex-column icon-links">

            <a href="https://www.linkedin.com/in/jjmedina/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/jjPlusPlus/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.instagram.com/mega094/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>

          <div className="page--content box-shadow border-radius-small">
            <div className="flex flex-row">
              <img className="circle-image" src="http://placekitten.com/g/200/200" />
              <div className="flex-1 text-callout-blurb">
                <h2>Just the Basics</h2>
                <p>
                  A creative type with a technical background, specializing in UI design and development.
                  I love intuitive interfaces, good versioning habits, and making/playing games.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="page">
          <div className="page--content box-shadow border-radius-small">
            <h2>Github contributions this year:</h2>
            <img src="http://ghchart.rshah.org/jjPlusPlus" alt="2016rshah's Github chart" className="image-full-width"/>
            <small>(Disclaimer: I use Bitbucket a lot)</small>
          </div>
        </div>

        <div className="page">
          <div className="page--content box-shadow border-radius-small">
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

        <div className="page">
          <div className="page--content box-shadow border-radius-small">
            <h2>Non-development interests:</h2>
            <div className="image-grid">
              <div className="image-grid--item">
                <img src="https://firebasestorage.googleapis.com/v0/b/jjplusplus-461d4.appspot.com/o/images%2Fsite-3dprinting.jpg?alt=media&token=0c2f76f7-d752-4106-91c5-e33976ca907f" />
                <p>3D Scanning & Modeling</p>
              </div>
              <div className="image-grid--item">
                <img src="https://firebasestorage.googleapis.com/v0/b/jjplusplus-461d4.appspot.com/o/images%2Fsite-3dprintingp2.jpg?alt=media&token=7f57877b-15d7-4ede-91f8-4859a4839128" />
                <p>3D Printing</p>
              </div>
              <div className="image-grid--item">
                <img src="https://firebasestorage.googleapis.com/v0/b/jjplusplus-461d4.appspot.com/o/images%2Fsite-oculus-kingspray.jpg?alt=media&token=3979d5e9-0a54-4e96-83a5-d71ff79a1583" />
                <p>Oculus (Kingspray featured)</p>
              </div>
              <div className="image-grid--item">
                <img src="https://firebasestorage.googleapis.com/v0/b/jjplusplus-461d4.appspot.com/o/images%2Fsite-castro.jpg?alt=media&token=318a7997-565e-40ec-8bc0-ac1385aae301" />
                <p>Painting (Graffiti: this is a wall I did in Venice, CA)</p>
              </div>
              <div className="image-grid--item">
                <img src="https://firebasestorage.googleapis.com/v0/b/jjplusplus-461d4.appspot.com/o/images%2Fsite-zarya.jpg?alt=media&token=c100a2fe-ed00-44e9-beb9-ee664aa94ea9" />
                <p>Mechanical Engineering (This is my '73 240z, "Zarya")</p>
              </div>
              <div className="image-grid--item">
                <img src="https://firebasestorage.googleapis.com/v0/b/jjplusplus-461d4.appspot.com/o/images%2Fsite-photography.jpg?alt=media&token=de2269f6-9b9e-4625-9934-9884b34fa47c" />
                <p>Photography (pictured: my Canon AE-1)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
