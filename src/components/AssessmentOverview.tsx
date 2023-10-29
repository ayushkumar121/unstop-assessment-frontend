"use client"
import { useState } from "react";
import Image from "next/image";

import styles from "./AssessmentOverview.module.css"

export default function AssessmentOverview() {
    const [mobileActive, setMobileActive] = useState(false);
    
    return (
	<div className={`${styles.container} ${mobileActive? styles.active: ""}`}>
      		<span className={styles.heading}>Assessments Overview</span>
      		<div className={styles.stats}>
			<div>
				<span className={styles.statHeading}>
					Total Assessment
				</span>
				<span className={styles.stat}>
       					<Image 
					alt="view_agenda"
					src="/view_agenda.svg" 
					width={20} 
					height={20}	
					/>
					<span className={styles.singleStat}>34</span>
				</span>
			</div>
			<div>
				<span className={styles.statHeading}>
					Candidates
				</span>
				<span className={styles.stat}>
       					<Image 
					alt="candidates"
					src="/group.svg" 
					width={20} 
					height={20}	
					/>
					<span className={styles.substats}>
						<span>11,145</span>
						<span>+89</span>
						<span>Total Candidates</span>
					</span>
					<span className={styles.substats}>
						<span>1,14</span>
						<span>+89</span>
						<span>Who Attempted</span>
					</span>
				</span>
			</div>
			<div>
				<span className={styles.statHeading}>
					Candidate Sources
				</span>
				<span className={styles.stat}>
       					<Image 
					alt="sources"
					src="/captive_portal.svg" 
					width={20} 
					height={20}	
					/>
					<span className={styles.substats}>
						<span>11,000</span>
						<span>+89</span>
						<span>E-Mail</span>
					</span>
					<span className={styles.substats}>
						<span>11,000</span>
						<span>+89</span>
						<span>Social Share</span>
					</span>
					<span className={styles.substats}>
						<span>11,000</span>
						<span>+89</span>
						<span>Unique Link</span>
					</span>
				</span>
			</div>
			<div>
				<span className={styles.statHeading}>
					Total Purpose
				</span>
				<span className={styles.stat}>
       					<Image 
					alt="link"
					src="/link.svg" 
					width={20} 
					height={20}	
					/>
					<span className={styles.singleStat}>11</span>
				</span>
			</div>
      		</div>
      		<div className={styles.mobileMenu}>
      			<button>
       			<Image 
				alt="search"
				src="/search.svg" 
				width={22} 
				height={22}	
			/>
      			</button>
      			<button>
       			<Image 
				alt="filter"
				src="/filter_list_alt.svg" 
				width={22} 
				height={22}	
			/>
      			</button>
      			<button onClick={() => setMobileActive(!mobileActive)}>
       			<Image 
				alt="chart"
				src="/bar_chart.svg" 
				width={16} 
				height={16}	
			/>

      			</button>
      		</div>
	</div>
    );
}
