import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Squash as Hamburger, Squash } from "hamburger-react";
import HamburgerMenu from "./HamburgerMenu";

const Header = (props) => {
	const particlesInit = async (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};

	const [navbarOpen, setNavbarOpen] = useState(false);
	const burgerToggle = () => {
		setNavbarOpen((prev) => !prev);
	};

	const navLinksClasses = [
		styles.navLinks,
		`${navbarOpen ? styles.navActive : ""}`,
	];
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div onClick={burgerToggle}>
					<HamburgerMenu />
				</div>
				{/* <div className={styles.mobileNavBtn} onClick={() => navSlide}>
					<FontAwesomeIcon icon={faBars} />{" "}
				</div> */}
				{/* <ul className={navLinksClasses.join(" ")}>
					<li>
						<a href="http://localhost:3000/">Home</a>
					</li>
					<li>
						<a href="http://localhost:3000/services">Services</a>
					</li>
					<li>
						<a href="http://localhost:3000/casestudies">
							Case Studies
						</a>
					</li>
					<li>
						<a href="http://localhost:3000/contact">Contact</a>
					</li>
				</ul> */}
				<ul className={navLinksClasses.join(" ")}>
					<li>
						<a href="https://mintysolutions.vercel.app/">Home</a>
					</li>
					<li>
						<a href="https://mintysolutions.vercel.app/services">Services</a>
					</li>
					<li>
						<a href="https://mintysolutions.vercel.app/casestudies">
							Case Studies
						</a>
					</li>
					<li>
						<a href="https://mintysolutions.vercel.app/contact">Contact</a>
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
			<div className={styles.heroContentContainer}>
				<div className={styles.heroContent}>
					<h1>{props.title}</h1>
					{/* <h1>We Enhance Social Media Management and Marketing</h1> */}
					<p>
						Welcome to Minty Solutions, the all-in-one digital marketing service
						personalised to your project
					</p>
					<div className={styles.headerBtns}>
						<button className={styles.learnMoreBtn}>Learn More</button>
						<button className={styles.scheduleACallBtn}>
							Schedule a Call!
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
