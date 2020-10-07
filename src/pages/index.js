import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Landing from "../components/landing"
import Container from "../components/container"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing
      title="Hi There!"
      body="My name is Trevor Levinson, and I'm a front-end web developer."
    />
    <Container>
      <h1>I love what I do</h1>
      <p>
        Computers are amazingly powerful tools, but they can be intimidating.
        Well-built websites are approachable gateways between people and
        computers; they bring the abilities of the programmer to the rest of the
        world, without any of the hassle.
      </p>
      <h1>Building smarter for the modern web</h1>
      <p>
        I place heavy focus on keeping my toolbelt of web dev technologies up to
        date to ensure that what I build is speedy, scalable, secure. I am
        particularly partial to the <a href="https://jamstack.org/">JAMstack</a>{" "}
        architecture.
      </p>
      <h1>Contact</h1>
      <p>310.990.5171</p>
      <p>trevor.levinson@gmail.com</p>
    </Container>
  </Layout>
)

export default IndexPage
