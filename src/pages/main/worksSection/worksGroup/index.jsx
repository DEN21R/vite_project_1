import Finance from "../../../../assets/icons/finance.svg"
import Truck from "../../../../assets/icons/truck.svg"
import Design from "../../../../assets/icons/design.svg"
import Restaurant from "../../../../assets/icons/restaurant.svg"
import Medicin from "../../../../assets/icons/medicine.svg"
import Multimedia from "../../../../assets/icons/multimedia.svg"
import Chat from "../../../../assets/icons/chat.svg"
import Management from "../../../../assets/icons/management.svg"
import Cart from "../../../../assets/icons/cart.svg"
import Arrow from "../../../../assets/icons/arrow.svg"
import WorksCard from "./worksCard"

import styles from './styles.module.css'
function WorksGroup() {
     const cards = [
        {
          logo: Finance,
          text: "Финансы"
        },
        {
          logo: Truck,
          text: "Грузоперевозки"
        },
        {
          logo: Design,
          text: "Дизайн"
        },
        {
          logo: Restaurant,
          text: "Ресторанный бизнес"
        },
        {
          logo: Medicin,
          text: "Медицина"
        },
        {
          logo: Multimedia,
          text: "Мультимедиа"
        },
        {
          logo: Chat,
          text: "Служба поддержкиайн"
        },
        {
          logo: Management,
          text: "Менеджмент"
        },
        {
          logo: Cart,
          text: "Продажи"
        },
        {
          logo: Arrow,
          text: <a href="" >Больше категорий</a>
        }
      ]
    return <div className={styles.worksGroup}>
      {cards.map((el,i)=>(
        <WorksCard 
        key={i}
        logo={el.logo}
        text={el.text}
        stylesBackgraund={i===cards.length -1 ? "moreCard":"cardStyle"}/>
      ))}
    </div>
}
export default WorksGroup