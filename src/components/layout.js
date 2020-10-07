/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "../themes/theme"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: brown;
    font-family: ${props => props.theme.fonts.main};
  }

  h1 {
    font-size: clamp(2rem, 4vw, 4rem);
  }

  p {
    font-size: clamp(1rem, 2vw, 2rem)
  }
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
