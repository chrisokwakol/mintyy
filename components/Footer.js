import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
				<div className={styles.footer1}>
					<h2>MINTY SOLUTIONS</h2>
					<ul>
						<li>Kemp House</li>
						<li>160 City Road</li>
						<li>London, EC1V 2NX</li>
						<li>United Kingdom</li>
						<br />
						<li>For inquiries: adam@mintysolutions.com</li>
					</ul>
				</div>
				<div className={styles.footer2}>
					<ul>
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>About Us</a>
						</li>
						<li>
							<a>Services</a>
						</li>
						<li>
							<a>Case Studies</a>
						</li>
					</ul>
				</div>
				<div className={styles.footer3}>
					<ul>
						<li>
							<a>Instagram</a>
						</li>
						<li>
							<a>Twitter</a>
						</li>
						<li>
							<a>TikTok</a>
						</li>
					</ul>
				</div>
			</footer>        
  )
}

export default Footer