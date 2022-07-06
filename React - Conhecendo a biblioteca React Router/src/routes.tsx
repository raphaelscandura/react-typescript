import Footer from 'components/footer';
import Navbar from 'components/navbar';
import About from 'pages/about';
import Home from 'pages/home';
import FoodMenu from 'pages/menu';
import NotFound from 'pages/notfound';
import Plate from 'pages/plate';
import Template from 'pages/template';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

export default function AppRouter(){
	return (
		<main className='container'>
			<Router>
				<Navbar/>
				<Routes>
					<Route path='/' element={<Template/>}>
						<Route index element={<Home/>}/>
						<Route path='foodmenu' element={<FoodMenu/>}/>
						<Route path='about' element={<About/>}/>
					</Route>
					<Route path='*' element={<NotFound/>}/>
					<Route path='plate/:id' element={<Plate/>}/>
				</Routes>
				<Footer/>
			</Router>
		</main>
	);
}