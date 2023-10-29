"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import styles from "./Navigation.module.css";

interface NavigationButtonProps {
    iconSrc: string;
    name: string;
    active?: boolean;
    admin?: boolean;
}

function NavigationButton(props: NavigationButtonProps) {
    const buttonStyles = `${styles.button} ${props.active? styles.active :""}` 
    return (
	<button className={buttonStyles}>
        	{props.admin && <span className={styles.adminChip}>Admin</span>}
		<Image 
			src={props.iconSrc}
			alt={props.name}
			height={20}
			width={20}
		/>	
		<span>{props.name}</span>
	</button>
    );
}

export interface NavigationProps {
    mobileActive: boolean;
    closeCallback: () => void;
}

export default function Navigation(props: NavigationProps) {
    const [mobileActive, setMobileActive] = useState(false);

    useEffect(() => {
	setMobileActive(props.mobileActive);
    }, [props.mobileActive]);

    function close() {
        setMobileActive(false);
        props.closeCallback();
    }
    
    return (
        <div className={`${styles.container} ${mobileActive? styles.mobileActive :""}`}>
        	<div className={styles.mobileMenu}>
			<span>Menu</span>
			<span onClick={close}>
				<Image 
					src="/cut.svg"
					alt="close"
					height={20}
					width={20}
				/>	
			</span>
        	</div>
        	<div>
        		<NavigationButton
        			iconSrc="/dashboard.svg"
        			name="Dashboard"
        		/>
        		<NavigationButton 
        			iconSrc="/note_alt.svg"
        			name="Assessment"
        			active={true}
        		/>
        		<NavigationButton
        			iconSrc="/quiz.svg"
        			name="My Library"
        		/>
        	</div>
        	<div>
        		<NavigationButton 
        			iconSrc="/admin_meds.svg"
				name="Round Status"
				admin={true}
        		/>
        	</div>
    	</div>
    );
}
