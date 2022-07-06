import styles from './template.module.scss';
import {Outlet} from 'react-router-dom';
import theme from 'styles/theme.module.scss';

export default function Template(){
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header_text}>
					Eat, code, repeat.
				</div>
			</header>
			<div className={theme.container}>
				<Outlet/>
			</div>
		</>
	);
}