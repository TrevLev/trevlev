import React from "react"
import styled from "styled-components"

const Wrapper = styled.button`
  background-color: ${props => props.theme.colors.main1};
  border: none;
  color: yellow;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
`

const Button = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Button
