import React from "react"
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../style/style.css'
import Text from '../components/text'
import AboutPage from './about'
import ServicesPage from './services'
import ProjectsPage from './projects'
import ContactPage from './contact'
import More from '../components/more'



const IndexPage = () => (
  <StaticQuery
    query={graphql`
    query {
            indexImage: file(relativePath: { eq: "background.jpeg" }){
              childImageSharp{
                fluid( maxWidth:1800){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
    `}
    render={data => {
      const imageData = data.indexImage.childImageSharp.fluid
      return (
        <Layout>
          <SEO title="Home" />
          <BackgroundImage

            Tag="section"
            fluid={imageData}
            className='background '
          >
              <Text/>
          </BackgroundImage>
          <AboutPage/>
          <ServicesPage/>
          <ProjectsPage/>
          <ContactPage/>
          {/* <More/> */}
        </Layout>
      )
    }}
  />
)

export default IndexPage
