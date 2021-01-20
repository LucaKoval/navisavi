import React, { useEffect } from "react"
import { navigate } from "gatsby"

const Email = () => {
	useEffect(() => {
		window.location.replace("mailto:contact@navi-savi.com")
		navigate("/")
  	});

	return (
		<div />
	)
}

export default Email
