import React , {useState} from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";



interface AboutUsProps {
  title?: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ title = "About Us" }) => {
  const navigate = useNavigate ();
  const handleClick = () => {
    navigate ("/Contact")
  }
  return (
    <section className="py-3 py-md-5 py-xl-8 ">
      <Container>
        <Row >
          <Col xs={12} md={10} lg={8}>
            <h1 className="header">About</h1>
            <h3 className="display-5 mb-4">
              At our core, we prioritize pushing boundaries, embracing the
              unknown, and fostering a culture of continuous learning.
            </h3>

            <Button  onClick={handleClick} color="primary" size="small" className="button1">
              ContactUs
            </Button>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="gy-3 gy-md-4 gy-lg-0">
          <Col xs={12} lg={6}>
            <Card className="bg-light  custom-card">
              <Row className="gy-3 gy-md-0 align-items-md-center">
                <Col md={5}>
                  <img
                    src="https://www.shutterstock.com/image-photo/compliance-rules-law-regulation-policy-600nw-1171280545.jpg"
                    className="img-fluid rounded-start"
                    alt=""
                  />
                </Col>
                <Col md={7}>
                  <div className="card-body p-0">
                    <h2 className="card-title h4 mb-3">Why Choose Us?</h2>
                    <p className="card-text lead">
                      With years of experience and deep industry knowledge, we
                      have a proven track record of success and are pushing
                      ourselves to stay ahead of the curve.
                    </p>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={12} lg={6}>
            <Card className="bg-light p-3 m-0">
              <Row className="gy-3 gy-md-0 align-items-md-center">
                <Col md={5}>
                  <img
                    src="https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </Col>
                <Col md={7}>
                  <div className="card-body p-0">
                    <h2 className="card-title h4 mb-3">Visionary Team</h2>
                    <p className="card-text lead">
                      With a team of visionary engineers, developers, and
                      creative minds, we embark on a journey to transform
                      complex challenges into ingenious technological solutions.
                    </p>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <Col xs={12} lg={6} xl={5}>
            <img
              className="img-fluid rounded"
              loading="lazy"
              src="./assets/img/about-img-1.jpg"
              alt=""
            />
          </Col>
          <Col xs={12} lg={6} xl={7}>
            <Row className="justify-content-xl-center">
              <Col xs={12} xl={11}>
                <h2 className="h1 mb-3">{title} & Our Services</h2>
                <p className="lead fs-4 text-secondary mb-3">
                  We help people to build incredible brands and superior
                  products.Our perspective is to furnish outstanding captivating
                  services.
                </p>
                <p className="mb-5">
                  With St.Code you get the experience to innovation part of tech
                  and how it can bring a stable income.
                </p>
                <Row className="gy-4 gy-md-0 gx-xxl-5X">
                  <Col xs={12} md={6}>
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-gear-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="mb-3">Versatile Brand</h4>
                        <p className="text-secondary mb-0">
                          We are crafting a digital method that subsists life
                          across all mediums.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-fire"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="mb-3">Digital Agency</h4>
                        <p className="text-secondary mb-0">
                          We believe in innovation by merging primary with
                          elaborate ideas.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={10} lg={8}>
            <h3 className="fs-5 mb-2 text-secondary text-uppercase">
              Our Values
            </h3>
            <p className="lead">
              We are guided by a set of core values that define our approach to
              work and our commitment to our clients. These values are the
              foundation of our culture and drive our actions and decisions.
            </p>
            <ul>
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Excellence</li>
              <li>Collaboration</li>
              <li>Sustainability</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
