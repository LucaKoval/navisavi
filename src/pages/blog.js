import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="flex justify-center py-24">
        <h2 className="text-center text-5xl teal pb-12 lowercase">Blog</h2>
      </div>
    </Layout>
  )
}

export default Blog
