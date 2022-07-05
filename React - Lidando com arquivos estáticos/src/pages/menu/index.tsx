import styles from './foodmenu.module.scss'
import logo from "assets/buyhoodlogo.png"
import "normalize.css"
import Search from './search'
import { useState } from 'react'
import Filter from 'pages/filter'

export default function FoodMenu(){
    const [search,setSearch]=useState("");
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
            <section className={styles.foodmenu}>
                <h3 className={styles.foodmenu_title}>Menu</h3>
                <Search
                    search={search}
                    setSearch={setSearch}
                />
                <div className={styles.cardapio_filtros}>
                    <Filter/>
                </div>
            </section>
        </main>
    )
}