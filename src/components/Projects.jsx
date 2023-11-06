import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorsharp2 from "../assets/img/color-sharp2.png";
import projectuno from "../assets/img/project1.jpg";
import projectdos from "../assets/img/project2.jpg";

export function ProjectsJoel() {
  const projects = [
    {
      id: 1,
      title: "Personal Ecommerce",
      description: "Design & Development",
      imgUrl: projectdos,
    },
    {
      id: 2,
      title: "My own website",
      description: "Design & Development",
      imgUrl: projectuno,
    },
    {
      id: 3,
      title: "Personal Ecommerce",
      description: "Design & Development",
      imgUrl: projectdos,
    },
    {
      id: 4,
      title: "My own website",
      description: "Design & Development",
      imgUrl: projectuno,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
            Estos son algunos de mis projectos mas completos y profesionales, he practicado mucho desde un pequeno juego de triqui, hasta un ecommerce.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
              </Tab.Pane>
              <Tab.Pane eventKey="Third">
              {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
              </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      {/* <img className="background-image-right" src={colorsharp2}></img> */}
      </Container>
    </section>
  );
}
