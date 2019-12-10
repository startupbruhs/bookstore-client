import React from "react";
import { Form, Row, Input as EmaiLInput, Button } from "antd";
import styled from "styled-components";
import openNotification from "../utils/openNotification";

const Input = styled(EmaiLInput)`
  width: 40%;
`;
const StyledRow = styled(Row)`
  margin: 10px 0px;
`;

const Contact = () => {
  return (
    <div>
      <Form>
        <StyledRow>
          <Input type="email" placeholder="Your email ?"></Input>
        </StyledRow>
        <StyledRow>
          <Input type="text" placeholder="Your thoughts ?"></Input>
        </StyledRow>
        <StyledRow>
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
        </StyledRow>
      </Form>
    </div>
  );
};

export default Contact;
