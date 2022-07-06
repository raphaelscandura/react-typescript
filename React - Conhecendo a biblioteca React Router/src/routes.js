import Navbar from 'components/navbar';
import Home from 'pages/home';
import FoodMenu from 'pages/menu';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import styles from './routes.module.scss';

export default function AppRouter(){
	return (
		<main>
			<Router>
				<Navbar/>
				<header className={styles.header}>
					<div className={styles.header_text}>
						Eat, code, repeat.
					</div>
				</header>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/foodmenu' element={<FoodMenu/>}/>
				</Routes>
			</Router>
		</main>
	);
}