import React from 'react';
import Typer from '../Typer';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Site = () => {
  return (
    <div className="page--container">
      <div className="page">
        <div className="page--header">
          <h1 className="page--title"><Typer text={"This is a very strange website"} delay={1200} interval={150} /><span className="blink">_</span></h1>
        </div>
        <div className="page--content">
          <h2>Why is it so strange?</h2>

          <p>In a nutshell, I wanted it to feel more like a game than a traditional website.</p>

          <p>
            Since the beginning of time (or the internet), we've been trained to understand certain things about the way websites work.
            For instance, most people by now have caught on that this <FontAwesomeIcon icon={faBars} /> symbol means "menu". This website bucks some
            of this training and may leave you feeling confused.
          </p>

          <p>Finding your way around might seem a little strange. There's no menu you can use to easily get back to the top-level options. Getting to some of the good content involves some "drill-down" and clicking.</p>

          <hr />

          <img src="https://firebasestorage.googleapis.com/v0/b/jjplusplus-461d4.appspot.com/o/images%2Ftableflip.gif?alt=media&token=dfddcb09-6848-4dce-9c3e-dc1df40350fd" />
          <h2>Why did you make it like this?</h2>
          <p>
            I'm not trying to win a <a href="https://www.webbyawards.com/winners/2019//portfolio/" target="_blank">Webby</a> or anything. I'm just trying something new.
            <br /> <br />
            I've been planning, designing, and building web applications for several years now, and the focus has always been on usability and efficiency.
            None of it has been boring, just... So conventional.
            This website is an opportunity to follow a different path- even if it rubs some people the wrong way.

          </p>
        </div>
      </div>
    </div>
  );
}

export default Site;
