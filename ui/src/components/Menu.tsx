import React from "react";
import { Link } from "react-router-dom";

export function Menu() {
  return <>
    <nav>
      <ul className="flex flex-col gap-2">
        <Li to="/">Dashboard</Li>    

        <Li to="/newsletters/search">Newsletters</Li>

        <Li to="/login">Login</Li>
      </ul>
    </nav>
  </>
}

function Li({ children, to }: { to: string, children: React.ReactNode }) {
  return <li>
    <Link to={to} className="block p-2 hover:bg-main">
      {children}
    </Link>
  </li>
}