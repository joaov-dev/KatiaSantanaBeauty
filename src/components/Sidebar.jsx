import { InstagramLogo } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

import katia   from '../assets/katia.png'
import salao   from '../assets/salao.png'

export function Sidebar(){
	return(
		<aside className={styles.sidebar}>
			<img 
				className={styles.cover} 
				src={salao}
			/>

			<div className={styles.profile}>
				<Avatar src={katia}/>

				<strong>Katia Santana</strong>
				<span>Esteticista & Empreendedora</span>
			</div>

			<footer>
				<a href="https://www.instagram.com/katiasantanabeauty/">
					<InstagramLogo size={20}/>
					Instagram
				</a>
			</footer>
		</aside>
	);
}