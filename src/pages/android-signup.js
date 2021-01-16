import React from "react"

import Signup from "../components/signup.js"
import styles from "../styles/Signup.module.css"

const AndroidSignup = () => {
    return (
    	<div className={styles.container}>
    		<div className={styles.formContainer}>
    			<div className={styles.title}>Get the app early!</div>
    			<Signup formName="beta-signup-android" />
    		</div>
    	</div>
    )
}

export default AndroidSignup
