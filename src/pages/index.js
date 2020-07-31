import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Features from "../components/features"
import EarnLink from "../components/earnLink"
import InstaFeed from "../components/instaFeed"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
    <EarnLink />
    <InstaFeed />
  </Layout>
)

export default IndexPage
