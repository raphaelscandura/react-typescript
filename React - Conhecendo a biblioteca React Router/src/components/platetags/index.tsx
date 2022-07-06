import classNames from 'classnames';
import { PlateInterface } from 'types/PlateInterface';
import styles from './platetags.module.scss';

export default function PlateTags({
	category,
	size,
	serving,
	price
}: PlateInterface){
	return (
		<div className={styles.tags}>
			<div className={classNames({
				[styles.tags_type]:true,
				[styles[`tags_type_${category.label.toLowerCase()}`]]:true
			})}>{category.label}</div>
			<div className={styles.tags_size}>
				{size}g
			</div>
			<div className={styles.tags_amountppl}>
				Enough for {serving} {serving>1?'people':'person'}
			</div>
			<div className={styles.tags_price}>
				${price.toFixed(2)}							
			</div>
		</div>
	);
}