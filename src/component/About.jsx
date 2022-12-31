import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";



const About = () => {


  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required"),
  });


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              debugger
              console.log(values);
              alert(JSON.stringify(values));
            }}
          >
            {({ touched, errors,  values }) =>
                <div>
                  <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                      <h1 className="mt-5">Login Form</h1>
                    </div>
                  </div>
                  <Form>
                    <div className="form-group col-4">
                      <label>Email</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className={`mt-2 form-control

               ${touched.email && errors.email ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="email"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group col-4">
                      <label  className="mt-3">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className={`mt-2 form-control
             ${touched.password && errors.password ? "is-invalid" : ""}`}
                      />
                      <ErrorMessage
                        component="div"
                        name="password"
                        className="invalid-feedback"
                      />
                    </div>
               <div className="form-group col-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                    >
                      Submit
                    </button>
                    </div>
                  </Form>
               </div>
            }
          </Formik>
        </div>
      </div>
    </div>
  );

}

export default About;




