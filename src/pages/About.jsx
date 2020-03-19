import React, { Component } from 'react';

import Slider from 'components/Slider';

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
      <div className="about-v2 about-page">
        <div className="about-v2--section">
          <div className="flex flex-row-lg flex-column-sm flex-center">
            <img className="circle-image" src="http://placekitten.com/g/200/200" />
            <div className="flex-1 text-callout-blurb">
              <h2>Just the Basics</h2>
              <p> Front-End/UI Developer specializing in Javascript, React, & Ember </p>
            </div>
          </div>
        </div>

        <div className="about-v2--section">
          <h2>Github contributions this year:</h2>
          <img src="http://ghchart.rshah.org/jjPlusPlus" alt="2016rshah's Github chart" className="image-full-width"/>
          <small>(Disclaimer: I use Bitbucket a lot)</small>
        </div>

        <div className="about-v2--section">
          <h2>Q&A</h2>
          <Slider contents={qaSliderContent} interval={4000} hideImageOnSmall={true}/>
        </div>

        <div className="about-v2--section">
          <h2>What kind of formal design/programming education do I have?</h2>

          <div className="timeline flex flex-column">
            <div className="timeline-bar flex flex-row-lg flex-column-sm">
              <div className="timeline-bar--section bg-indigo flex flex-center flex-6 text-center">
                <div className="timeline-section-marker"><p>Various community colleges</p></div>
              </div>
              <div className="timeline-bar--section bg-blue flex flex-center flex-3 text-center">
                <div className="timeline-section-marker"><p>The Art Institute of CA</p></div>
              </div>
            </div>
            <div className="timeline-markers flex flex-row hide-for-small">
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
            After that I graduated with a B.S. in Web Developement & Interactive Media from the Art Institute of California in 2014.
          </p>
        </div>

        <div className="about-v2--section">
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

        <div className="about-v2--section">
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
    );
  }
}

export default AboutV2;
