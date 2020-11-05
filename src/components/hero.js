import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import HomeVideoMP4 from "../videos/final.mp4"
import styles from "../styles/Hero.module.css"
import { GrFormClose } from "react-icons/gr"

const Hero = () => {
    const [displaySignupModal, setDisplaySignupModal] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.history.replaceState) {
                window.history.replaceState(null, null, window.location.href);
            }
        }

        setTimeout(() => {
            if (typeof document !== "undefined") document.body.classList.add('modal-open')
            setDisplaySignupModal(true)
        }, 15000)
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
                        <GrFormClose className={styles.closeModal} onClick={closeModal}/>
                        <div className={styles.signupModalTagline}>Sign Up</div>
                        <div className={styles.callToAction}>
                            Hop on the VIP list for <span className="bold">exclusive</span> access to the app, our newsletter, events, and special travel offers!
                        </div>
                        <form
                            name="beta-signup"
                            method="POST"
                            data-netlify="true"
                            className={styles.form}
                            action="/"
                        >
                            <div className={styles.inputContainer}>
                                <div class={styles.inputField}>
                                    <input
                                        id="beta-email"
                                        type="email"
                                        name="beta-email"
                                        placeholder="Email (required)"
                                        aria-required="true"
                                    />
                                    <label for="beta-email">Email (required)</label>
                                </div>
                                <div className={styles.nameInputContainer}>
                                    <div class={styles.inputField}>
                                        <input
                                            id="beta-first-name"
                                            type="text"
                                            name="beta-first-name"
                                            placeholder="First Name (optional)"
                                            aria-required="false"
                                        />
                                        <label for="beta-first-name">First Name (optional)</label>
                                    </div>
                                    <div className={styles.spacer}/>
                                    <div class={styles.inputField}>
                                        <input
                                            id="beta-second-name"
                                            type="text"
                                            name="beta-second-name"
                                            placeholder="Last Name (optional)"
                                            aria-required="false"
                                        />
                                        <label for="beta-second-name">Last Name (optional)</label>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="form-name" value="beta-signup" />
                            <div className={styles.buttonContainer}>
                                <div className={styles.buttonShadow} />
                                <input type="submit" value="Join"/>
                            </div>
                        </form>
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
                            <form
                                name="beta-signup"
                                method="POST"
                                data-netlify="true"
                                className={styles.form}
                                action="/"
                            >
                                <div className={styles.inputContainer}>
                                    <div class={styles.inputField}>
                                        <input
                                            id="beta-email"
                                            type="email"
                                            name="beta-email"
                                            placeholder="Email (required)"
                                            aria-required="true"
                                        />
                                        <label for="beta-email">Email (required)</label>
                                    </div>
                                    <div className={styles.nameInputContainer}>
                                        <div class={styles.inputField}>
                                            <input
                                                id="beta-first-name"
                                                type="text"
                                                name="beta-first-name"
                                                placeholder="First Name (optional)"
                                                aria-required="false"
                                            />
                                            <label for="beta-first-name">First Name (optional)</label>
                                        </div>
                                        <div className={styles.spacer}/>
                                        <div class={styles.inputField}>
                                            <input
                                                id="beta-second-name"
                                                type="text"
                                                name="beta-second-name"
                                                placeholder="Last Name (optional)"
                                                aria-required="false"
                                            />
                                            <label for="beta-second-name">Last Name (optional)</label>
                                        </div>
                                    </div>
                                </div>
                                <input type="hidden" name="form-name" value="beta-signup" />
                                <div className={styles.buttonContainer}>
                                    <div className={styles.buttonShadow} />
                                    <input type="submit" value="Join"/>
                                </div>
                            </form>
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
