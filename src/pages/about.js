import React from "react"
import Graph from "../components/graph"
import { Button, Form, FormGroup, Input, Col } from 'reactstrap';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Card, CardBody
} from 'reactstrap'
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from 'gatsby'
// import Image from '../components/images'

const AboutPage = () => (
  <StaticQuery
    query={graphql`
    query {
            image1: file(relativePath: { eq: "sil1.jpg" }){
              childImageSharp{
                fluid( maxWidth:1800){
                  ...GatsbyImageSharpFluid
                }
              }
            }

          }
    `}
    render={data => {
      const imageData = data.image1.childImageSharp.fluid
      return (
        <Layout>
          <SEO title="About" />
          <div className='m-3'>
            <Card className="container">
              <CardBody className=' container d-md-flex'>
                <div className='container'>
                  <BackgroundImage
                    Tag="section"
                    fluid={imageData}
                    className='image'
                  >
                  </BackgroundImage>

                  <p class="font-weight-bold mt-5 kk">Skill</p>
                  <Graph />
                </div>

                <div className=' container'>
                  <h2 className='heads m-1'>About me</h2>
                  <div className='abt-page'>
                    <p>Hey, I'm a full stack developer from Nairobi, Kenya.
                    I can help you build your next product.I design, build,
                        & manage account.</p>
                    <p>I am a fullstack web developer specialized in creating sites for individuals and small businesses.
                    I provide custom designs at reasonable prices. Frequently, your website is
                            the first impression your customers will get, so make sure it’s a good one.</p>

                  </div>
                  {/* <FormGroup check row>
                      <Button className='btn'><a href="../images/sil.pdf" download>download</a></Button>
                    </FormGroup> */}

                </div>
              </CardBody>
            </Card>
          </div>
        </Layout>
      )
    }}
  />

)

export default AboutPage

