import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { FaVideo } from "react-icons/fa"
import styles from "../../styles/Feature.module.css"
import stylesRight from "../../styles/FeatureRightImage.module.css"

const FeatureRightImage = ({ imageNum, icon, mainText, subText }) => {
    const data = useStaticQuery(graphql`
      {
        phone2: file(relativePath: { eq: "phones/iPhone2.png" }) {
          childImageSharp {
            fluid(quality: 70) {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
        phone4: file(relativePath: { eq: "phones/iPhone4.png" }) {
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
        <div className={`${styles.container} ${stylesRight.container}`}>
            <div className={styles.textContainer}>
                <div className={`${styles.mainTextContainer} ${stylesRight.mainTextContainer}`}>
                    {icon}
                    <div className={`${styles.mainText} ${stylesRight.mainText}`}>{mainText}</div>
                </div>
                <div className={`${styles.subText} ${stylesRight.subText}`}>{subText}</div>
            </div>
            <div className={`${styles.spacer} ${stylesRight.spacer}`} />
            <div className={`${styles.imageContainer} ${stylesRight.imageContainer}`}>
                { imageNum == 2 ?
                    <BackgroundImage
                        fluid={data.phone2.childImageSharp.fluid}
                        className={styles.image}
                    />
                :
                    <BackgroundImage
                        fluid={data.phone4.childImageSharp.fluid}
                        className={styles.image}
                    /> 
                }
            </div>
        </div>
    )
}

export default FeatureRightImage
