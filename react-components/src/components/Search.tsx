import styles from './header.module.scss';

function Search() {
  return <input className={styles.search} placeholder="Search books" />;
}

export default Search;
