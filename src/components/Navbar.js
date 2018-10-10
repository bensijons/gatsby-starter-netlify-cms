import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <h1>Heim</h1>
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          Um Gunnar Pál
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
