import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BlogPost from "./blogPost"
import styles from "../styles/Blog.module.css"

const getBlogPosts = graphql`
  {
    blogPosts: allContentfulBlog(sort: { fields: date, order: DESC }) {
      edges {
        node {
          body {
            body
            childMarkdownRemark {
              html
            }
          }
          author
          id
          date(formatString: "DD MMM, YYYY")
          slug
          title
          image {
            fluid {
              src
              srcSet
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default () => {
    return (
        <div className={styles.outsidePostsContainer}>
            <StaticQuery
                query={getBlogPosts}
                render={data => (
                    <div className={styles.postsContainer}>
                        {data.blogPosts.edges.map(({ node: blogPost }) => (
                            <BlogPost key={blogPost.id} blogPost={blogPost} />
                        ))}
                    </div>
                )}
            />
        </div>
    )
}
