import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GrFormClose } from "react-icons/gr"

import HomeVideoMP4 from "../videos/final.mp4"
import styles from "../styles/Hero.module.css"
import Form from "./form.js"

const Hero = () => {
    const [displaySignupModal, setDisplaySignupModal] = useState(false);

    const escapeModal = (e) => {
        if (typeof document !== "undefined" && e.keyCode === 27 && document.body.className.includes("modal-open")) {
            setDisplaySignupModal(false)
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.history.replaceState) {
                window.history.replaceState(null, null, window.location.href)
            }
        }

        setTimeout(() => {
            if (typeof document !== "undefined") document.body.classList.add('modal-open')
            setDisplaySignupModal(true)
        }, 15000)

        document.addEventListener('keydown', escapeModal)
    }, [])

    const closeModal = () => {
        setDisplaySignupModal(false)
        if (typeof document !== "undefined") document.body.className = document.body.className.replace('modal-open','')
    }

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
            { displaySignupModal &&
                <div className={styles.signupModalContainer}>
                    <div className={styles.signupModal}>
                        <GrFormClose className={styles.closeModal} size="30px" onClick={closeModal}/>
                        <div className={styles.signupModalTagline}>Sign Up</div>
                        <div className={styles.callToAction}>
                            Hop on the VIP list for <span className="bold">exclusive</span> access to the app, our newsletter, events, and special travel offers!
                        </div>
                        <Form />
                    </div>
                </div>
            }
            <div className={styles.container}>
                <div className={`${styles.leftContainer} ${styles.mainElements}`}>
                    <div className={styles.content}>
                        <div className={styles.tagline}><div>Find Your Journey.</div></div>
                        <div className={styles.subTagline}><div className={styles.firstSubTagline}>Genuine travel videos uploaded by real people.</div></div>
                        <div className={styles.subTagline}><div className={styles.lastSubTagline}>Discover destinations, plan itineraries, and upload your travel clips for rewards.</div></div>
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
