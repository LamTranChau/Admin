import {Link } from "react-router-dom";

const GiaoDien = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <Link to="/" class='text-decoration-none'>
            <span class='h3 me-3'>Green Academy</span>
          </Link>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item me-3">
                <Link to="/dashboard" class='text-decoration-none'>Dashboard</Link>
              </li>
              <li class="nav-item me-3">
                <Link to="/user" class='text-decoration-none'>User</Link>
              </li>
              <li class="nav-item me-3">
                <Link to="/organ" class='text-decoration-none'>Organ</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default GiaoDien;
