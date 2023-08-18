import React from "react";
import { Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import moment from"moment";
const date = moment().format('YYYY-MM-DD HH:mm:ss');

function TextError(props) {return <div className="error">{props.children}</div>;}
export function Regform(name) {
  return (
    <div className="mb-5">
      <Field
      className="form-control form-control-lg ml-10" component='input'
        name={name}
        placeholder={name}
        type={"input"}
      />
      <ErrorMessage name={name} component={TextError} className="Error" />
    </div>
  );
}

export const initialValues = { name: "", email: "", password: "" };
export const onSubmit = (values) => {
  console.log("Form data", values);
  console.log("Reg date", date);
};

export const validateSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
