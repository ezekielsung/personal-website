import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img src={"logo.svg"} alt="ezekiel" />
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/">
        <img src={"logo.svg"} alt="ezekiel" />
      </Link>
    </div>
  );
}

export default Logo;
