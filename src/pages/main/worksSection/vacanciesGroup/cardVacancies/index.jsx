import locationSvg from '../../../../../assets/icons/locationSvg.svg'
import styles from './styles.module.css'

function CardVacancies({svg,title,position,location,logoJob,info}) {
    return(
        <div className={styles.containerVacancies}>
            <div className={styles.VacanciesBlock}>
                <img src={svg} alt="svg" />
                <p className={styles.vacanciesBlockTitle}>{title}</p>
            </div>
            <h4 className={styles.vacanciesBlockTopic}>{position}</h4>
            <div className={styles.VacanciesBlock}>
                <img src={locationSvg} alt="locationSvg" className={styles.locationSvg}/>
                <p className={styles.vacanciesBlockText}>{location}</p>
            </div>
            <div className={styles.VacanciesBlock}>
                <img src={logoJob} alt="logoJob" />
                <p className={styles.vacanciesBlockText}>{info}</p>
            </div>
        </div>
    )
}
export default CardVacancies