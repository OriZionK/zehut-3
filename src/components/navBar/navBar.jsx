import React, { useState } from 'react';
import './navBar.css'; 
import { Link } from 'react-router-dom';

  function NavBar () {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <div className="container menu">
          <div className="logo">
            <img src="src/assets/logo.png" alt="הזהות השלישית Logo" />
          </div>
          <ul className={menuOpen ? "active" : ""}>
            <li>
              <Link to="/contact-us" className="link">
צרו קשר
              </Link>
            </li>
            <li>
              <Link to="/faq" className="link">
שאלות ותשובות
              </Link>
            </li>
            <li>
              <Link to="/wrote-about-us" className="link">
כתבו עלינו        
      </Link>
            </li>
            <li>
              <Link to="/updates" className="link">
                עדכונים
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
מי אנחנו
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
ראשי
              </Link>
            </li>
          </ul>
 
          {/* here if ge signed in he should see enter profile option instead of "get started"  */}
        </div>
    </nav>
  );
}

export default NavBar;