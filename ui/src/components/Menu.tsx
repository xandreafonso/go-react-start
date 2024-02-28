import React from "react";
import { Link } from "react-router-dom";

export function Menu() {
  return <>
    <nav>
      <ul className="flex flex-col gap-2">
        <LiLink to="/">Dashboard</LiLink>    

        <LiLink to="/newsletters/search">Newsletters</LiLink>

        <LiLink to="/login">Login</LiLink>
      </ul>
    </nav>
  </>
}

function LiLink({ children, to }: { to: string, children: React.ReactNode }) {
  return <li>
    <Link to={to} className="block p-2 hover:bg-main">
      {children}
    </Link>
  </li>
}