import styles from './Foodmenu.module.scss'
import logo from "../../assets/buyhoodlogo.png"

export default function FoodMenu(){
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="Buyhood's logo" />
            </nav>
        </main>
    )
}