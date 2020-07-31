import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/Careers.module.css"

const Careers = () => {
    return (
        <Layout>
            <SEO title="Careers" />
            <div className={styles.container}>
                <div className={styles.titlesContainer}>
                    <div className={styles.title}>Careers</div>
                    <div className={styles.subtitlesContainer}>
                        <div className={styles.subtitle}>
                            Want to join the Navi Savi team!?
                        </div>
                        <div className={styles.subtitle}>
                            Trust me, we’ve never been called boring.
                        </div>
                    </div>
                </div>
                <div >
                    <table className="">
                        <thead className="">
                            <tr className="">
                                <th className="">Job Title</th>
                                <th className="">Location</th>
                                <th className="">Compensation</th>
                                <th className="">College Credit?</th>
                                <th className="">Apply</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr className="">
                                <td className="">Marketing &amp; Social Media Intern</td>
                                <td className="">New York, NY</td>
                                <td className="">Stipend</td>
                                <td className="">Yes</td>
                                <td className="">
                                    <a
                                        href="mailto:contact@navisaviapp.com?subject=Marketing%20And%20Social%20Media%20Intern%20Application"
                                        className=""
                                    >
                                        Apply
                                    </a>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="">Community Intern</td>
                                <td className="">New York, NY</td>
                                <td className="">Stipend</td>
                                <td className="">Yes</td>
                                <td className="">
                                    <a
                                        href="mailto:contact@navisaviapp.com?subject=Community%20Intern%20Application"
                                        className=""
                                    >
                                        Apply
                                    </a>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="">Video Content Intern</td>
                                <td className="">New York, NY</td>
                                <td className="">Stipend</td>
                                <td className="">Yes</td>
                                <td className="">
                                    <a
                                        href="mailto:contact@navisaviapp.com?subject=Video%20Content%20Intern%20Application"
                                        className=""
                                    >
                                        Apply
                                    </a>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="">Community &amp; Content Ambassadors</td>
                                <td className="">Remote (Major Cities, World-wide)</td>
                                <td className="">Paid</td>
                                <td className="">No</td>
                                <td className="">
                                    <a
                                        href="mailto:contact@navisaviapp.com?subject=Community%20And%20Content%20Ambassador%20Application"
                                        className=""
                                    >
                                        Apply
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default Careers
