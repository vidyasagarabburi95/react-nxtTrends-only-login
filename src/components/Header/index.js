// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav>
    <div className="nav-items">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt=" website logo"
          className="web-logo"
        />
      </div>
      <ul>
        <Link to="/home" className="link-item">
          <li>Home</li>
        </Link>
        <Link to="/products" className="link-item">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="link-item">
          <li>Cart</li>
        </Link>
        <Link to="/logout" className="link-item">
          <li>
            <button type="button" className="logout-button ">
              Logout
            </button>
          </li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
