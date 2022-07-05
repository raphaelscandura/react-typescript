import styles from './Foodmenu.module.scss'
import logo from "assets/buyhoodlogo.png"
import "normalize.css"

export default function FoodMenu(){
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="Buyhood's logo" className={styles.menu_logo}/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header_text}>
                    Eat, code, love.
                </div>
            </header>
        </main>
    )
}