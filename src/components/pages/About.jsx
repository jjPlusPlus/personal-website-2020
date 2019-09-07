import React, { Component } from 'react';

import Slider from '../Slider';
import Typer from '../Typer';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

class About extends Component {
  render() {
    const qaSliderContent = [
        {
          image: "http://placekitten.com/g/100/100",
          title: "Worst Fear: ",
          text: "Mayonnaise & Tarantulas"
        },
        {
          image: "http://placekitten.com/g/101/101",
          title: "Finest Moment: ",
          text: "Ate an entire hard-shell taco in one bite"
        },
        {
          image: "http://placekitten.com/g/102/102",
          title: "Dogs or Cats: ",
          text: "Both"
        },
        {
          image: "http://placekitten.com/g/103/103",
          title: "Favorite Subreddit: ",
          text: "r/showerthoughts"
        },
        {
          image: "http://placekitten.com/g/104/104",
          title: "Shameful Habit: ",
          text: "Biting my nails"
        },
        {
          image: "http://placekitten.com/g/105/105",
          title: "Strengths: ",
          text: "Versioning habits & writing documentation"
        },
        {
          image: "http://placekitten.com/g/106/106",
          title: "Weaknesses: ",
          text: "I'm not a walking dictionary of Javascript definitions"
        },
        {
          image: "http://placekitten.com/g/107/107",
          title: "I wish that I...: ",
          text: "Contributed more to open-source projects"
        },
        {
          image: "http://placekitten.com/g/108/108",
          title: "Famous For: ",
          text: "Inhuman paralell parking skills"
        }
    ];

    return (
      <div className="page--container about-page">

        <div className="page">
          <div className="page--header">
            <h1 className="page--title"> <Typer text={"Who is JJ?"} delay={1200} interval={150} /><span class="blink">_</span> </h1>
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
            <h2>Q&A</h2>
            <Slider contents={qaSliderContent} interval={4000}/>
          </div>
        </div>

        <div className="page">
          <div className="page--content box-shadow border-radius-small">
            <h2>What kind of formal design/programming education do I have?</h2>

            <div className="timeline flex flex-column">
              <div className="timeline-bar flex flex-row">
                <div className="timeline-bar--section bg-indigo flex flex-center flex-6 text-center">
                  <div className="timeline-section-marker"><p>Various community colleges</p></div>
                </div>
                <div className="timeline-bar--section bg-blue flex flex-center flex-3 text-center">
                  <div className="timeline-section-marker"><p>The Art Institute of CA</p></div>
                </div>
              </div>
              <div className="timeline-markers flex flex-row">
                  <div className="flex-1 text-center"><p>2005</p></div>
                  <div className="flex-1 text-center"><p>2006</p></div>
                  <div className="flex-1 text-center"><p>2007</p></div>
                  <div className="flex-1 text-center"><p>2008</p></div>
                  <div className="flex-1 text-center"><p>2009</p></div>
                  <div className="flex-1 text-center"><p>2010</p></div>
                  <div className="flex-1 text-center"><p>2011</p></div>
                  <div className="flex-1 text-center"><p>2012</p></div>
                  <div className="flex-1 text-center"><p>2013</p></div>
                  <div className="flex-1 text-center"><p>2014</p></div>
              </div>
            </div>

            <p>
              I'm one of those people who spent 6 years in community college, but I don't regret one minute of it
              because I had like 120 units of graphic design and CS classes under my belt before I even made it to university.
            </p>

            <p>
              After that I graduated with a B.S. in Web Developement & Interactive Media from the Art Institute of California in 2014.
            </p>
          </div>
        </div>

        <div className="page">
          <div className="page--content box-shadow border-radius-small">
            <h2>Where have I worked?</h2>
            <div className="timeline flex flex-column">
              <div className="timeline-bar flex flex-row">
                <div className="timeline-bar--section bg-indigo flex-2 text-center">
                  <div className="timeline-section-marker"><p>Ucode</p></div>
                </div>
                <div className="timeline-bar--section bg-blue flex-3 text-center">
                  <div className="timeline-section-marker"><p>Runtriz</p></div>
                </div>
                <div className="timeline-bar--section bg-cyan flex-2 text-center">
                  <div className="timeline-section-marker"><p>Fantasmo</p></div>
                </div>
              </div>
              <div className="timeline-markers flex flex-row">
                  <div className="flex-1 text-center"><p>2012</p></div>
                  <div className="flex-1 text-center"><p>2013</p></div>
                  <div className="flex-1 text-center"><p>2014</p></div>
                  <div className="flex-1 text-center"><p>2015</p></div>
                  <div className="flex-1 text-center"><p>2016</p></div>
                  <div className="flex-1 text-center"><p>2017</p></div>
                  <div className="flex-1 text-center"><p>2018</p></div>
                  <div className="flex-1 text-center"><p>2019</p></div>
              </div>
            </div>
          </div>
        </div>

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
