import React from "react"
import { Container, Card, CardBody, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { IoIosDesktop, IoMdCode, } from 'react-icons/io';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaBarcode } from 'react-icons/fa';

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <Container className='text-center'>
    <h1>services</h1>
      <Row sm="3">
        <Col> <Card className="container m-1">
          <CardBody className='d-md-flex'>
            <div className='container icon-container'>
              <div className='icon-box'>
                <div className='icons'>
                  <IoIosDesktop size={80} />
                </div>
                <h5 class="font-weight-900">WEBSITE DESIGHN</h5>
              </div>
              <div className='d-flex skills'>
                <div className='mr-1'>
                  <p class="font-weight-bold ">Skills :</p>
                </div>
                <div className='line-count'>
                  <p >-Visual Desighning</p>
                  <p>-UX/UI</p>
                  <p>-Print Design Skills</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card></Col>
        <Col> <Card className="container m-1">
          <CardBody className='d-md-flex'>
            <div className='container icon-container'>
            <div className='icon-box'>
              <div className='icons'>
                <IoMdCode size={80} />
              </div>
              </div>
              <h5 class="font-weight-900">SCRIPTING/CODING</h5>
              <div className='d-flex skills'>
                <div className='mr-1'>
                  <p class="font-weight-bold ">Skills :</p>
                </div>
                <div className='line-count'>
                  <p >-React</p>
                  <p>-Nodejs</p>
                  <p>Angula</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card></Col>
        <Col> <Card className="container m-1">
          <CardBody className='d-md-flex'>
            <div className='container icon-container'>
            <div className='icon-box'>
              <div className='icons'>
                <FaLaptopCode size={80} />
              </div>
              </div>
              <h5 class="font-weight-900">WEB APPLLICATIONS</h5>
              <div className='d-flex skills'>
                <div className='mr-1'>
                  <p class="font-weight-bold ">Skills :</p>
                </div>
                <div className='line-count'>
                  <p >-Delivering presentations</p>
                  <p>-Proactivity and Creativity</p>
                  <p>-Communication Skills</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card></Col>
        <Col> <Card className="container m-1">
          <CardBody className='d-md-flex'>
            <div className='container icon-container'>
            <div className='icon-box'>
              <div className='icons'>
                <FaMobileAlt size={80} />
              </div>
              </div>
              <h5 class="font-weight-900">RESPONSIVE DESIGHN</h5>
              <div className='d-flex skills'>
                <div className='mr-1'>
                  <p class="font-weight-bold ">Skills :</p>
                </div>
                <div className='line-count'>
                  <p >-Bootsrap</p>
                  <p>-GatsbyJs</p>
                  <p>-Css3</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card></Col>
        <Col> <Card className="container m-1">
          <CardBody className='d-md-flex'>
            <div className='container icon-container'>
            <div className='icon-box'>
              <div className='icons'>
                < FaDatabase size={80} />
              </div>
              <h5 class="font-weight-900">DATABASE DESIGNING</h5>
              </div>
              <div className='d-flex skills'>
                <div className='mr-1'>
                  <p class="font-weight-bold ">Skills :</p>
                </div>
                <div className='line-count'>
                  <p >-mongoDb</p>
                  <p>-Firebase</p>
                  <p>-PostgreSQL</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card></Col>
        <Col> <Card className="container m-1">
          <CardBody className='d-md-flex'>
            <div className='container icon-container'>
            <div className='icon-box'>
              <div className='icons'>
                <FaBarcode size={80} />
              </div>
              <h5 class="font-weight-900">PROGRAMMING</h5>
              </div>
              <div className='d-flex skills'>
                <div className='mr-1'>
                  <p class="font-weight-bold ">Skills :</p>
                </div>
                <div className='line-count'>
                  <p >-javaScript</p>
                  <p>-Python</p>
                  <p>-Html/css</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card></Col>
      </Row>

    </Container>

  </Layout>
)

export default ServicesPage
