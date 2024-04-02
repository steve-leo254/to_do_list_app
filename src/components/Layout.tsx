import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <header className="layout-header">
        <aside>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </nav>
        </aside>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
