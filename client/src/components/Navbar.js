import { Fragment } from "react";
import { Link } from "react-router-dom";
function Navbar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Fragment>
      <header>
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white">
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <Link
                to={"/"}
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true">
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>Main dashboard</span>
              </Link>
              <a
                className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-chart-line fa-fw me-3"></i>
                <span>Projects</span>
              </a>
              <Link
                className="list-group-item list-group-item-action py-2 ripple"
                to={"/users"}
                exact="true">
                <i className="fas fa-building fa-fw me-3"></i>
                <span>Clients</span>
              </Link>

              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-calendar fa-fw me-3"></i>
                <span>Calendar</span>
              </a>
              <Link
                className="list-group-item list-group-item-action py-2 ripple"
                to={"/users"}
                exact="true">
                <i className="fas fa-users fa-fw me-3"></i>
                <span>Team Members</span>
              </Link>
              <Link
                to={"/projects"}
                className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-money-bill fa-fw me-3"></i>
                <span>Tickets</span>
              </Link>
            </div>
          </div>
        </nav>

        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-primary text-white fixed-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>

            <a className="navbar-brand" href="#">
              <img
                src="https://www.48hourslogo.com/48hourslogo_data/2020/04/25/95860_1587752067.jpg"
                height="25"
                alt=""
                loading="lazy"
              />
            </a>

            <form className="d-none d-md-flex input-group w-auto my-auto">
              <input
                autoComplete="off"
                type="search"
                className="form-control rounded"
                placeholder='Search (ctrl + "/" to focus)'
                style={{ minWidth: "225px" }}
              />
              <span className="input-group-text border-0">
                <i className="fas fa-search"></i>
              </span>
            </form>
            <ul className="navbar-nav ms-auto d-flex flex-row">
              <li className="nav-item">
                <a className="nav-link me-3 me-lg-0" href="#">
                  <i className="fas fa-fill-drip"></i>
                </a>
              </li>

              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false">
                  
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle "
                    height="22"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a className="dropdo>
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdo>
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={handleLogoutClick}>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
}
export default Navbar;
