/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Catalog from "./catalog"
import "./layout.css"
import Menu from "./menu";


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

        <div  className={"container"}
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
            <div  className={"container"}>
                <div className={"row"}>
                <div className={"col-sm-3"}>
                    <Catalog/>
                </div>
                <div className={"col"}>
                    <Menu/>
                    <main>{children}</main>
                </div>
                </div>
            </div>
      </div>
        <Footer  siteTitle={data.site.siteMetadata.title}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
