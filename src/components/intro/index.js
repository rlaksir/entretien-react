import "./intro.css";
import React from "react";

export default function Intro() {
  return (
    <div className="intro-message">
      <div className="left_intro">
        <div>
          <img
            className="imgContainer"
            src="/images/hp_referral_visuelshowcase.webp"
            alt=""
          />
        </div>
      </div>
      <div className="right_intro">
        <p class="text-on-image">
          <b className="b1">Lorem ipsum dolor sit amet</b>
          <br />
          <b className="b2">Lorem ipsum</b>
          <br />
        </p>
        <div className="wrapper_intro">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nec tincidunt augue. Nam luctus pulvinar ornare.
          </p>
          <p className="strong-text">
            <strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </strong>
          </p>
          <p className="offer">
            <a className="offer_link" href="/" target="_blank">
              eventuel lien
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
