import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${props => props.theme.colors.main1};
  text-align: center;
`

const Content = styled.div`
  height: 100%;
  margin: auto;
  box-sizing: border-box;
  padding: clamp(1rem, 8vw, 4rem);
  max-width: 64rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const H1 = styled.h1`
  color: ${props => props.theme.colors.light1};
  font-size: clamp(2rem, 16vw, 8rem);
`

const P = styled.p`
  color: ${props => props.theme.colors.light1};
  font-size: clamp(1rem, 8vw, 4rem);
  text-align: center;
`

const Button = styled.button`
  background-color: ${props => props.theme.colors.light1};
  border: none;
  color: ${props => props.theme.colors.main1};
  padding: clamp(1rem, 2vw, 2rem);
  font-weight: bold;
  font-size: clamp(2rem, 4vw, 4rem);
  border-radius: 1rem;
  margin: 0.5rem;
`

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 32rem) {
    flex-direction: column;
    align-items: stretch;
  }
`

const Landing = props => {
  const { title, body, buttons } = props

  return (
    <Wrapper>
      <Content>
        <H1>{title}</H1>
        <P>{body}</P>
        <ButtonGroup>
          <Button>About Me</Button>
          <Button>Skills</Button>
          <Button>Contact</Button>
        </ButtonGroup>
      </Content>
    </Wrapper>
  )
}

export default Landing
