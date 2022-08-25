import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header className="flex flex-col">
        <h1 className="text-3xl self-center">PokéDex</h1>
        <nav>
          <menu>
            <li>
              <Link to="/">Forside</Link>
            </li>
          </menu>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
