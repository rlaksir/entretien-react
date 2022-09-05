import React from "react";
import "./changements.css";

export default function Changements() {
  return (
    <div className="f-div">
      <div className="s-div">
        <div className="t-div">
          <p class="c-title">
            <h2>
              <img
                loading="lazy"
                alt=""
                src="/images/calendar2.png"
                width="44"
                height="39"
                class="ingn-NoSweatBanking-TitleIcon"
              />
              Les changements à venir
            </h2>
            <hr className="c-hr"></hr>
          </p>
        </div>

        <div class="c-description">
          <p className="desc">
            <strong>
              ING se retire du marché de la banque en ligne en France.
            </strong>
          </p>
          <p className="desc">
            Nous allons fermer progressivement les comptes de nos clients.
          </p>
          <p className="desc">
            <strong>
              En tant que client, vous allez recevoir à votre domicile un
              courrier d’information concernant vos comptes ING. Après réception
              de ce courrier, vous pourrez si vous le souhaitez devenir client
              de Boursorama Banque
            </strong>{" "}
            en accédant à un parcours d’ouverture simplifié et en bénéficiant
            d'offres exclusives réservées aux clients ING.
          </p>
          <p className="desc">
            Si vous détenez{" "}
            <strong>un contrat d’assurance-vie ING Direct Vie</strong>, sa
            gestion a été transférée chez Boursorama Banque, sans aucune
            modification de ses conditions.
          </p>
          <p className="desc">
            <strong>Votre crédit immobilier et/ou votre prêt personnel</strong>{" "}
            restent quant à eux chez ING.
            <br />
            Leurs conditions ne sont pas modifiées.
          </p>
          <h2 class="h2-or">
            <strong>
              Découvrez comment passer chez Boursorama Banque, étape par étape
            </strong>
          </h2>
          <hr className="c-hr" />
          <p>
            <div>
              <div>
                <a href="https://www.youtube.com/embed/0m3uCBwghWg?autoplay=1&amp;amp;rel=0&amp;amp;theme=light&amp;amp;color=white&amp;amp;wmode=transparent&amp;amp;playerName=_0.7044119195123981">
                  <img
                    loading="lazy"
                    src="/images/ing-souhaits.webp"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </a>
              </div>
            </div>
          </p>
          <p>
            <a href="/" class="c-link" target="_blank">
              <strong>Télécharger les démarches à suivre</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
