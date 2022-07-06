import styles from './template.module.scss';
import {Outlet} from 'react-router-dom';

export default function Template(){
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header_text}>
					Eat, code, repeat.
				</div>
			</header>
			<div>
				<Outlet/>
			</div>
		</>
	);
}