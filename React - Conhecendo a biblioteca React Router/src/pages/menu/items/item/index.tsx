import styles from './item.module.scss';
import foods from '../items.json';
import classnames from 'classnames';

type ItemsInterface = typeof foods[0];

export default function Item(props:ItemsInterface){
	const {title,description,category,price,serving,size,photo} = props;
	return (
		<div className={styles.item}>
			<div className={styles.item_image}>
				<img src={photo} alt={title} />
			</div>
			<div className={styles.item_description}>
				<div className={styles.item_title}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<div className={styles.item_tags}>
					<div className={classnames({
						[styles.item_type]:true,
						[styles[`item_type_${category.label.toLowerCase()}`]]:true
					})}>
						{category.label}
					</div>
					<div className={styles.item_portion}>
						{size}
					</div>
					<div className={styles.item_amountppl}>
                        Enough for {serving} {serving>1?'people':'person'}
					</div>
					<div className={styles.item_price}>
                        ${price.toFixed(2)}
					</div>
				</div>
			</div>
		</div>
	);
}