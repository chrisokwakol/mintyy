import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/PreFooter.module.css";

function PreFooter() {
	return (
		<div className={styles.preFooter}>
			<div className={styles.content}>
				<FontAwesomeIcon icon={faRocket} className={styles.preFooterIcon} />{" "}
				<h4>
					Get Seen With Us and Take Your Project to the Next Level Now to See
					Results!
				</h4>
				<a>Arrange a Meeting</a>
			</div>
		</div>
	);
}

export default PreFooter;
