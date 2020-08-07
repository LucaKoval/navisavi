import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styles from "../styles/BlogPost.module.css"

export default ({ blogPost }) => {
  	return (
	    <div className={styles.container}>
	        <SEO title={blogPost.title} />
	        <div className={styles.contentContainer}>
	        	<div className={styles.infoContainer}>
	          		<div className={styles.title}>{blogPost.title}</div>
	          		<div className={styles.details}>by <span className={styles.author}>{blogPost.author}</span> | {blogPost.date}</div>
	          	</div>
	          	<div
	            	dangerouslySetInnerHTML={{
	              	__html: blogPost.body.childMarkdownRemark.html,
	            	}}
	            	className={styles.bodyContainer}
	          	/>
	        </div>
	    </div>
  	)
}
