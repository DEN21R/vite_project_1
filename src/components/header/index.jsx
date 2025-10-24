import CooljobIcon from '../../assets/icons/Cooljob_Icon.svg'
import styles from './styles.module.css'

function Header() {
    return <header className={styles.header}>
        <img src={CooljobIcon} alt="Cooljob" className={styles.coolJobIcon} />
        <section>
           <ul>
            <li>
                <a href="">Поиск работы</a>
            </li>
            <li>
                <a href="">Поиск стартапов</a>
            </li>
           </ul>
           
            <div>
                <a href="">Регистрация</a>
                <button>Вход</button>
            </div>
        </section>
    </header>
}
export default Header