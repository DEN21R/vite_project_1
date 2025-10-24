import styles from './styles.module.css'

import coolJobIconLight from '../../assets/images/Cooljob1.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import google from '../../assets/icons/google.svg'
import twitter from '../../assets/icons/twitter.svg'
import facebook from '../../assets/icons/fbicon.svg'

function Footer() {
    const citys = ['Осака','Коясан','Токио','Хаконэ','Наэба','Томаму','Йокогама','Нагоя','Саппоро','Кобе']
    return<div className={styles.footerSection}>
        <div className={styles.citysSection}>
            <p>Популярные города</p>
            <div>
                {citys.map((el,i)=> <a href="" key={i}>{el}</a>)}
            </div>
        </div>
        <div className={styles.logoSection}>
            <img src={coolJobIconLight} alt="" />
            <div>
                <a href="https://linkedin.com"><img src={linkedin} alt="linkedins" /></a>
                <a href="https://google.com"><img src={google} alt="google" /></a>
                <a href="https://twitter.com"><img src={twitter} alt="twitter" /></a>
                <a href="https://facebook.com"><img src={facebook} alt="facebook" /></a>
            </div>
        </div>
    </div>
}
export default Footer