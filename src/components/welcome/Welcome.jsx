import React from "react";
import mouse from "./mouse-512.png";
import ArticleFilter from "../articles/articleFilterContainer.js";
import ArticleIndex from "../articles/articleIndexContainer.js";
import "./welcome.css";

const Welcome = () => (
  <main id="welcome">
    <img id="main-logo" src={mouse} alt="packrat logo"/>
    <ArticleFilter/>
    <ArticleIndex/>
  </main>
);

export default Welcome;
