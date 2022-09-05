import "./intro.css";
import React from "react";

export default function Intro() {
  return (
    // <div className="intro" id="">
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
          <b className="b1">On se quitte</b>
          <br />
          <b className="b2">mais on vous laisse</b>
          <br />
          <b className="b3">entre de bonnes mains</b>
          <br />
        </p>
        <div className="wrapper_intro">
          <p>
            ING va arrêter son activité de banque en ligne et fermer
            progressivement les comptes de ses clients en 2022. Dans ce
            contexte, nous voulons accompagner au mieux nos clients vers un
            nouvel établissement bancaire. Nous avons mis au point la meilleure
            alternative bancaire avec Boursorama Banque, leader du marché, qui
            partage avec nous la même vision de la banque en ligne.
          </p>
          <p className="strong-text">
            <strong>
              Le tout en bénéficiant d’offres exclusives réservées aux clients
              ING.
            </strong>
          </p>
          <p className="offer">
            <a
              className="offer_link"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le détail des offres et conditions
            </a>
          </p>
          <p class="GoToBottom">
            Découvrez-les en détails ci-dessous et retrouvez les démarches à
            suivre pour en profiter
            <img
              loading="lazy"
              alt=""
              src="/images/flechebas.png"
              width="47"
              height="25"
              class="GoToBottom-Icon"
            />
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
}
