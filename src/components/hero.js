import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import HomeVideoMP4 from "../videos/final.mp4"
import styles from "../styles/Hero.module.css"

const Hero = () => {
    const data = useStaticQuery(graphql`
      {
        site {
          siteMetadata {
            description
            title
          }
        }
        apple: file(relativePath: { eq: "downloads/apple1.png" }) {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
        google: file(relativePath: { eq: "downloads/google1.png" }) {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
        <div>
            <div className={styles.container}>
                <div className={`${styles.leftContainer} ${styles.mainElements}`}>
                    <div className={styles.content}>
                        <div className={styles.tagline}><div>We're Ready. Are You?</div></div>
                        <div className={styles.signUpContainer}>
                            <div className={styles.callToAction}>
                                Get on the list now to be the first to test our Beta App &amp; Earn rewards.
                            </div>
                            <div className={styles.inputContainer}>
                                <form
                                    name="beta-signup"
                                    method="POST"
                                    data-netlify="true"
                                    className={styles.form}
                                >
                                <input
                                    id="beta-email"
                                    type="email"
                                    name="beta-email"
                                    className=""
                                    placeholder="Email"
                                    className={styles.mainInput}
                                />
                                <div className={styles.buttonContainer}>
                                    <div className={styles.buttonShadow} />
                                    <input type="submit" value="Join"/>
                                </div>
                              </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.videoContainer} ${styles.mainElements}`}>
                    <video className={styles.video} autoPlay={true} loop={true} muted={true}>
                        <source src={HomeVideoMP4} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className={styles.downloadContainer}>
                <div className={styles.appDownloadContainer}>
                    <Img
                        fluid={data.apple.childImageSharp.fluid}
                        className={styles.appDownload}
                    />
                    <Img
                        fluid={data.google.childImageSharp.fluid}
                        className={styles.appDownload}
                    />
                </div>
                <div className={styles.comingSoonContainer}>
                    <div className={styles.comingSoonText}>Coming soon!</div>
                </div>
            </div>
        </div>
    )
}

export default Hero
