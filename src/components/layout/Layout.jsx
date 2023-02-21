import { Outlet, Link, NavLink } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div>
        <nav>
          <Link to="/">D S</Link>
          <Link to="about">About</Link>
          <Link to="mySkills">My Skills</Link>
          <Link to="projects">Projects</Link>
          <Link to="cv">CV</Link>
          <Link to="Contact">Contact</Link>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
