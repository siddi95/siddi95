import React, { useState, useContext } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  CardFooter,
  ButtonToggle
} from "reactstrap";
import { countContext } from "../Store";

function MainForm() {
  const [text, setText] = useState("");
  const [flag, setFlag] = useState("secondary");
  const [count, setCount] = useContext(countContext);

  const onButtonClick = e => {
    e.preventDefault();
    setFlag("danger");
    setCount(count + 1);
  };

  return (
    <div style={{ backgroundColor: "#FFFAFA" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50vw",
          boxShadow: "-2px 10px 14px 0px rgba(0,0,0,0.75)"
        }}
      >
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader style={{ fontSize: "25px", fontWeight: "500" }}>
                Text Input
              </CardHeader>
              <CardBody>
                <Form style={{ fontSize: "18px" }}>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={2}>
                      Text Field:
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="ScoreTracker"
                        name="InsertCode"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        id="exampleField"
                        placeholder="Enter here..."
                      />
                    </Col>
                  </FormGroup>
                </Form>
                <Button onClick={onButtonClick} color="primary">
                  Submit
                </Button>
              </CardBody>
              <CardFooter style={{ textAlign: "right" }}>
                {" "}
                <ButtonToggle disabled color={flag}>
                  {""}
                  <i class="fa fa-flag"></i> {count}
                </ButtonToggle>{" "}
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default MainForm;
