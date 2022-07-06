import styles from './notfound.module.scss';
import theme from 'styles/theme.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function NotFound(){
	const navigate=useNavigate();
	return(
		<div className={classNames({
			[styles.container]:true,
			[theme.container]:true
		})}>
			<div className={styles.goback}>
				<button
					onClick={()=>navigate(-1)}
				>
					{'< Go Back'}
				</button>				
			</div>
			<NotFoundImage/>
		</div>
	);
}