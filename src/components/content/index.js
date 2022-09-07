import React from "react";
import "./content.css";

export default function Content() {
  return (
    <div className="f-div">
      <div className="s-div">
        <div className="t-div">
          <p className="c-title">
            <h3>Votre banque va à l'essentiel !</h3>
          </p>
        </div>

        <div class="c-description">
          <p className="desc1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nec tincidunt augue. Nam luctus pulvinar ornare.
            Suspendisse eros ipsum, aliquam quis nulla sed, mollis consectetur
            nisi.Sed ac dolor eu ex accumsan elementum eget et magna. Etiam
            suscipit tempor turpis, nec tempus nibh auctor sed.
          </p>
          <div className="d-div">
            <p className="desc">
              <img
                loading="lazy"
                alt=""
                src="/images/fleche.png"
                width="47"
                height="47"
                class="fleche-Icon"
              />
              <span>Gérer au quotidien</span>
            </p>
            <p className="desc">
              <img
                loading="lazy"
                alt=""
                src="/images/fleche.png"
                width="47"
                height="47"
                class="fleche-Icon"
              />
              <span>Prêt immobilier</span>
            </p>
          </div>
          <div className="d-div">
            <p className="desc">
              <img
                loading="lazy"
                alt=""
                src="/images/fleche.png"
                width="47"
                height="47"
                class="fleche-Icon"
              />
              <span>Investir</span>
            </p>
            <p className="desc">
              <img
                loading="lazy"
                alt=""
                src="/images/fleche.png"
                width="47"
                height="47"
                class="fleche-Icon"
              />
              <span>Epargner</span>
            </p>
          </div>

          <div className="more-info">
            <p className="more">
              <span className="c-link">
                Comment vous connecter à votre espace client ?
              </span>
              <img
                loading="lazy"
                alt=""
                src="/images/more.png"
                width="47"
                height="47"
                class="fleche-Icon"
              />
            </p>
          </div>
          <div className="more-info">
            <p className="more">
              <span className="c-link">
                Comment activer votre carte Mastercard&reg; la première fois ?
              </span>
              <img
                loading="lazy"
                alt=""
                src="/images/more.png"
                width="47"
                height="47"
                class="fleche-Icon"
              />
            </p>
          </div>
          <div className="more-info">
            <p className="more">
              <span className="c-link">
                Comment bloquer ou débloquer votre carte Mastercard&reg; ?
              </span>
              <img
                loading="lazy"
                alt=""
                src="/images/more.png"
                width="47"
                height="47"
                class="fleche-Icon"
              />
            </p>
          </div>

          <a href="/" class="q-btn">
            D'autres questions ?
          </a>
        </div>
      </div>
    </div>
  );
}
