/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <h1>PokeDex</h1>
        <nav>
          <menu>
            <li>
              <Link to="/">Forside</Link>
            </li>
          </menu>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
