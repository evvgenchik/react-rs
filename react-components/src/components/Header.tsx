import Menu from './Menu';
import Search from './Search';
import styles from './header.module.scss';
import logo from '../assets/logo.webp';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <Search />
      <Menu />
    </div>
  );
}

export default Header;
