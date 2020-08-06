import React, { useLayoutEffect, useState } from 'react';
import { FaStar } from "react-icons/fa"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import SEO from "../components/seo"
import styles from "../styles/Earn.module.css"

const Earn = () => {
    const [windowWidth, setWindowWidth] = useState(0)

    useLayoutEffect(() => {
        const updateWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)
        updateWidth()
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    let dim = ""+windowWidth/2.2+"px"

    const data = useStaticQuery(graphql`
      {
        logo: file(relativePath: { eq: "mosaic.jpg" }) {
          childImageSharp {
            fluid(quality: 70) {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <SEO title="Earn" />
            <div className={styles.container}>
                <div className={styles.title}>Rewards</div>
                <div className={styles.contentContainer}>
                    <div className={styles.imageContainer} style={{ width: dim, height: dim }}>
                        <BackgroundImage
                            fluid={data.logo.childImageSharp.fluid}
                            className={styles.image}
                            style={{ width: dim, height: dim }}
                        />
                    </div>
                    <div className={styles.textContainer}>
                            <div className={styles.pointContainer}>
                                <div className="">
                                    <div className={styles.firstLine}>Wanna Be A VIP?</div>
                                    <div className={styles.explanation}>
                                        NaviSavi is looking for travelers, influencers, and, well,
                                        anyone with great short videos of their travels. Be one
                                        of the first on the app to get discovered, build
                                        itineraries, and earn rewards for being a trusted NaviSavi traveler.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.pointContainer}>
                                <div className="">
                                    <div className={styles.firstLine}>Rewards</div>
                                    <div className={styles.explanation}>We are looking for content to launch NaviSavi. For every
                                        approved video uploaded before we launch, we help you fund
                                        your next travels! Upload your old videos, or start shooting new ones
                                        now!
                                    </div>
                                </div>
                            </div>
                            <div className={styles.pointContainer}>
                                <div className="">
                                    <div className={styles.firstLine}>Want NaviSavi In Your City?</div>
                                    <div className={styles.explanation}>
                                        Become a member of your hometown's NaviSavi street team that creates video content, informs
                                        us of local hotspots, and promotes our app to tourists.
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Earn
