import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/Careers.module.css"

const Careers = () => {
    return (
        <Layout>
            <SEO title="Careers" />
            <div className={styles.container}>
                <div className={styles.titlesContainer}>
                    <div className={styles.title}>Careers</div>
                    <div className={styles.subtitlesContainer}>
                        <div className={styles.subtitle}>
                            Want to join the Navi Savi team!?
                        </div>
                        <div className={styles.subtitle}>
                            Trust me, we’ve never been called boring.
                        </div>
                    </div>
                </div>
                <div className={styles.tableContainer}>
                    <div className={styles.jobRow}>
                        <a
                            href="mailto:contact@navi-savi.com?subject=Marketing%20And%20Social%20Media%20Intern%20Application"
                            className={styles.jobTitleLink}
                        >
                            Marketing & Social Media Intern
                        </a>
                        <div className={styles.subInfoContainer}>New York, NY | Stipend | College Credit</div>
                    </div>
                    <div className={styles.jobRow}>
                        <a
                            href="mailto:contact@navi-savi.com?subject=Community%20Intern%20Application"
                            className={styles.jobTitleLink}
                        >
                            Community Intern
                        </a>
                        <div className={styles.subInfoContainer}>New York, NY | Stipend | College Credit</div>
                    </div>
                    <div className={styles.jobRow}>
                        <a
                            href="mailto:contact@navi-savi.com?subject=Video%20Content%20Intern%20Application"
                            className={styles.jobTitleLink}
                        >
                            Video Content Intern
                        </a>
                        <div className={styles.subInfoContainer}>New York, NY | Stipend | College Credit</div>
                    </div>
                    <div className={styles.jobRow}>
                        <a
                            href="mailto:contact@navi-savi.com?subject=Community%20And%20Content%20Ambassador%20Application"
                            className={styles.jobTitleLink}
                        >
                            Community & Content Ambassadors
                        </a>
                        <div className={styles.subInfoContainer}>Remote (Major Cities, World-wide) | Stipend | College Credit</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Careers
