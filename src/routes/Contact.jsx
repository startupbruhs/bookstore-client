import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Row as AntRow, Button } from "antd";
import styled from "styled-components";
import openNotification from "../utils/openNotification";
import Input from "../components/generic/TextInput";
import Area from "../components/generic/TextArea";

const Row = styled(AntRow)`
  margin: 10px 0px;
`;

const contactFormValidator = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  description: Yup.string()
    .max(200, "Must be 200 characters or less")
    .required("Required")
});

const Contact = () => {
  return (
    <>
      <h1> Contact us</h1>
      <Formik
        initialValues={{ email: "", description: "" }}
        validationSchema={contactFormValidator}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            openNotification(
              "success",
              "Submitted",
              JSON.stringify(values, null, 2)
            );
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Row>
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Your email ?"
            />
          </Row>
          <Row>
            <Area
              label="Your thoughts?"
              name="description"
              type="text"
              placeholder="Express yourself"
            />
          </Row>
          <Row>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Formik>
    </>
  );
};

export default Contact;
