import React from "react";
// import img from "../assets/ing-light.png";
import "./Exercice1.css";
import Topbar from "../../components/topbar";
import Intro from "../../components/intro";
import Changements from "../../components/changements";
import Solution from "../../components/solution";
import Footer from "../../components/footer";

function Exercice1() {
  return (
    <>
      <Topbar />
      <Intro />
      <Changements />
      <Solution />
      <Footer />
    </>
  );
}

export default Exercice1;
