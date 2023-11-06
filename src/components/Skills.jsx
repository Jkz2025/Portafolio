import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";
import porcentaje1 from "../assets/porcentajes/95.png"
import porcentaje2 from "../assets/porcentajes/96.png"
import porcentaje3 from "../assets/porcentajes/90.png"
import porcentaje4 from "../assets/porcentajes/87.png"
import colorshap from "../assets/img/color-sharp.png"

export function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return <section className="skill" id="skills">
    <Container>
        <Row>
            <Col>
            <div className="skill-bx">
                <h2>
                    Skills
                </h2>
                <p>Actualmente cuento con estas habilidades y todos los dias aumenta mi desarrollo</p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                <img src={porcentaje1} alt="Image" />
                <h5>Web development</h5>
                </div>

                <div className="item">
                <img src={porcentaje2} alt="Image" />
                <h5>Web Designer</h5>
                </div>
                
                <div className="item">
                <img src={porcentaje3} alt="Image" />
                <h5>Photoshop Designer</h5>
                </div>
                
                <div className="item">
                <img src={porcentaje4} alt="Image" />
                <h5>Mysql & database</h5>
                </div>
                
            </Carousel>
            </div>
            </Col>
        </Row>
    </Container>
  </section>;
}

export default Skills;
