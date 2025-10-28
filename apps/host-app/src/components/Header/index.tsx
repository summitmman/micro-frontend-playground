import { NavLink } from 'react-router-dom';
import { routes } from '../../router/routes';
import styles from './Header.module.css';

const Header = () => {
  return <header className={styles.headerContainer}>
    <div className={styles.logo}>
      Host React Header
    </div>
    <nav>
      <ul className="flex gap-4">
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink 
              to={route.navPath || route.path}
              className={({ isActive }) => 
                isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink
              }
            >
              {route.displayName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>;
};

export default Header;