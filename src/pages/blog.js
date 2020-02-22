import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      helo from blog page!!!!
      This is a test
      <Link to="/">Back home</Link>
    </Layout>
  )
}

export default blog;