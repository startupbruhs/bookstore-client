import React from "react";
import styled from "styled-components";
import { useField } from "formik";
import { Input as AntInput } from "antd";

const TextInput = styled(AntInput)`
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

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel> <br />
      <TextInput {...field} {...props} />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </>
  );
};

export default Input;
