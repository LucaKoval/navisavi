import React from "react"
import { FaSearch, FaVideo, FaGraduationCap, FaPlaneDeparture } from "react-icons/fa"
import FeatureLeftImage from "./features/FeatureLeftImage"
import FeatureRightImage from "./features/FeatureRightImage"
import EarnLink from "./EarnLink"
import styles from "../styles/Features.module.css"

const Features = () => {
    return (
        <div className={styles.container} id="features">
            <FeatureLeftImage
                imageNum={1}
                icon={<FaSearch className={styles.icon} />}
                mainText="Search & Filter Destinations"
                subText="Narrow down by cities, tags, distance, and price."
            />
            <FeatureRightImage
                imageNum={2}
                icon={<FaVideo className={styles.icon} />}
                mainText="Browse Videos By Other Travelers"
                subText="Watch unedited, short clips of friends, influencers, or other travelers' vacations."
            />
            <FeatureLeftImage
                imageNum={3}
                icon={<FaGraduationCap className={styles.icon} />}
                mainText="Learn More About An Experience"
                subText="Location information is verified by NaviSavi or the business."
            />
            <FeatureRightImage
                imageNum={4}
                icon={<FaPlaneDeparture className={styles.icon} />}
                mainText="Save Clips, Plan Trips"
                subText="Build, share, and book a video itinerary of your next vacation."
            />
        </div>
    )
}

export default Features
