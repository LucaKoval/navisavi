import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPosts from "../components/blogPosts"
import styles from "../styles/Blog.module.css"

const Blog = () => {
    return (
        <Layout>
            <SEO title="Blog" />
            <div className={styles.container}>
                <div className={styles.title}>Blog</div>
                <BlogPosts />
            </div>
        </Layout>
    )
}

export default Blog
