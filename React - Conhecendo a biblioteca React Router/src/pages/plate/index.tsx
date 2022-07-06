import styles from './plate.module.scss';
import { useParams, useNavigate, Route, Routes } from 'react-router-dom';
import foodmenu from 'data/foodmenu.json';
import PlateTags from 'components/platetags';
import NotFound from 'pages/notfound';
import Template from 'pages/template';

export default function Plate(){
	const navigate=useNavigate();
	const {id}=useParams();
	const plate=foodmenu.find(item=>item.id===Number(id));
	if(!plate) return <NotFound/>;
	return (
		<Routes>
			<Route path="*" element={<Template/>}>
				<Route index element={
					<>
						<button 
							className={styles.goback}
							onClick={()=>navigate(-1)}
						>
							{'< Go back'}
						</button>
						<section className={styles.container}>
							<h1 className={styles.title}>
								{plate.title}
							</h1>
							<div>
								<img src={plate.photo} alt={plate.title} />
							</div>
							<div className={styles.content}>
								<p className={styles.content_description}>
									{plate.description}
								</p>
								<PlateTags {...plate}/>
							</div>
						</section>
					</>
				}/>
			</Route>
		</Routes>
	);
}