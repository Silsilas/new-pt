import React from "react"
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from 'gatsby'
import { FaSearch, FaLink } from 'react-icons/fa';
import '../style/style.css'
import {
  Card, CardBody
} from 'reactstrap'
// import Image from "../components/images"
import Layout from "../components/layout"
import SEO from "../components/seo"


const ProjectsPage = () => (

  // const copyText = () => {
  //   var copyText = document.getElementById("myInput");
  //   copyText.select();
  //   copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  //   document.execCommand("copy");
  //   alert("Copied the text: " + copyText.value);
  // }

  <StaticQuery
    query={graphql`
  query {
          image1: file(relativePath: { eq: "chat.jpeg" }){
            childImageSharp{
              fluid( maxWidth:1800){
                ...GatsbyImageSharpFluid
              }
            }
          }
          image2: file(relativePath: { eq: "color.png" }){
              childImageSharp{
                fluid( maxWidth:1800){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3: file(relativePath: { eq: "gradr.jpg" }){
              childImageSharp{
                fluid( maxWidth:1800){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image4: file(relativePath: { eq: "grandmas.png" }){
              childImageSharp{
                fluid( maxWidth:1800){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image5: file(relativePath: { eq: "tetris.png" }){
              childImageSharp{
                fluid( maxWidth:1800){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image6: file(relativePath: { eq: "image.png" }){
              childImageSharp{
                fluid( maxWidth:1800){
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
  `}
    render={data => {
      return (
        <Layout>
          <SEO title="Home" />
          <div className='mt-40 text-center'>
          <h1>Project</h1>
          <Card className="container">
              <CardBody className=''>
                <div class="row mt-30">
                  <div class="col-md-4 col-sm-6 mb-3">
                    <div class="box1">
                      <BackgroundImage
                        Tag="section"
                        fluid={data.image1.childImageSharp.fluid}
                        className='background1 img'
                      >
                      </BackgroundImage>
                      <div class="box-content">
                        <h3 class="title">React ChatApp</h3>
                        <div className='space'>
                          <p>The app enables user to chat with<br></br>
                         via email created durring sighnup
                       </p>
                          <p>Language: React</p>
                        </div>
                        <ul class="icon">
                          <li><a onClick='copyText()' href="#" id="link" className="fa fa-search"><FaSearch /></a></li>
                          <li><a href="#" className="fa fa-link"><FaLink /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 mb-3">
                    <div class="box1">
                      <BackgroundImage
                        Tag="section"
                        fluid={data.image2.childImageSharp.fluid}
                        className='background1 img'
                      >
                      </BackgroundImage>
                      <div class="box-content">
                        <h3 class="title">Color Game</h3>
                        <div className='space'>
                          <p>A RGB color game one picks the color<br></br>
                         that matches the RGB given
                       </p>
                          <p>Language: javaScript</p>
                        </div>
                        <ul class="icon">
                          <li><a href="#" className="fa fa-search"><FaSearch /></a></li>
                          <li><a href="#" className="fa fa-link"><FaLink /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 mb-3">
                    <div class="box1">
                      <BackgroundImage
                        Tag="section"
                        fluid={data.image3.childImageSharp.fluid}
                        className='background1 img'
                      >
                      </BackgroundImage>
                      <div class="box-content">
                        <h3 class="title">React ChatApp</h3>
                        <div className='space'>
                          <p>A smart card vaidator app that enables<br></br>
                         user to validate weather the card<br></br> is valid or not
                       </p>
                          <p>Language: javaScript</p>
                        </div>
                        <ul class="icon">
                          <li><a href="#" className="fa fa-search"><FaSearch /></a></li>
                          <li><a href="#" className="fa fa-link"><FaLink /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 mb-3">
                    <div class="box1">
                      <BackgroundImage
                        Tag="section"
                        fluid={data.image4.childImageSharp.fluid}
                        className='background1 img'
                      >
                      </BackgroundImage>
                      <div class="box-content">
                        <h3 class="title">grandma's Website</h3>
                        <div className='space'>
                          <p>An e-commers site that enable users to buy<br></br>
                         from the website
                       </p>
                          <p>Language: javaScript</p>
                        </div>
                        <ul class="icon">
                          <li><a href="#" className="fa fa-search"><FaSearch /></a></li>
                          <li><a href="#" className="fa fa-link"><FaLink /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 mb-3">
                    <div class="box1">
                      <BackgroundImage
                        Tag="section"
                        fluid={data.image5.childImageSharp.fluid}
                        className='background1 img'
                      >
                      </BackgroundImage>
                      <div class="box-content">
                        <h3 class="title">Tetris Game</h3>
                        <div className='space'>
                          <p>A canvas game desighned for desktops<br></br>
                         and computers only
                       </p>
                          <p>Language: HTML5 & javaScript</p>
                        </div>
                        <ul class="icon">
                          <li><a href="#" className="fa fa-search"><FaSearch /></a></li>
                          <li><a href="#" id="link" className="fa fa-link"><FaLink /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6 mb-3">
                    <div class="box1">
                      <BackgroundImage
                        Tag="section"
                        fluid={data.image6.childImageSharp.fluid}
                        className='background1 img'
                      >
                      </BackgroundImage>
                      <div class="box-content">
                        <h3 class="title">Mini Netflix</h3>
                        <div className='space'>
                          <p>A netflix clone app that enable users<br></br>
                         to perform CRUDE operations
                       </p>
                          <p>Language: Angular</p>
                        </div>
                        <ul class="icon">
                          <li><a href="#" className="fa fa-search"><FaSearch /></a></li>
                          <li><a href="#" className="fa fa-link"><FaLink /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
          </Card>
          </div>
        </Layout>
      )
    }}
  />
)


export default ProjectsPage
