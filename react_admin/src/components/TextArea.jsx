import { ErrorMessage, Field } from "formik";
import React, { Fragment } from "react";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
const TextArea = (props) => {
  const { label, name, type, ...rest } = props;
  return (
    <Field
      name={name}
      render={({ field }) => {
        console.log(field)
        return (
          <Fragment>

          </Fragment>
        );
      }}
    />
  );
};

export default TextArea;
