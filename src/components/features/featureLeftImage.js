import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { FaSearch } from "react-icons/fa"
import styles from "../../styles/Feature.module.css"
import stylesLeft from "../../styles/FeatureLeftImage.module.css"

const FeatureLeftImage = ({ imageNum, icon, mainText, subText }) => {
    const data = useStaticQuery(graphql`
      {
        phone1: file(relativePath: { eq: "phones/iPhone1.png" }) {
          childImageSharp {
            fluid(quality: 70) {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
        phone3: file(relativePath: { eq: "phones/iPhone3.png" }) {
          childImageSharp {
            fluid(quality: 70) {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
        <div className={`${styles.container} ${stylesLeft.container}`}>
            <div className={styles.imageContainer} style={{ marginRight: 100 }}>
                { imageNum == 1 ?
                    <BackgroundImage
                        fluid={data.phone1.childImageSharp.fluid}
                        className={styles.image}
                    />
                :
                    <BackgroundImage
                        fluid={data.phone3.childImageSharp.fluid}
                        className={styles.image}
                    /> 
                }
            </div>
            <div className={styles.spacer} />
            <div className={styles.textContainer}>
                <div className={styles.mainTextContainer}>
                    {icon}
                    <div className={styles.mainText}>{mainText}</div>
                </div>
                <div className={styles.subText}>{subText}</div>
            </div>
        </div>
    )
}

export default FeatureLeftImage
