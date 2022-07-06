import styles from './about.module.scss';
import theme from 'styles/theme.module.scss';
import pasta1 from 'assets/about/pasta1.png';
import pasta2 from 'assets/about/pasta2.png';
import ourhomefrontview from 'assets/about/frontview.png';

export default function About(){
	const images = [pasta1,pasta2];
	return (
		<section>
			<h3 className={theme.title}>About</h3>
			<div className={styles.aboutUs}>
				<img src={ourhomefrontview} alt="Buyhood's home"/>
				<div className={styles.aboutUs_text}>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla unde porro, quidem sed nihil aspernatur enim doloremque cupiditate velit, quo dicta nobis, a quam blanditiis quibusdam iste dolore debitis?</p>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos neque quas explicabo voluptatem culpa maiores reiciendis, nihil, adipisci corrupti laborum distinctio est aliquid deserunt aspernatur! Rem quasi fuga saepe sit.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus similique nulla laborum quis quia blanditiis assumenda cumque sapiente error molestiae aperiam iusto, sint et pariatur. Numquam sequi incidunt suscipit minus.</p>
				</div>
			</div>
			<div className={styles.images}>
				{images.map((image,index)=>(
					<div key={index} className={styles.images_image}>
						<img src={image} alt="Pasta" />
					</div>
				))}
			</div>
		</section>
	);
}