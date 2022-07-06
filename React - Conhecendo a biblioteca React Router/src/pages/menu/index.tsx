import styles from './foodmenu.module.scss';
import 'normalize.css';
import Search from './search';
import { useState } from 'react';
import Filter from 'pages/menu/filter';
import Ordering from './ordering';
import Items from './items';
import theme from 'styles/theme.module.scss';

export default function FoodMenu(){
	const [search,setSearch]=useState('');
	const [filter,setFilter]=useState<number|null>(null);
	const [ordering,setOrdering]=useState('');
	return (
		<section className={styles.foodmenu}>
			<h3 className={theme.title}>Menu</h3>
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
	);
}