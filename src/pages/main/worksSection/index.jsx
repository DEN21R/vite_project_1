import WorksGroup from "./worksGroup"
import styles from './styles.module.css'


function WorksSection() {
   
    return <div className={styles.worksSection}>
        <h3 className={styles.workTitle}>Работа по категориям</h3>
        <WorksGroup/>
    </div>
}
export default WorksSection