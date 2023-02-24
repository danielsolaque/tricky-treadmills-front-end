import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import MyPhoto from "./fotoPersonal.jpg";

// import "./Footer.css";

const Footer = () => {
  return (
    <div
      style={{
        "--cc": "0",
        //   "--cc-sm": "2",
        "--cc-xl": "0",
        "--cg": "0 rem",
        // ESTE ES EL BACKGROUND
        "--bg": "#4A69BD",
        "--p": "1.5rem",
        "--pos": "relative",
      }}
    >
      <footer className="bg-dark text-white py-5">
        <Container>
          <p
            style={{
              margin: "10px 10px",
              color: "dark",
              fontSize: "16px",
              fontWeight: "bold",
              fontStyle: "italic",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Click below to see more projects by this developer :
          </p>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "dark",
              fontWeight: "bold",
            }}
          >
            <Col
              xs={6}
              sm={4}
              className="d-flex justify-content-center align-items-center"
            >
              <a href="https://github.com/danielsolaque">
                <div style={{ width: "50px", height: "50px" }}>
                  <Image
                    src={MyPhoto}
                    roundedCircle
                    className="footer-image"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "25px",
                      overflow: "hidden",
                    }}
                  />
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;



