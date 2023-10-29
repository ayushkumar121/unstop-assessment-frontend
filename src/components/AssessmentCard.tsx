import Image from "next/image";
import styles from "./AssessmentCard.module.css";

export interface AssessmentCardProps {
    name: string;
    purpose: string;
    duration: number;
    questions: number;
}

function leftPad(num: number, padding: number): string {
    let n = 1;
    if (num != 0) {
        n = Math.log10(num)+1;
    }
    let paddingStr = '';
    
    for (let i=0; i<(padding-n); i++) {
        paddingStr += '0';
    }

    return `${paddingStr}${num}`
}

export default function AssessmentCard(props: AssessmentCardProps) {
    return (
        <div className={styles.card}>
        	<button className={styles.kababMenu}>
       			<Image 
				alt="menu"
				src="/3_dot.svg" 
				width={20} 
				height={20}	
			/>
        	</button>
        	<div className={styles.cardHeader}>
        		<span className={styles.cardLogo}>
        			<Image 
					alt="brief"
					src="/brief.svg" 
					width={20} 
					height={20}	
				/>
        		</span>
        		<div className={styles.cardHeaderText}>
        			<span className={styles.cardTitle}>
      					{props.name}
      				</span>
      				<span className={styles.cardSubtitle}>
      					<span>{props.purpose}</span>
      					<span>20 Apr 2023</span>
     				</span>
      			</div>
        	</div>
      		<div className={styles.cardBottom}>
			<div className={styles.cardStats}>
      				<div>
      					<span>{leftPad(props.duration, 2)}</span>
      					<span>Duration</span>
				</div>
      				<div>
      					<span>{leftPad(props.questions, 2)}</span>
      					<span>Questions</span>
				</div>
			</div>
			<div className={styles.cardRight}>
				<button className={styles.shareButton}>
					<Image 
						alt="link"
						src="/link.svg" 
						width={20} 
						height={20}	
					/>
					Share
				</button>
				<span className={styles.applicant}>AK</span>
			</div>
       		</div>
    	</div>
    );
}
