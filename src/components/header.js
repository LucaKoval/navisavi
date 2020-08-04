import React, { Component } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import { GrClose } from "react-icons/gr"
import { FaBars, FaRegWindowClose, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from "gatsby"
import styles from "../styles/Header.module.css"

export const Logo = (hamburger) => {
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
  	return hamburger.hamburger ?
    	<Link to="/" className="">
      		<Img fluid={data.logo.childImageSharp.fluid} style={{ width: "62px", marginTop: -7, marginLeft: -4 }} />
    	</Link>
    :
    	<Link to="/" className="">
      		<Img fluid={data.logoAndName.childImageSharp.fluid} style={{ width: "200px", marginTop: -26, marginLeft: 2 }} />
    	</Link>
}

export default class Header extends Component {
  	constructor(props) {
    	super(props)
    	this.state = {
      		navOpen: false,
      		hamburger: false
    	}

    	this.updateWidth = this.updateWidth.bind(this);
  	}

  	componentDidMount() {
    	window.addEventListener('resize', this.updateWidth);
    	this.updateWidth();
  	}

  	componentWillUnmount() {
    	window.removeEventListener('resize', this.updateWidth);
  	}

  	updateWidth() {
  		if (typeof window !== "undefined") {
	  		this.setState({
	  			hamburger: window.innerWidth <= 1024 // This is the same width in the CSS file
	  		})
	  	}
	  	if (!this.state.hamburger) {
	  		this.setState({
	  			navOpen: false
	  		})
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
	    return (
	    	<div className={styles.nav}>
		    	<div className={styles.navLeft}>
		    		<Logo className={styles.logo} hamburger={this.state.hamburger}/>
		    	</div>
		    	<div className={styles.middleDownloadButtonContainer} style={ this.state.hamburger ? {} : { display: "none" } }>
		    		<div className={styles.middleDownloadButton}>
						<ScrollLink
			              	to="signup"
			              	duration={500}
			              	className={styles.buttonText}
			            >
		              		Sign Up
		              	</ScrollLink>
	                </div>
	                <div className={styles.buttonShadow} />
		    	</div>
		    	<div className={styles.hamburgerContainer}>
			    	<FaBars className={styles.hamburger} style={ navOpen ? { display: "none" } : {} } onClick={() => this.toggleNav()} />
			    	<FaRegWindowClose className={styles.hamburgerClose} style={ navOpen ? {} : { display: "none" } } onClick={() => this.toggleNav()} />
			    	<div className={styles.darkenBackground} style={ navOpen ? {} : { display: "none" } } />
			    	<div className={styles.hamburgerMenu} style={ navOpen ? {} : { display: "none" } } >
				    	<div className={styles.hamburgerMenuItemContainer}>
				    		<a href="/#features" className={styles.hamburgerMenuItem} onClick={() => this.toggleNav()}>Features</a>
				    	</div>
				    	<div className={styles.hamburgerMenuItemContainer}>
					    	<Link to="/earn" className={styles.hamburgerMenuItem} onClick={() => this.toggleNav()}>
					    		Rewards
					    	</Link>
				    	</div>
				    	<div className={styles.hamburgerMenuItemContainer}>
					    	<Link to="/contact" className={styles.hamburgerMenuItem} onClick={() => this.toggleNav()}>
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
			    		<a href="/#features" className={styles.navLink}>Features</a>
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
			    	<div className={styles.rightDownloadButtonContainer} style={ this.state.hamburger ? { display: "none" } : {} }>
			    		<div className={styles.rightDownloadButton}>
							<ScrollLink
				              	to="signup"
				              	duration={500}
				              	className={styles.buttonText}
				              >
			              		Sign Up
			              	</ScrollLink>
		                </div>
		                <div className={styles.buttonShadow} />
			    	</div>
		    	</div>
	    	</div>
	    )
  	}
}
