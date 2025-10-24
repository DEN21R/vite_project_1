import styles from './styles.module.css'
import WorksGroup from "./worksGroup"
import VacanciesGroup from "./vacanciesGroup"



function WorksSection() {
   
    return(
    <div className={styles.worksSection}>
        <div className={styles.jobSection}>
            <h3 className={styles.workTitle}>Работа по категориям</h3>
            <WorksGroup/>
        </div>
        <div>
            <h3>Новые вакансии</h3>
            <p>Найди работу своей мечты прямо сейчас</p>
            <VacanciesGroup/>
        </div>
        
    </div>)
}
export default WorksSection