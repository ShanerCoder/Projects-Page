import { useRouter } from "next/router";
import classes from "./Header.module.css";
import { Row, Col } from "react-bootstrap";

function Header() {
  const router = useRouter();

  async function handleLoader(URL) {
    await router.push(URL);
  }

  return (
    <Row className={classes.header}>
      <Col xs={{ span: 6 }} sm={{ span: 3 }}>
        <h1
          className="linkLabel"
          onClick={() => {
            handleLoader("/");
          }}
        >
          Home
        </h1>
      </Col>
      <Col xs={{ span: 6 }} sm={{ span: 3 }}>
        <h1
          className="linkLabel"
          onClick={() => {
            handleLoader("/projects");
          }}
        >
          Projects
        </h1>
      </Col>
      <Col xs={{ span: 6 }} sm={{ span: 3 }}>
        <h1
          className="linkLabel"
          onClick={() => {
            handleLoader("/experience");
          }}
        >
          Experience
        </h1>
      </Col>
      <Col xs={{ span: 6 }} sm={{ span: 3 }}>
        <h1
          className="linkLabel"
          onClick={() => {
            handleLoader("/other");
          }}
        >
          Other
        </h1>
      </Col>
      <hr style={{ color: "grey", borderWidth: "2px", margin: 0 }}></hr>
    </Row>
  );
}

export default Header;
