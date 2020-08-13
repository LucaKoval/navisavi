import React from "react"
import SEO from "../components/seo"
import styles from "../styles/CareerDescription.module.css"

const tagString = tags => {
	let str = ""
	tags.forEach((tag, i) => {
		if (i === tags.length-1) {
	  		str += tag
	  	} else {
	  		str += tag + " | "
	  	}
	})
	return str
}

export default ({ career }) => {
	console.log("mailto:contact@navi-savi.com?subject="+encodeURIComponent(career.title)+encodeURIComponent(" Internship Application"))
  	return (
	    <div className={styles.container}>
	        <SEO title={career.title} />
	        <div className={styles.contentContainer}>
	        	<div className={styles.infoContainer}>
	          		<div className={styles.title}>{career.title}</div>
	          		<div className={styles.details}>
	          			{tagString(career.tags)}
	          		</div>
	          	</div>
		        <div
		        	dangerouslySetInnerHTML={{
		          		__html: career.descriptionHTML
		        	}}
		        	className={styles.bodyContainer}
		        />
		        <div className={styles.buttonContainer}>
	                <div className={styles.button}>
	                    <a
	                    	href={"mailto:contact@navi-savi.com?subject="+encodeURIComponent(career.title)+encodeURIComponent(" Internship Application")}
	                    	className={styles.buttonText}
	                    >
	                       	Apply!
	                    </a>
	                </div>
	                <div className={styles.buttonShadow} />
	            </div>
		    </div>
	    </div>
  	)
}
