import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import styles from "../styles/Footer.module.css"
import BackgroundImage from 'gatsby-background-image'

const Footer = () => {
    const data = useStaticQuery(graphql`
      {
        logo: file(relativePath: { eq: "logo.png" }) {
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
        <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Link to="/">
                        <BackgroundImage
                            fluid={data.logo.childImageSharp.fluid}
                            className={styles.logo}
                        />
                    </Link>
                    <div className={styles.copyright}>
                        <div>&copy; {new Date().getFullYear()} Navi Savi,</div>
                        <div>All Rights Reserved{" "}</div>
                    </div>
                </div>
                <div className={styles.footerAllLinksContainer}>
                    <div>
                        <div className={styles.footerLinkContainer}>
                            <Link to="/about" className={styles.footerLink}>
                                About
                            </Link>
                        </div>
                        <div className={styles.footerLinkContainer}>
                            <Link to="/blog" className={styles.footerLink}>
                                Blog
                            </Link>
                        </div>
                        <div className={styles.footerLinkContainer}>
                            <Link to="/careers" className={styles.footerLink}>
                                Careers
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className={styles.footerLinkContainer}>
                            <Link to="/privacy-policy" className={styles.footerLink}>
                                Privacy Policy
                            </Link>
                        </div>
                        <div className={styles.footerLinkContainer}>
                            <Link to="/terms-of-service" className={styles.footerLink}>
                                Terms Of Service
                            </Link>
                        </div>
                        <div className={styles.footerLinkContainer}>
                            <a href="mailto:contact@navi-savi.com" className={styles.footerLink}>
                                contact@navi-savi.com
                            </a>
                        </div>
                    </div>
                </div>
            <div className={styles.followUsContainer}>
                <div className={styles.followUsText}>Follow Us</div>
                <div className={styles.socialLinksContainer}>
                    <a
                        href="https://www.facebook.com/navisaviapp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaFacebook className={styles.socialLinkIcon} />
                    </a>
                    <a
                        href="https://www.instagram.com/navisavi_official/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaInstagram className={styles.socialLinkIcon} />
                    </a>
                    <a
                        href="https://twitter.com/navisaviapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaTwitter className={styles.socialLinkIcon} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/navi-savi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaLinkedin className={styles.socialLinkIcon} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
