import "./solution.css";
import React from "react";

export default function Solution() {
  return (
    <div className="sol-div">
      <div className="sol-title-div">
        <p class="c-title">
          <h2>La meilleure solution alternative bancaire</h2>
          <hr className="c-hr"></hr>
        </p>
      </div>

      <div class="sol-description">
        <p className="sol-desc">
          <strong>Deux banques, une même vision</strong>
        </p>
        <p className="sol-desc">
          Si nous avons choisi Boursorama Banque, c’est parce que nous
          partageons avec Boursorama Banque la même vision de la banque en ligne
          : une promesse visant à simplifier la vie de nos clients, une large
          gamme de produits simples et performants, des tarifs très compétitifs…
          Vous ne devriez pas être dépaysés.
        </p>
        <p className="sol-desc">
          <strong>Une solution alternative mise au point pour vous</strong>
          <br /> Avec Boursorama Banque, vous pourrez profiter de nombreux
          avantages exclusifs :
        </p>
      </div>
      <div class="avantages">
        <div>
          Un parcours
          <br />
          d'ouverture de compte
          <br />
          simplifié
        </div>
        <div>
          D’offres exclusives jusqu’à
          <br />
          320€ offerts
          <br />
          <span class="avantages-small">(sous conditions)</span>
          <br />
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            class="avantages-link"
          >
            Voir le détail des offres et des conditions
          </a>
          <br />
          <a href="/" class="more">
            Comprendre les offres +
          </a>
        </div>

        <div>
          Aucuns frais sur les
          <br />
          transferts et sur
          <br />
          les clôtures de compte
        </div>
      </div>

      <p class="offres-exclusives">
        <strong>Pour la clôture des livrets d’épargne réglementés</strong>
        (Livret A et Livret Développement Durable et Solidaire) : Vous
        bénéficierez d’un dédommagement forfaitaire compensant en partie la
        perte d’intérêts liée au délai entre la clôture de votre livret ING et
        l’ouverture d’un nouveau livret. Ce montant représente jusqu’à 10€ pour
        un Livret A supérieur au plafond (22 950€) et jusqu’à 5€ pour un LDDS.
        Un montant forfaitaire de 1€ sera versé aux clients pour tout livret
        avec moins de 5 000€.
        <br />A noter : si la clôture est à votre initiative, vous ne
        bénéficierez pas du dédommagement.
      </p>
      <h3 class="ingr-Title ingr-Title--dark ingr-Title--noBorder">
        De nombreuses offres adaptées à vos besoins
      </h3>
    </div>
  );
}
