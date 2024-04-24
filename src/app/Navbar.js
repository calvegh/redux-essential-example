import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux essential example</h1>
      </section>
      <div className="navContent">
        <div className="navLinks">
          <Link to="/">Posts</Link>
        </div>
      </div>
    </nav>
  );
};
