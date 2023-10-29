"use client";
import { useState } from "react";
import Image from "next/image";

import styles from "./MyAssessments.module.css";
import AssessmentCard from "./AssessmentCard.tsx";

const defaultAssessments = [
	{ name: "Maths Assessment", purpose: "Job", duration: 1, question: 2 },
	{ name: "Unstop Assessment", purpose: "Job", duration: 1, question: 2 },
	{ name: "GFG Assessment", purpose: "Job", duration: 1, question: 2 },
];

export default function MyAssessments() {
   const [assessments, setAssessments] = useState(defaultAssessments);
   const [popupOpened, setPopupOpened] = useState(false);

   return (
       <>
       <div className={styles.container}>
      		<span className={styles.heading}>My Assessment</span>
      		<div className={styles.scrollableBox}>
      			<div className={styles.newAssessments} onClick={() => setPopupOpened(true)}>
      				<div className={styles.addButton}>	
      					<Image
      						className={styles.addButtonImg}
						src="/add.svg"
						alt="add"
						width={40}
						height={40}
      					/>
      				</div>
				<div className={styles.title}>
					New Assessment
				</div>
				<div className={styles.description}>
					From here you can add questions of multiple types 
					like MCQs, subjective (text or paragraph)!
				</div>
      			</div>
      			{assessments.map((a, i) => (
				<AssessmentCard
					key={i}
					name={a.name}
					purpose={a.purpose}
					duration={a.duration}
					questions={a.question}
				/>
			))}
      		</div>
	</div>
	<div className={`${styles.popupOverlay} ${popupOpened?styles.active:""}`}>
	</div>
	<div className={`${styles.newAssessmentPopup} ${popupOpened?styles.active:""}`}>
		<div className={styles.popupBody}>
			<div className={styles.popupHeading}>
				<span className={styles.popupText}>
					Create new assessment
				</span>
				<span
					className={styles.popupClose}
					onClick={() => setPopupOpened(false)} 
				>
      					<Image
						src="/cut.svg"
						alt="close"
						width={30}
						height={30}
      					/>
				</span>
			</div>
			<div className={styles.form}>
				<span>
					<label>Name of assessment</label>
					<input type="text" placeholder="Type Here" />
				</span>

				<span>
					<label>Purpose of the test is </label>
					<select>
						<option>Select</option>
						<option>Job</option>
						<option>Contest</option>
					</select>
				</span>
				
				<span>
					<label>Description</label>
					<input type="text" placeholder="Type Here" />
				</span>

				<span>
					<label>Skills</label>
					<input type="text" placeholder="Type Here" />
				</span>
				
				<span>
					<label>Duration</label>	
					<select>
						<option>1 hour</option>
						<option>2 hour</option>
						<option>3 hour</option>
					</select>
				</span>
			</div>
			<div>
    				<button></button>
			</div>
		</div>
	</div>
	</>
   ); 
}
