import React from "react"
import Layout from "../components/layout"
import CareerDescriptionDetails from "../components/careerDescriptionDetails"

const careerDescriptionTemplate = props => {
  	return (
        <Layout>
     	    <CareerDescriptionDetails career={props.pageContext.career} />
    	</Layout>
    )
}

export default careerDescriptionTemplate