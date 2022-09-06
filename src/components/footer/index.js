import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Facebook, Twitter, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <div className="footer-top">
        <div className="container eduvibe-animated-shape">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="edu-footer-widget explore-widget">
                <h5 className="widget-title">ING France</h5>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li>
                      <a
                        href="/"
                        style={{ "text-decoration": "none", color: "#231F40" }}
                      >
                        Qui est ING ?
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        style={{ "text-decoration": "none", color: "#231F40" }}
                      >
                        Notre actualité
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        style={{ "text-decoration": "none", color: "#231F40" }}
                      >
                        Nous rejoindre
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="edu-footer-widget quick-link-widget">
                <h5 className="widget-title">Accès rapide</h5>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li>
                      <a
                        href="/"
                        style={{ "text-decoration": "none", color: "#231F40" }}
                      >
                        Espace Client
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        style={{ "text-decoration": "none", color: "#231F40" }}
                      >
                        La banque en ligne by ING
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        style={{ "text-decoration": "none", color: "#231F40" }}
                      >
                        Tarifs et modalités
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        style={{ "text-decoration": "none", color: "#231F40" }}
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        style={{ "text-decoration": "none", color: "#231F40" }}
                      >
                        Le Web Café
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        style={{ "text-decoration": "none", color: "#231F40" }}
                      >
                        Nous contacter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="edu-footer-widget">
                <h5 className="widget-title">Suivez-nous</h5>

                <ul className="social-share">
                  <li>
                    <a href="/">
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <Facebook style={{ color: "#000" }} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <Twitter style={{ color: "#000" }} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <Linkedin style={{ color: "#000" }} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="edu-footer-widget">
                <h5 className="widget-title">Contact Info</h5>
                <div className="inner">
                  <div className="widget-information">
                    <ul className="information-list">
                      <li className="info-list">
                        <img
                          className="logo-light"
                          src="/images/logo-apple.svg"
                          alt="Main Logo"
                          width="150px"
                          height="40px"
                        />
                      </li>
                      <li className="info-list">
                        <img
                          className="logo-light"
                          src="/images/Logo-google-play.svg"
                          alt="Main Logo"
                          width="150px"
                          height="40px"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area copyright-default">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <p className="button-footer" style={{ color: "black" }}>
                  Sécurité <Link to="/" /> Infos légales <Link to="/" /> |
                  Politiques cookies <Link to="/" /> | Developer Portal{" "}
                  <Link to="/" /> | Accessibilité <Link to="/" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
