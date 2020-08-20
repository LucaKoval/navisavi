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
                    <div>
                        When NaviSavi was born in 2013, it was actually supposed to be a TV show called “Check the Box.”
                        Each episode would discuss a city, and the viewers would go online to watch in-depth videos of
                        each attraction and book excursions through our platform.
                    </div>
                    <div>
                        Yeah, that didn’t work out.
                    </div>
                    <div>
                        So, years later, we decided to try our idea as an app instead!
                    </div>
                    <div>
                       We got started in 2018, and now, after two years of hard work, we are finally ready for it to hit the app stores.
                    </div>
                    <div>
                        We are so excited to finally share NaviSavi with the world. She’s been brewing a while.
                    </div>
                    <div>"Rally" Sally Bunnell</div>
                    <div className={styles.companyPosition}>CEO/Founder NaviSavi</div>
                </div>
            </div>
        </Layout>
    )
}

export default About
