import React from "react";
import "./header.css";

const Header = () => (
  <header className="App-header">
    <nav>
      <p>My Bookmarks</p>
    </nav>
    <main className="header-content">
      <h1 className="App-title">Packrat</h1>
      <p className="App-intro">Get your stuff together.</p>
    </main>
    <nav>
      <p>User Avatar</p>
    </nav>
  </header>
);

export default Header;
