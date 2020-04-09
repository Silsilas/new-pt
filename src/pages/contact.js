import React from "react"
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from 'gatsby'
import { Button, Form, FormGroup, Input, Col } from 'reactstrap';
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Card, CardBody
} from 'reactstrap'

const ContactPage = () => (
  < StaticQuery
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
          <SEO title="Contacts" />
          <BackgroundImage
            Tag="section"
            fluid={imageData}
            className='contact'
          >
            <Card className="container contacts">
              <CardBody className='d-md-flex ml-4'>
                <div className='container '>
                  <h3>Leave message</h3>
                  <Form

                  >
                    <FormGroup row>
                      <Col sm={10}>
                        <Input type="text" name="text" id="exampleTet" placeholder="Name" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={10}>
                        <Input type="text" name="text" id="exampleText" placeholder="Subject" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={10}>
                        <Input type="textarea" rows='6' name="text" id="exampleText" placeholder="Message" />
                      </Col>
                    </FormGroup>
                    <FormGroup check row>
                      <Col sm={{ size: 10 , offset: .1 }}>
                        <Button className='btn'>Submit</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
                <div>
                <h3>Get in touch</h3>
                  <p>Nairobi 519-00517, India</p>
                  <p>+254706 7455 81</p>
                  <p
 sunil@sknayak.com, sknayak18121988@gmail.c</p>
                </div>
              </CardBody>
            </Card>
          </BackgroundImage>
        </Layout>
      )
    }}
  />
)

export default ContactPage





