import React from "react"
import { FaBan, FaCheck } from "react-icons/fa"
import styles from "../styles/Learn.module.css"

const Learn = () => {
    return (
        <div className={styles.container} id="learn">
            <div className={styles.title}>Learn</div>
            <div className={styles.sizzleContainer}>
                <iframe
                    title="Navi Savi Promo"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rbK4jrWYEPc"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.sizzleVideo}
                />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.shortPointsContainer}>
                    <FaBan className={styles.faBan}/>
                    <div className={styles.shortPointText}>No Photos.</div>
                    <FaBan className={styles.faBan} />
                    <div className={styles.shortPointText}>No Reviews.</div>
                    <FaCheck className={styles.faBan} />
                    <div className={styles.shortPointText}>Just Videos.</div>
                </div>
                <div className="">
                    Videos uploaded by travelers, locals, and friends for travel rewards.
                    Now you can search, save, and share, all in one app.
                </div>
            </div>
        </div>
    )
}

export default Learn
