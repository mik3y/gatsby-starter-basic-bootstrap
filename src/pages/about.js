import React from "react";
import { Col, Row, Card, ListGroup } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Row>
      <Col>
        <h1>About</h1>
        <p>This is a basic gatsby starter</p>
      </Col>
    </Row>
    <Row>
      <Col md="6">
        <Card>
          <Card.Body>
            <Card.Title>Features</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>
                  Uses react-bootstrap and little else
                </ListGroup.Item>
                <ListGroup.Item>
                  Optional theme support with bootswatch
                </ListGroup.Item>
                <ListGroup.Item>SCSS styling</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md="6">
        <Card>
          <Card.Body>
            <Card.Title>More Information</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item action href="https://mik3y.github.io/gatsby-starter-basic-bootstrap/">Visit the demo page</ListGroup.Item>
                <ListGroup.Item action href="https://github.com/mik3y/gatsby-starter-basic-bootstrap">View/edit on github</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Layout>
);

export default AboutPage;
