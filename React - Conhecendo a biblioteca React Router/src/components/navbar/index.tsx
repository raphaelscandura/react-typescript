import styles from './navbar.module.scss';
import {Link} from 'react-router-dom';
import Logo from 'components/logo';

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
			<Logo/>
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