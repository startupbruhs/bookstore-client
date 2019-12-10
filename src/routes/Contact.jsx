import React from "react";
import { Form, Row as AntRow, Button, Input as AntInput } from "antd";
import styled from "styled-components";
import openNotification from "../utils/openNotification";

const { TextArea } = AntInput;

const Input = styled(AntInput)`
  width: 40%;
`;

const Row = styled(AntRow)`
  margin: 10px 0px;
`;

const Area = styled(TextArea)`
  width: 40%;
`;

const Contact = () => {
  return (
    <div>
      <Form>
        <Row>
          <Input type="email" placeholder="Your email ?"></Input>
        </Row>
        <Row>
          <Area rows={4} placeholder="Your thoughts ?"></Area>
        </Row>
        <Row>
          <Button
            onClick={() => {
              openNotification(
                "success",
                "Submitted",
                "We will contact you as soon as possible!"
              );
            }}
          >
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default Contact;
