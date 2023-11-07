import { Col, Container, Row } from "react-bootstrap";
import banner from "../assets/img/banner.png";
import { useEffect, useState } from "react";
import TrackVisibility from 'react-on-screen';

export function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1)
  const toRotate = ["Full Stack Web Developer  ", "Designer Web", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <div className="page-container">
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
          {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <span className="tagline"> Welcome to my portfolio</span>
            <h1>
              {`Hola, mi nombre es Joel Vasquez y actualmente soy `}
              <span className="wrap">{text}</span>{" "}
            </h1>
            <p>
          Soy un apasionado por la tecnologia y el desarrollo de software, estoy altamente capacitado para desarrollar apps con el lenguaje de React y tambien para sincronizar el backend de las aplicaciones. Soy de la ciudad de Cali-Colombia.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect
              <i className="bi bi-arrow-right-circle" />
            </button>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={banner} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
}
