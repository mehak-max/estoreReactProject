import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchHovered, setSearchHovered] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm fixed-top shadow p-3 mb-5 bg-white">
        <div className="container">
          {/* Brand logo */}
          <Link className="navbar-brand" to="/">
            <img src="eimage/elogo.avif" alt="Avatar Logo" style={{ width: "100px" }} className="rounded-pill" />
          </Link>

          {/* Toggle button for navbar2 */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar2" aria-controls="navbar2" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          {/* Collapsible content for navbar2 */}
          <div className="collapse navbar-collapse" id="navbar2">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-2">
                <Link className="nav-link active hov" to="/">Home</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link active hov" to="/Product">Product</Link>
              </li>

              {/* Category Dropdown */}
              <li className="nav-item px-2 mt-2">
                <div className="dropdown">
                  <button 
                    className="dropdown-toggle border-0" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                    style={{ cursor: 'pointer', backgroundColor: 'white' }}
                  >
                    Category
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><Link className="dropdown-item px-4 py-2" to="#">SmartWatches</Link></li>
                    <li><Link className="dropdown-item px-4 py-2" to="#">Google Pixels</Link></li>
                    <li><Link className="dropdown-item px-4 py-2" to="#">Samsung</Link></li>
                    <li><Link className="dropdown-item px-4 py-2" to="#">Apple</Link></li>
                    <li><Link className="dropdown-item px-4 py-2" to="#">Iphone 12 Pro Max</Link></li>
                    <li><Link className="dropdown-item px-4 py-2" to="#">OnePlus</Link></li>
                  </ul>
                </div>
              </li>

              <li className="nav-item px-2">
                <Link className="nav-link active hov" to="/Contact">Contact Us</Link>
              </li>
            </ul>

            <div>
              <ul className="d-flex list-unstyled mb-0">
                {/* Search Icon with Hover Effect */}
                <li
                  className="px-2 position-relative"
                  onMouseEnter={() => setSearchHovered(true)}
                  onMouseLeave={() => setSearchHovered(false)}
                >
                  <Link to="#">
                    <i className="fa-solid fa-magnifying-glass" style={{ color: '#000' }} />
                  </Link>
                  {searchHovered && (
                    <input
                      type="text"
                      className="form-control position-absolute"
                      placeholder="Search..."
                      style={{
                        top: '25px',
                        right: '1px',
                        width: '200px',
                        zIndex: '1',
                        transition: 'all 0.3s ease-in-out'
                      }}
                    />
                  )}
                </li>

                {/* User Icon with Dropdown */}
                <li className="px-2">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle border-0"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ cursor: 'pointer', backgroundColor: 'white' }}
                    >
                      <i className="fa-regular fa-user" style={{ color: '#000' }} />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li><Link className="dropdown-item" to="/Login">Login</Link></li>
                      <li><Link className="dropdown-item" to="/Register">Register</Link></li>
                    </ul>
                  </div>
                </li>

                {/* Cart Icon */}
                <li className="px-2">
                  <Link to="#">
                    <i className="fa-solid fa-cart-shopping" style={{ color: '#000' }} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
