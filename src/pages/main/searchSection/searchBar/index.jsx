import search from '../../../../assets/icons/search.svg'
import locationSvg from '../../../../assets/icons/locationSvg.svg'
import styles from './styles.module.css'


function SearchBar() {
    return <div className={styles.searchConteiner}>
        <form className={styles.searchBar}>
            <div  className={styles.inputBlock}>
                <img src={search} alt="" />
                <input type="text" placeholder='Должность или компания' />
            </div>
             <span className={styles.divider} />
            <div  className={styles.inputBlock}>
                <img src={locationSvg} alt="" />
                <input type="text" placeholder='Город, Страна' />
            </div>
           </form>
         <button className={styles.searchButton}>Поиск</button>
    </div>
}
export default SearchBar