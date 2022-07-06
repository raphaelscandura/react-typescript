import styles from './footer.module.scss';
import Logo from 'components/logo';

export default function Footer(){
	return (
		<footer className={styles.footer}>
			<Logo/>
		</footer>
	);
}