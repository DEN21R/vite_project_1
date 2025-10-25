import styles from './styles.module.css'
import WorksGroup from "./worksGroup"
import VacanciesGroup from "./vacanciesGroup"
import ButtonSection from './buttonSection'



function WorksSection() {
   
    return(
    <div className={styles.worksSection}>
        <div>
            <h3 className={styles.workTitle}>Работа по категориям</h3>
            <WorksGroup/>
        </div>
        <div>
            <h3 className={styles.vacanTitle}>Новые вакансии</h3>
            <p className={styles.vacanText}>Найди работу своей мечты прямо сейчас</p>
            <VacanciesGroup/>
        </div>
        <div>
            <ButtonSection/>
        </div>
        
    </div>)
}
export default WorksSection