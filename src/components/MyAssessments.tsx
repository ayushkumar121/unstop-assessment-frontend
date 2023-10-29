"use client";
import React, { useState } from "react";
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

   const [skill, setSkill] = useState("");
   const [skills, setSkills] = useState<string[]>([]);
   const [name, setName] = useState("");
   const [purpose, setPurpose] = useState("Job");
   const [duration, setDuration] = useState(1);

   function handleSkillEvent(e: React.KeyboardEvent<HTMLInputElement>) {
       if (e.key == "Enter") {
           (e.target as HTMLInputElement).value="";
           setSkills([skill, ...skills]);
           setSkill("");
       } else if (e.key.length != 1) {
       } else if (e.key >= 'a' && e.key <= 'z' || e.key >= "A" && e.key <= "Z") {
           setSkill(skill+e.key);
       } 
   }

   function removeSkill(skill: string) {
       setSkills(skills.filter(s => s!=skill));
   }

   function postAssessment() {
       let newAssessment = {
           name: name,
           purpose: purpose,
           duration: duration,
           question: 1,
       };

       setAssessments([newAssessment, ...assessments]);
   }
   
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
					<input 
						type="text" 
						placeholder="Type Here"
						onChange={(e) => setName(e.target.value)}
					/>
				</span>

				<span>
					<label>Purpose of the test is </label>
					<select
						onChange={(e) => setPurpose(e.target.value)}
					>
						<option value="Job">Job</option>
						<option value="Contest">Contest</option>
					</select>
				</span>
				
				<span>
					<label>Description</label>
					<input type="text" placeholder="Type Here" />
				</span>

				<span>
					<label>Skills</label>
					<div className={styles.skillInput}>
						<div className={styles.skills}>
							{skills.map((skill,i) => (
    								<span key={i} className={styles.skill}>
    									<span>{skill}</span>
				      					<Image
				      						onClick={() => removeSkill(skill)}
										src="/cut.svg"
										alt="close"
										width={18}
										height={18}
      									/>
    								</span>
							))}
						</div>
						<input 
							type="text" 
							placeholder="Type Here"
							onKeyDown={handleSkillEvent}
						/>
					</div>
				</span>
				
				<span>
					<label>Duration</label>	
					<select
						onChange={(e) => setDuration(parseInt(e.target.value))}
					>
						<option value="1">1 hour</option>
						<option value="2">2 hour</option>
						<option value="3">3 hour</option>
					</select>
				</span>
			</div>
			<div className={styles.popupBottom}>
    				<button onClick={postAssessment}>Save</button>
			</div>
		</div>
	</div>
	</>
   ); 
}
