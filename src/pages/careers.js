import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/Careers.module.css"

const careersInfo = require("../data/careersInfo")

const tagString = tags => {
	let str = ""
	tags.forEach((tag, i) => {
		if (i === tags.length-1) {
	  		str += tag
	  	} else {
	  		str += tag + " | "
	  	}
	})
	return str
}

const Careers = () => {
    return (
        <Layout>
            <SEO title="Careers" />
            <div className={styles.container}>
                <div className={styles.titlesContainer}>
                    <div className={styles.title}>Careers</div>
                    <div className={styles.subtitlesContainer}>
                        <div className={styles.subtitle}>
                            Want to join the NaviSavi team!?
                        </div>
                        <div className={styles.subtitle}>
                            Trust me, we’ve never been called boring.
                        </div>
                    </div>
                </div>
                <div className={styles.tableContainer}>
                	{
                		careersInfo.careers.map(career => 
                			<div className={styles.jobRow}>
		                        <a
		                            href={"/careers/"+career.slug}
		                            className={styles.jobTitleLink}
		                        >
		                            {career.title}
		                        </a>
		                        <div className={styles.subInfoContainer}>{tagString(career.tags)}</div>
		                    </div>
                		)
                	}
                </div>
            </div>
        </Layout>
    )
}

export default Careers
