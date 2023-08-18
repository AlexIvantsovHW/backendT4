import { React } from "react";
import { Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import { Regform, initialValues, validateSchema, onSubmit } from "./RegForm";
import moment from "moment";
import { useNavigate } from "react-router";
import API from "../../API/API";
import { submitSVG } from "../CommonFunc";
const date = moment().format("YYYY-MM-DD HH:mm:ss");

const Registation = (props) => {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    let fData = new FormData();
    fData.append("name", values.name);
    fData.append("email", values.email);
    fData.append("pass", values.password);
    fData.append("tReg", date);
    debugger;
    API.getForm(fData, values);
    debugger;
    navigate("/");
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <div className="container my-5">
          <div className="mx-auto mw-100">
            <h1 className="text-center">Registration</h1>
            <div className="mb-3 d-flex align-items-center flex-column">
              {Regform("name")}
              {Regform("email")}
              {Regform("password")}
              <div><Button className="btn bg-success" type="submit">{submitSVG} Submit</Button></div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Registation;
