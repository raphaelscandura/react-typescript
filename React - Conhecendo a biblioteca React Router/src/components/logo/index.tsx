import styles from './logo.module.scss';
import logo from 'assets/buyhoodlogo.png';

export default function Logo(){
	return (
		<img 
			src={logo} 
			alt="Buyhood's logo"
			className={styles.navbar_logo}
		/>
	);
}