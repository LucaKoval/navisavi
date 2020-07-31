import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/About.module.css"

const About = () => {
    return (
        <Layout>
            <SEO title="About" />
            <div className={styles.container}>
                <div className={styles.title}>About</div>
                <div className={styles.contentContainer}>
                    <div className="">
                        Born in 2013, Navi Savi was originally a TV show idea. We showed you
                        a city in the episode, you go online to watch short, more in depth
                        experiences, and could "Check the Box" to book all from one
                        platform.
                    </div>
                    <div className="">
                        Ya, that didn’t end up happening, so we had to get clever.
                    </div>
                    <div className="">
                        Let’s try it as an app, we said. (years later!)
                    </div>
                    <div className="">
                        Finally in 2018 we got started on the idea and we are finally ready
                        for full launch in 2020.
                    </div>
                    <div className="">
                        Thought we’d kick it off in new decade, because 2019 sucked. (Update: 2020 also sucking. Will check back soon.)
                    </div>
                    <div className="">
                        We are excited to finally share Navi Savi with the World. She’s been
                        brewing a while.
                    </div>
                    <div>"Rally" Sally Bunnell</div>
                    <div className={styles.companyPosition}>CEO/Founder Navi Savi</div>
                </div>
            </div>
        </Layout>
    )
}

export default About
