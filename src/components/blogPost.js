import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FaUserCircle, FaAngleRight } from "react-icons/fa"
import styles from "../styles/Blog.module.css"

export default ({ blogPost }) => {
	console.log(blogPost)
    return (
        <Link to={blogPost.slug} className={styles.overallLink}>
            <div className={styles.contentContainer}>
                <div className="">
                    <Img
                        fluid={blogPost.image.fluid}
                        className=""
                    />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.postTitle}>{blogPost.title}</div>
                    <div className={styles.postInfo}>
                         <div className="">
                             <FaUserCircle className="" /> {blogPost.author}
                         </div>
                         <div>{blogPost.date}</div>
                     </div>
                    <div className={styles.buttonContainer}>
                        <div className={styles.button}>View Post</div>
                        <div className={styles.buttonShadow} />
                    </div>
                </div>
            </div>
        </Link>
    )
}
