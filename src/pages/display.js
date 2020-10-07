import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

import Fountain from '../components/fountain'

const H1 = styled.h1`
  color: ${props => props.theme.colors.main};
  background-color: #00f;
`

const StyledFountain = styled(Fountain)`
  margin: auto;
  display: block;
  background-color: #000000;
`


const Display = () => {
  return (
    <Layout>
      {/* <H1>Hello</H1> */}
      <StyledFountain />
    </Layout>
  )
}

export default Display
