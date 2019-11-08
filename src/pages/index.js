import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import Map from "../components/Map"

export default () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recycle Map UK</title>
        <link rel="canonical" href="https://recyclemap.uk" />
      </Helmet>
      <Map />
    </Layout>
  )
}
