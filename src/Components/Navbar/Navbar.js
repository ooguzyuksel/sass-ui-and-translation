import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../Styles/Navbar/Navbar.css";
import Home from "../HomePage/Home";
import LearnSassPage from "../LearnSass/LearnSassPage";

function Navbar() {
  return (
    <Router>
      <div className="top-stripe"></div>
      <div className="container-nav">
        <div className="logoMainDiv">
          <Link className="logo" to="/">
            <img
              src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="buttons">
          <Link to="/" className="active-button blob link">
            <span>Ana Sayfa</span>
          </Link>
          <Link className="link">
            <span className="deactive-button">Yükle</span>
          </Link>
          <Link to="learn-sass" className="active-button blob link">
            <span> Sass'ı Öğren</span>
          </Link>
          <Link className="link">
            <span className="deactive-button">Blog</span>
          </Link>
          <Link className="link">
            <span className="deactive-button">Dökümantasyon</span>
          </Link>
          <Link className="link">
            <span className="deactive-button">Dahil Ol</span>
          </Link>
          <input type="text" className="deactive-button" placeholder="Ara..." />
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/learn-sass">
          <LearnSassPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
