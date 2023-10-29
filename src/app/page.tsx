"use client";
import { useState } from "react";

import Image from "next/image"
import styles from "./page.module.css"

import MyAssessments from "../components/MyAssessments.tsx"; 
import Navigation from "../components/Navigation.tsx"; 

export default function Home() {
  const [mobileActive, setMobileActive] = useState(false);

  return (
    <main className={styles.main}>
    	<Navigation 
    		mobileActive={mobileActive} 
    		closeCallback={() => setMobileActive(false)}
    	/>
    	<div className={styles.contents}>
		<div className={styles.header}>
			<span className={styles.heading}>
			<button 
				className={styles.mobileActive} 
				onClick={() => setMobileActive(!mobileActive)}>
				<Image 
					src="/menu.svg" 
					alt="menu"
					width={40}
					height={40}
				/>
			</button>
				Assessment
			</span>
			<div className={styles.topMenu}>
				<span className={styles.selected}>
					My Assessments
				</span>
				<span>
					Unstop Assessments
				</span>
			</div>
		</div>


		<div className={styles.body}>
			<MyAssessments />
		</div>
    	</div>
    </main>
  )
}
