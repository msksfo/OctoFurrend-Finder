import React from "react"
import { Helmet } from "react-helmet"

import indexStyles from "../styles/index.module.css"

import Layout from "../components/layout/layout"

const IndexPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>OctoFurrend Finder</title>
      <html lang="en"></html>
    </Helmet>
    <Layout>
      <h1>Hi furrrrends!</h1>
      <p> I'm Inspectocat. Let's find some amazing Github users, shall we?</p>
    </Layout>
  </div>
)

export default IndexPage
