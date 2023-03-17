import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

function Menu() {
  return (
    <nav className={styles.header__nav}>
      <NavLink to="." end>
        Catalog
      </NavLink>
      <NavLink to="about">About Us</NavLink>
    </nav>
  );
}

export default Menu;
