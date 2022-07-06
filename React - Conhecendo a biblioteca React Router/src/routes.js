import Navbar from 'components/navbar';
import About from 'pages/about';
import Home from 'pages/home';
import FoodMenu from 'pages/menu';
import Template from 'pages/template';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

export default function AppRouter(){
	return (
		<main>
			<Router>
				<Navbar/>
				<Routes>
					<Route path='/' element={<Template/>}>
						<Route index element={<Home/>}/>
						<Route path='foodmenu' element={<FoodMenu/>}/>
						<Route path='about' element={<About/>}/>
					</Route>
				</Routes>
			</Router>
		</main>
	);
}