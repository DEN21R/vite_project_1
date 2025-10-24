import locationSvg from '../../../../../assets/icons/locationSvg.svg'
import styles from './styles.module.css'

function CardVacancies({svg,title,position,location,logoJob,info}) {
    return(
        <div className={styles.containerVacancies}>
            <div className={styles.VacanciesBlock}>
                <img src={svg} alt="svg" />
                <p>{title}</p>
            </div>
            <h4>{position}</h4>
            <div className={styles.VacanciesBlock}>
                <img src={locationSvg} alt="" />
                <p>{location}</p>
            </div>
            <div className={styles.VacanciesBlock}>
                <img src={logoJob} alt="" />
                <p>{info}</p>
            </div>
        </div>
    )
}
export default CardVacancies