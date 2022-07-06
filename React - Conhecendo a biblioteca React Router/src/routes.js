import Home from 'pages/home';
import FoodMenu from 'pages/menu';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

export default function AppRouter(){
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/foodmenu' element={<FoodMenu/>}/>
			</Routes>
		</Router>
	);
}