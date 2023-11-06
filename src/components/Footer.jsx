import { MailchimpForm } from "./MailChimpSubscribe";
import logo from "../assets/img/logo.png";
import { Col, Container, Row } from "react-bootstrap";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <h1 className="footertext">Joel Vasquez Code</h1>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            {/* <div className="social-icon">
              <a href="">
                {" "}
                <img src={"example"} alt="" />{" "}
              </a>
              <a href="">
                {" "}
                <img src={"example"} alt="" />{" "}
              </a>
              <a href="">
                {" "}
                <img src={"example"} alt="" />{" "}
              </a>
            </div> */}
            <p>CopyRight 2023. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
