import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

import Search from '../components/Search'

const SearchPage = props => {
  return (
    <Layout>
      <SEO
        title="Search"
        description="Vai lá, não tenha medo. Busque por posts novos e bem antigos."
      />
    </Layout>
  )
}

export default SearchPage