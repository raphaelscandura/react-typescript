import foodmenu from 'data/foodmenu.json';
import styles from './home.module.scss';
import theme from 'styles/theme.module.scss';
import ourHome from 'assets/our_home.png';
import { useNavigate } from 'react-router-dom';
import { PlateInterface } from 'types/PlateInterface';

export default function Home(){
	const navigate = useNavigate();
	let recommendedPlates = [...foodmenu];
	recommendedPlates = recommendedPlates.sort(()=>0.5 - Math.random()).splice(0,3);

	function redirectMoreInfo(plate: PlateInterface){
		navigate(`/plate/${plate.id}}`,{state:{plate}});
	}

	return(
		<section>
			<h3 className={theme.title}>Recommendations</h3>
			<div className={styles.recommendations}>
				{recommendedPlates.map(item =>(
					<div key={item.id} className={styles.recommended}>
						<div className={styles.recommended_image}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button 
							className={styles.recommended_button}
							onClick={() => redirectMoreInfo(item)}
						>
							More
						</button>
					</div>
				))}
			</div>
			<h3 className={theme.title}>Location</h3>
			<div className={styles.ourHome}>
				<img src={ourHome} alt="Buyhood's location" />
				<div className={styles.ourHome_address}>
					3600 S Las Vegas Blvd, Las Vegas <br/><br/> NV 89109, United States
				</div>
			</div>
		</section>
	);
}