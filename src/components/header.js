import React, { Component } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import { GrClose } from "react-icons/gr"
import { FaBars, FaRegWindowClose, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from "gatsby"
import styles from "../styles/Header.module.css"

export const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      logoAndName: file(relativePath: { eq: "logo-and-name.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            src
            srcSet
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            src
            srcSet
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Link to="/" className="">
      <Img fluid={data.logoAndName.childImageSharp.fluid} style={{ width: "200px" }} />
    </Link>
  )
}

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
    }
  }

  handleClickOutside() {
    this.setState({
      navOpen: false,
    })
  }

  toggleNav() {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen,
    }))
  }

  render() {
    if (typeof document !== "undefined") document.body.style.overflow = this.state.navOpen ? "hidden" : "scroll"
    const { navOpen } = this.state
    const featuresLinkHamburger = () => {
        if (typeof window !== "undefined") {
            return window.location.pathname === "/" ?
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                className={styles.hamburgerMenuItem}
                offset={96}
                onClick={() => this.toggleNav()}
              >
                Features
              </ScrollLink>
            :
              <Link to="/" className={styles.hamburgerMenuItem}>
                Features
              </Link>
        }
        return
    }
    const featuresLink = () => {
        if (typeof window !== "undefined") {
            return window.location.pathname === "/" ?
              <ScrollLink
              	to="features"
              	smooth={true}
              	duration={500}
              	className={styles.navLink}
              	offset={96}
              >
              	Features
              </ScrollLink>
            :
              <Link to="/" className={styles.navLink}>
                Features
              </Link>
        }
        return
    }
    return (
      <div className={styles.nav}>
        <div className={styles.navLeft}>
          <Logo className={styles.logo}/>
        </div>
        <div
          className={styles.hamburgerContainer}
        >
          <FaBars className={styles.hamburger} style={ navOpen ? { display: "none" } : {} } onClick={() => this.toggleNav()} />
          <FaRegWindowClose className={styles.hamburgerClose} style={ navOpen ? {} : { display: "none" } } onClick={() => this.toggleNav()} />
          <div className={styles.darkenBackground} style={ navOpen ? {} : { display: "none" } } />
          <div className={styles.hamburgerMenu} style={ navOpen ? {} : { display: "none" } } >
            <div className={styles.hamburgerMenuItemContainer}>
            	{ featuresLinkHamburger() }
            </div>
            <div className={styles.hamburgerMenuItemContainer}>
              <Link to="/earn" className={styles.hamburgerMenuItem}>
                Rewards
              </Link>
            </div>
            <div className={styles.hamburgerMenuItemContainer}>
              <Link to="/contact" className={styles.hamburgerMenuItem}>
                Contact
              </Link>
            </div>
            <div className={`${styles.hamburgerMenuItemContainer} ${styles.followUsContainer}`}>
              <div className={styles.hamburgerMenuItem}>Follow Us</div>
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
        <div className={styles.navRight}>
          <div className={styles.navItem}>
            { featuresLink() }
          </div>
          <div className={styles.navItem}>
            <Link to="/earn" className={styles.navLink}>
              Rewards
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link to="/contact" className={styles.navLink}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
