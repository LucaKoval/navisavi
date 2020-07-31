import React, { useLayoutEffect, useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/InstaFeed.module.css"

const InstaFeed = () => {
    const [windowWidth, setWindowWidth] = useState(0)

    useLayoutEffect(() => {
        const updateWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)
        updateWidth()
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    const data = useStaticQuery(graphql`
        {
            allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 6) {
                edges {
                    node {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 500) {
                                    src
                                    srcSet
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        id
                        caption
                    }
                }
            }
        }
    `)
    let size = Math.min(6, Math.round(windowWidth/200))
    let captionLength = 4*size
    let dim = ""+(windowWidth/size)+"px"
    let dimCaption = ""+(windowWidth/size - 20)+"px"
    return (
        <div className={styles.container}>
            {data.allInstaNode.edges.slice(0, size).map(({ node: insta }) => {
                return (
                    <div className={styles.postContainer} key={insta.id} style={{ width: dim, height: dim }} >
                        <a
                            href="https://www.instagram.com/navisavi_official/"
                            className={styles.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Img
                                fluid={insta.localFile.childImageSharp.fluid}
                                className={styles.image}
                            />
                            <div className={styles.caption} style={{ width: dim, height: dim }}>{insta.caption.slice(0, captionLength).concat("...")}</div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default InstaFeed
