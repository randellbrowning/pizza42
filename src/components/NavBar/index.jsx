import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { useAuth0 } from "../../react-auth0-wrapper";

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
export default function NavBar() {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
        <Link className="navbar-brand" to="/">
          pizza42
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="Blank">
            Home
          </Link>
          <Link className="nav-item nav-link active" to="Grid">
            Menu
          </Link>

          {/* NEW - add a link to the home and profile pages */}
    {isAuthenticated && (
        <Link className="nav-item nav-link active" to="/profile">Profile</Link>
    )}

          <div>
      {!isAuthenticated && (
        <Link className="nav-item nav-link active" to="#"
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </Link>
      )}

      {isAuthenticated && <Link className="nav-item nav-link active" to="#" onClick={() => logout()}>Log out</Link>}

          
    
    </div>

        </div>
        
      </nav>
    </React.Fragment>
  );
}
