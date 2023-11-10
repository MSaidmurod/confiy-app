import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import NavbarStart from "./NavbarStart";

function getLocalStoreg() {
  return localStorage.getItem("theme") || "winter";
}

function Navbar() {
  const [dark, setDark] = useState(getLocalStoreg());

  useEffect(() => {
    document.documentElement.dataset.theme = dark;
    localStorage.setItem("theme", dark);
  }, [dark]);
  const setMode = () => {
    setDark((prev) => {
      return prev == "winter" ? "dracula" : "winter";
    });
  };
  return (
    <div className="shadow-lg">
      <div className="max-w-6xl mx-auto">
        <NavbarStart setMode={setMode} dark={dark} />
      </div>
    </div>
  );
}

export default Navbar;
