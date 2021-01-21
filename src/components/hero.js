import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GrFormClose } from "react-icons/gr"

import HomeVideoMP4 from "../videos/final.mp4"
import styles from "../styles/Hero.module.css"
import Form from "./form.js"

const Hero = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.history.replaceState) {
                window.history.replaceState(null, null, window.location.href)
            }
        }
    }, [])

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
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        google: file(relativePath: { eq: "downloads/google1.png" }) {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid_noBase64
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
                        <div className={styles.tagline}><div>Genuine travel videos.</div></div>
                        <div className={styles.tagline}><div className={styles.lastSubTagline}>Uploaded by real people.</div></div>
                        <div className={styles.signUpContainer} id="signup">
                            <div className={styles.callToAction}>
                                Hop on the VIP list for <span className="bold">exclusive</span> access to the app, our newsletter, events, and special travel offers!
                            </div>
                            <Form />
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
