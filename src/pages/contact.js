import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaAngleRight,
} from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/Contact.module.css"

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <div className={styles.container}>
                <div className={styles.title}>Got questions? Ask 'em!</div>
                <div className={styles.contentContainer}>
                    <form
                        name="howdy"
                        method="POST"
                        data-netlify="true"
                        className={styles.form}
                    >
                        <div className={styles.inputLabel}>Name</div>
                        <input
                            id="contactName"
                            type="text"
                            name="contactName"
                            className=""
                            required
                        />
                        <div className={styles.inputLabel}>Email</div>
                        <input
                            id="contactEmail"
                            type="email"
                            name="contactEmail"
                            className=""
                            required
                        />
                        <div className={styles.inputLabel}>Phone</div>
                        <input
                            id="contactPhone"
                            type="tel"
                            name="contactPhone"
                            className=""
                        />
                        <div className={styles.inputLabel}>Message</div>
                        <textarea
                            id="contactMessage"
                            name="contactMessage"
                            cols="30"
                            rows="5"
                            className=""
                            required
                        />
                        <div className={styles.buttonContainer}>
                            <input type="submit" value="Submit" />
                            <div className={styles.buttonShadow} />
                        </div>
                    </form>
                    <div className={styles.contactInfoContainer}>
                        <div className={styles.contactTitle}>Contact Info</div>
                        <div className={styles.contactLabel}>Address</div>
                        <div className={styles.contactValue}>P.O. Box 151, Oxford, NE 68967</div>
                        <div className={styles.contactLabel}>Phone</div>
                        <div className={styles.contactValue}>1-801-557-7985</div>
                        <div className={styles.contactLabel}>Email</div>
                        <div className={styles.contactValue}>contact@navisaviapp.com</div>
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
            </div>
        </Layout>
    )
}

export default Contact
