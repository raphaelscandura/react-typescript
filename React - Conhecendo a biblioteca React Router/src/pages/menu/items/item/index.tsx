import styles from './item.module.scss';
import foods from 'data/foodmenu.json';
import PlateTags from 'components/platetags';
import { useNavigate } from 'react-router-dom';

type ItemsInterface = typeof foods[0];

export default function Item(props:ItemsInterface){
	const {id,title,description,photo} = props;
	const navigate=useNavigate();
	return (
		<div 
			className={styles.item}
			onClick={()=>navigate(`/plate/${id}`)}
		>
			<div className={styles.item_image}>
				<img src={photo} alt={title} />
			</div>
			<div className={styles.item_description}>
				<div className={styles.item_title}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<PlateTags {...props}/>
			</div>
		</div>
	);
}