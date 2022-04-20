import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/CaseStudies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBarsProgress,
	faBezierCurve,
	faSearchDollar,
	faRocket,
} from "@fortawesome/free-solid-svg-icons";
import {
	faCircleCheck,
	faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import Header from "../components/Header";
import PreFooter from "../components/PreFooter";
import Footer from "../components/Footer";

function CaseStudies() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Minty Solutions - Case Studies</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{/* HEADER */}
				<Header title="Case Studies"/>
				<p>Comparison as of April 2022</p>
				<h1>How Minty Compares to  Other Marketing Agencies</h1>
				

				{/* PRE FOOTER */}
				<PreFooter />
			</main>

			<Footer />
		</div>
	);
}

export default CaseStudies;
