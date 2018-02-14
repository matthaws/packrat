import React from "react";
import mouse from "./mouse-512.png";
import ArticleIndex from "../articles/articleIndexContainer.js";

const Welcome = () => (
  <main id="welcome">
    <img id="main-logo" src={mouse} alt="packrat logo"/>
    <ArticleIndex/>
  </main>
);

export default Welcome;
