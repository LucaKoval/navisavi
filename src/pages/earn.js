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
                    <div className={styles.imageContainer}>
                        <BackgroundImage
                            fluid={data.logo.childImageSharp.fluid}
                            className={styles.logo}
                            style={{ width: dim, height: dim }}
                        />
                    </div>
                    <div className={styles.textContainer}>
                            <div className={styles.pointContainer}>
                                <div className="">
                                    <div className={styles.firstLine}>Wanna Be A VIP?</div>
                                    <div className={styles.explanation}>
                                        NaviSavi is looking for travelers, influencers, and well,
                                        anyone with great short videos of their recent travels. Be one
                                        of the first on the app to get discovered, share your
                                        itineraries, and get rewarded for being one of our trusted
                                        travelers trying out NaviSavi.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.pointContainer}>
                                <div className="">
                                    <div className={styles.firstLine}>Rewards</div>
                                    <div className={styles.explanation}>We are looking for content to launch NaviSavi! For every
                                        approved video uploaded before we launch, we help you fund
                                        your next travels! Upload videos, or start shooting new ones
                                        now!
                                    </div>
                                </div>
                            </div>
                            <div className={styles.pointContainer}>
                                <div className="">
                                    <div className={styles.firstLine}>Want NaviSavi In Your City?</div>
                                    <div className={styles.explanation}>
                                        Be a part of our street teams who capture content of your
                                        city, create itineraries of your favorite “hot spots” and
                                        promote NaviSavi to tourists visiting your town.
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
