import { useRouter } from "next/router";
import styles from "./Header.module.css";
import { Row, Col } from "react-bootstrap";

function Header() {
  const router = useRouter();

  async function handleLoader(URL) {
    await router.push(URL);
  }

  return (
    <Row className={styles.header}>
      <Col xs={{ span: 4 }} sm={{ span: 4 }}>
        <h1
          className="linkLabel"
          onClick={() => {
            handleLoader("/");
          }}
        >
          <span className={"logoColor"}>F</span>ood List
        </h1>
      </Col>
      <Col xs={{ span: 4 }} sm={{ span: 4 }}>
        <h1
          className="linkLabel"
          onClick={() => {
            handleLoader("/backstory");
          }}
        >
          <span className={"logoColor"}>T</span>he Backstory
        </h1>{" "}
      </Col>
      <Col xs={{ span: 4 }} sm={{ span: 4 }}>
        <h1
          className="linkLabel"
          onClick={() => {
            handleLoader("/funZone");
          }}
        >
          <span className={"logoColor"}>T</span>he Fun Zone
        </h1>
      </Col>
      <hr style={{ color: "grey", borderWidth: "2px", margin: 0 }}></hr>
    </Row>
  );
}

export default Header;
