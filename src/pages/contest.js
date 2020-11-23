import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContestPage = () => {
	useEffect(() => {
		const script = document.createElement("script")

		script.src = "//cdn.wishpond.net/connect.js?merchantId=1532549&amp;writeKey=d28c1fa95aee"
    	script.async = true

    	document.body.appendChild(script)
  	});

	return (
		<div>
	      	<SEO title="Contest" />
			<div className="wishpond-campaign" data-wishpond-id="2594271" data-wishpond-href="https://embedded.wishpondpages.com/lp/2594271/"></div>
		</div>
	)
}

export default ContestPage
