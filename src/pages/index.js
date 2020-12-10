import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="red"
      category="teste"
      date="30 de julho de 2020"
      timeToRead="5"
      title="Testestestsetse"
      description="fdasfasdfasdfasfasdfasdfsad"
    />
  </Layout>
)

export default IndexPage
