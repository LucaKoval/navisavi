import React from "react"

import Sizzle from "../videos/sizzle.mp4"
import EarnLink from "./earnLink"
import styles from "../styles/Features.module.css"

const Features = () => {
    return (
        <div className={styles.container} id="features">
            <div className={styles.videoContainer}>
                <div className={styles.videoTitle}>Who We Are</div>
                <iframe className={styles.video} src="https://www.youtube-nocookie.com/embed/Y7HyrhMorHA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Features
