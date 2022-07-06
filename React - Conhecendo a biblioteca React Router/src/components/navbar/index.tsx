import logo from 'assets/buyhoodlogo.png';
import styles from './navbar.module.scss';
import {Link} from 'react-router-dom';

export default function Navbar(){
	const routes=[
		{
			label: 'Home',
			to:'/'
		},
		{
			label: 'Foodmenu',
			to:'/foodmenu'
		},
		{
			label: 'About',
			to:'/about'
		}
	];
	return (
		<nav className={styles.navbar}>
			<img 
				src={logo} 
				alt="Buyhood's logo"
				className={styles.navbar_logo}
			/>
			<ul className={styles.navbar_list}>
				{routes.map((route,index)=>(
					<li key={index} className={styles.navbar_link}>
						<Link to={route.to}>{route.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}