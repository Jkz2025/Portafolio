import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {

  const redirectLink = () => {
    window.location.href = link
  }

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title} </h4>
          <span>{description}</span>
          <button onClick={redirectLink}>Go to website</button>
        </div>
      </div>
    </Col>
  );
};
