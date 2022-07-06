import foodmenu from 'data/foodmenu.json';
import styles from './home.module.scss';
import theme from 'styles/theme.module.scss';

export default function Home(){
	let recommendedPlates = [...foodmenu];
	recommendedPlates = recommendedPlates.sort(()=>0.5 - Math.random()).splice(0,3);
	return(
		<section>
			<h3 className={theme.title}>Recommendations</h3>
			<div className={styles.recommendations}>
				{recommendedPlates.map(item =>(
					<div key={item.id} className={styles.recommended}>
						<div className={styles.recommended_image}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button className={styles.recommended_button}>More</button>
					</div>
				))}
			</div>
		</section>
	);
}