import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.mobileNavBtn} onClick={() => navSlide}>
					<FontAwesomeIcon icon={faBars} />{" "}
				</div>
				<ul className={styles.navLinks}>
					<li>
						<a href="http://localhost:3000/">Home</a>
					</li>
					<li>
						<a href="http://localhost:3000/services">Services</a>
					</li>
					<li>
						<a href="http://localhost:3000/casestudies">Case Studies</a>
					</li>
					<li>
						<a href="http://localhost:3000/contact">Contact</a>
					</li>
				</ul>
				{/* <Image
							src="/images/logo/logo-light.png"
							alt=""
							width={180}
							height={80}
						/> */}
				<button className={styles.scheduleACallBtn}>Schedule a Call!</button>
			</nav>
			{/* <div className={styles.heroContentContainer}> */}
			<div className={styles.heroContent}>
				<h1>{ props.title }</h1>
				{/* <h1>We Enhance Social Media Management and Marketing</h1> */}
				<p>
					Welcome to Minty Solutions, the all-in-one digital marketing service
					personalised to your project
				</p>
				<div className={styles.headerBtns}>
					<button className={styles.learnMoreBtn}>Learn More</button>
					<button className={styles.scheduleACallBtn}>Schedule a Call!</button>
				</div>
			</div>
			{/* </div> */}
		</header>
	);
};

export default Header;
