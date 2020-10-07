import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.header`
  background-color: ${props => props.theme.colors.main1};
  padding: 1rem;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.light1};
  font-size: 4rem;
`

const Header = ({ children }) => (
  <Wrapper>
    <Title>{children}</Title>
  </Wrapper>
)

export default Header
