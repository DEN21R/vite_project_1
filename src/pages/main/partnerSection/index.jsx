import disney from '../../../assets/images/disney.svg'
import facebook from '../../../assets/images/facebk.svg'
import microsoft from '../../../assets/images/microsoft.svg'
import sony from '../../../assets/images/sony.svg'
import cola from '../../../assets/images/cola.svg'

import styles from './styles.module.css'

function PartnerSection() {
    return <div className={styles.partnerSection}>
        <div>
            <p>Помогаем найти работу:</p>
        </div>
        <div className={styles.partner}>
            <img src={disney} alt="" />
            <img src={facebook} alt="" />
            <img src={microsoft} alt="" />
            <img src={sony} alt="" />
            <img src={cola} alt="" />
        </div>
    </div>
}
export default PartnerSection