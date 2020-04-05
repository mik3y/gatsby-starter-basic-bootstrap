import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  </Layout>
);

export default IndexPage;
