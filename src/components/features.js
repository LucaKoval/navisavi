import React from "react"
import { FaSearch, FaVideo, FaGraduationCap, FaPlaneDeparture } from "react-icons/fa"
import FeatureLeftImage from "./features/featureLeftImage"
import FeatureRightImage from "./features/featureRightImage"
import EarnLink from "./earnLink"
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
                subText="Watch short, unedited clips of friends, influencers, and other travelers' vacations."
            />
            <FeatureLeftImage
                imageNum={3}
                icon={<FaGraduationCap className={styles.icon} />}
                mainText="Learn More About Each Location"
                subText="Location information is verified by NaviSavi or the business."
            />
            <FeatureRightImage
                imageNum={4}
                icon={<FaPlaneDeparture className={styles.icon} />}
                mainText="Save Clips, Plan Trips"
                subText="Build, share, and book a video itinerary for your next vacation."
            />
        </div>
    )
}

export default Features
