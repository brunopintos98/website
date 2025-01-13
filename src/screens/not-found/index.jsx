import React from "react";

import Header from "components/Header";

import { NotFound as NotFoundImage } from "assets";
import "./styles.css";

const NotFound = () => (
  <div className="not-found-container">
    <Header selected="404" />
    <h1 className="not-found-title">OH NO! 404</h1>
    <div className="not-found-content-container">
      <img src={NotFoundImage} alt="not found" />
    </div>
  </div>
);

export default NotFound;
