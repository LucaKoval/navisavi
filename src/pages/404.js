import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/404.module.css"

const NotFoundPage = () => (
    <Layout>
      	<SEO title="404: Not found" />
      	<div className={styles.container}>
      		<div className={styles.contentContainer}>
			    <div className={styles.title}>NOT FOUND</div>
			    <div>You just hit a route that doesn't exist... the sadness. <span role="img" aria-label="crying-face">😢</span></div>
			</div>
	    </div>
  	</Layout>
)

export default NotFoundPage
