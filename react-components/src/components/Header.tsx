import Menu from './Menu';
import styles from './header.module.scss';
import logo from '../assets/logo.webp';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <h1 className={styles.title}>Catalog of IT books</h1>
      <Menu />
    </div>
  );
}

export default Header;
