import styles from './foodmenu.module.scss';
import logo from 'assets/buyhoodlogo.png';
import 'normalize.css';
import Search from './search';
import { useState } from 'react';
import Filter from 'pages/menu/filter';
import Ordering from './ordering';
import Items from './items';

export default function FoodMenu(){
	const [search,setSearch]=useState('');
	const [filter,setFilter]=useState<number|null>(null);
	const [ordering,setOrdering]=useState('');
	return (
		<main>
			<nav className={styles.menu}>
				<img 
					src={logo} 
					alt="Buyhood's logo"
					className={styles.menu_logo}
				/>
			</nav>
			<header className={styles.header}>
				<div className={styles.header_text}>
                    Eat, code, repeat.
				</div>
			</header>
			<section className={styles.foodmenu}>
				<h3 className={styles.foodmenu_title}>Menu</h3>
				<Search
					search={search}
					setSearch={setSearch}
				/>
				<div className={styles.foodmenu_filters}>
					<Filter
						filter={filter}
						setFilter={setFilter}
					/>
					<Ordering 
						ordering={ordering}
						setOrdering={setOrdering}
					/>
				</div>
				<Items
					ordering={ordering}
					filter={filter}
					search={search}
				/>
			</section>
		</main>
	);
}