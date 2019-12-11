import React from "react";
import styled from "styled-components";
import { useField } from "formik";
import { Input as AntInput } from "antd";

const { TextArea } = AntInput;

const AntArea = styled(TextArea)`
  width: 40%;
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const Error = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 0.25rem;
`;

const Area = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel> <br />
      <AntArea rows={4} className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <Error className="error">{meta.error}</Error>
      ) : null}
    </>
  );
};

export default Area;
