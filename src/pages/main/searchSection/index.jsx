import SearchBar from "./searchBar"
import styles from './styles.module.css'


function SearchSection() {
    return <div className={styles.searchSection}>
        <div>
            <h3 className={styles.searchTitle}>Один клик и работа в кармане</h3>
        </div>
        <SearchBar/>
    </div>
}
export default SearchSection