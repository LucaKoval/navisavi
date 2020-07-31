import React from "react"
import styles from "../styles/EarnLink.module.css"
import { Link } from "gatsby"

const EarnLink = () => {
    return (
        <div className={styles.container} id="earnLink">
            <div className={styles.mainTextContainer}>
                <div className={styles.mainText}>
                    Want to get paid to travel?
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.button}>
                    <Link to="/earn" className={styles.buttonText}>
                        Show me how!
                    </Link>
                </div>
                <div className={styles.buttonShadow} />
            </div>
        </div>
    )
}

export default EarnLink
