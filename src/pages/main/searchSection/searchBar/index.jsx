import search from '../../../../assets/icons/search.svg'
import location from '../../../../assets/icons/location.svg'
import styles from './styles.module.css'


function SearchBar() {
    return <div>
        <form className={styles.searchBar}>
            <div>
                <img src={search} alt="" />
                <input type="text" placeholder='Должность или компания' />
            </div>
            <div>
                <img src={location} alt="" />
                <input type="text" placeholder='Город, Страна' />
            </div>
            <button>Поиск</button>
        </form>
    </div>
}
export default SearchBar