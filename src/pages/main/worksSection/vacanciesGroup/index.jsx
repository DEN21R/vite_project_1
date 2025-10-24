import EllipseBlue from "../../../../assets/icons/EllipseBlue.svg"
import EllipsePink from "../../../../assets/icons/EllipsePink.svg"
import EllipseGreen from "../../../../assets/icons/EllipseGreen.svg"
import EllipseOrange from "../../../../assets/icons/EllipseOrange.svg"
import EllipseRed from "../../../../assets/icons/EllipseRed.svg"
import EllipseBlack from "../../../../assets/icons/EllipseBlack.svg"
import SonyJob from "../../../../assets/icons/SonyJob.svg"
import facebookJob from "../../../../assets/icons/facebookJob.svg"
import ColaJob from "../../../../assets/icons/ColaJob.svg"
import CardVacancies from "./cardVacancies"

import styles from './styles.module.css'


function VacanciesGroup() {

    const jobs = [
        {
            svg:EllipseBlue,
            title:"Финансы",
            position:"Менеджер по управлению финансами в крупной компании",
            location:"Осака, Япония",
            logoJob:SonyJob,
            info:"Sony, 3 дня назад"
        },
        {
            svg:EllipsePink,
            title:"Продажи",
            position:"Специалист по продажам",
            location:"Коясан, Япония",
            logoJob:facebookJob,
            info:"Facebook, 7 дней назад"
        },
        {
            svg:EllipseGreen,
            title:"Служба поддержки",
            position:"Оператор колл центра",
            location:"Томаму, Япония",
            logoJob:ColaJob,
            info:"CocaCola, 1 день назад"
        },
        {
            svg:EllipseOrange,
            title:"Мультимедиа",
            position:"Системный администратор",
            location:"Токио, Япония",
            logoJob:SonyJob,
            info:"Sony, 3 дня назад"
        },
        {
            svg:EllipseRed,
            title:"Дизайн",
            position:"Дизайнер интерьера в профессиональную студию в центре города",
            location:"Йокогама, Япония",
            logoJob:facebookJob,
            info:"Facebook, 7 дней назад"
        },
        {
            svg:EllipseBlack,
            title:"Грузоперевозки",
            position:"Водитель на дальние дистанции",
            location:"Кобе. Япония",
            logoJob:ColaJob,
            info:"CocaCola, 1 день назад"
        },

    ]
    return <div className={styles.vacanciesGroup}>
        {jobs.map((el,i)=>(
            <CardVacancies
            key={i}
            svg={el.svg}
            title={el.title}
            position={el.position}
            location={el.location}
            logoJob={el.logoJob}
            info={el.info}/>
        ))}
    </div>
}
export default VacanciesGroup