import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const clickableLink = links.map((link)=>(
    <a key={link} href={"#" + link}>
    {link}
  </a>
));
  
  return <nav>{clickableLink}</nav>;
}

export default NavBar;
