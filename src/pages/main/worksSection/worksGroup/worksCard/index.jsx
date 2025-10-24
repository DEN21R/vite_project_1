import styles from './styles.module.css'

function WorksCard({logo,text,stylesBackgraund}) {
    return <div className={styles[stylesBackgraund]}>
        <img src={logo} alt="logo" />
            <p className={styles.cardParag}>{text}</p>
    </div>
}
export default WorksCard