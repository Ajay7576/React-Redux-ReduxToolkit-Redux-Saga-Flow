import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteStudent,
  getStudents,
  newStudent,
  updateStudent,
} from "../actions/studentAction";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";

function StudentCrud({ history }) {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    age: Yup.number().positive().integer().min(1).max(100).required(),
  });

  const dispatch = useDispatch();

  const students = useSelector((state) => state.student.students);

  const [studentForm, setStudentFrom] = useState({
    name: "", email: "", age: ""
  });

  const [saveEdit, setSaveEdit] = useState(false);
  const [title, setTitle] = useState(false);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  const changeHandler = (event) => {
    debugger
    setStudentFrom({
      ...studentForm,
      [event.target.name]: event.target.value,
    });
  };

  const saveClick = (e) => {
    debugger;
    console.log(e);

    dispatch(newStudent(e));
    // setStudentFrom({ name: "", email: "", age: "" });
    window.location.reload();
  };

  function editClick(data) {
    debugger;
    setSaveEdit(true);
    setTitle(true);
    setStudentFrom(data);
  }

  const updateClick = (e) => {
    dispatch(updateStudent(e));
  };

  const deleteClick = (id) => {
    dispatch(deleteStudent(id));
  };

  const clearForm = () => {
    debugger;

    setSaveEdit(false);
    setTitle(false);
     window.location.reload();
  };

  return (
    <div>
      <h2 className="text-black text-center">Student Form</h2>
      <div className="row p-3 m-3">
        <div className="col-9 text-left">
          <h2 className="text-info">Student List</h2>
        </div>
        <div className="col-3">
          <button
            className="btn btn-info"
            data-target="#hybridModel"
            data-toggle="modal"
          >
            New Student
          </button>
        </div>
      </div>

      <div className="col-9 p-4 m-4">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    className="btn btn-info p-1 m-1 btn-block mt-4 col-6 "
                    data-target="#hybridModel"
                    data-toggle="modal"
                    onClick={() => editClick(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger p-1 m-1 btn-block mt-4 col-6"
                    onClick={() => deleteClick(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* save  */}

      <div className="modal" id="hybridModel" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-dark">
              {title ? (
                <h5 className="modal-title text-dark">Edit Student</h5>
              ) : (
                <h5 className="modal-title text-dark">New Student</h5>
              )}

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={clearForm}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <Formik
                      initialValues={{ name: "", email: "", age: "" }}
                      validationSchema={LoginSchema}
                      onSubmit={saveClick}
                    >
                      {({ touched, errors, values }) => (
                        <div>
                          <Form>
                            <div className="form-group col-8 ">
                              <label className="mt-3">Name</label>
                              <Field
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                // onFocus={(e) => setStudentFrom(e.target.value)}
                                // onChange={changeHandler}
                                className={`mt-2 form-control

                 ${touched.name && errors.name ? "is-invalid" : ""}`}
                              />

                              <ErrorMessage
                                component="div"
                                name="name"
                                className="invalid-feedback"
                              />
                            </div>

                            <div className="form-group col-8">
                              <label>Email</label>
                              <Field
                                type="email"
                                name="email"
                                // value={values(...studentForm.email || "")}
                                // onChange={(e) => setStudentFrom(e.target.value)}
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

                            <div className="form-group col-8">
                              <label className="mt-3">Age</label>
                              <Field
                                type="number"
                                name="age"
                                // value={values(...studentForm.age || "")}
                                // onChange={(e) => setStudentFrom(e.target.value)}
                                placeholder="Enter age"
                                className={`mt-2 form-control
                        ${touched.age && errors.age ? "is-invalid" : ""}`}
                              />
                              <ErrorMessage
                                component="div"
                                name="age"
                                className="invalid-feedback"
                              />
                            </div>

                            <div className="modal-footer form-group col-6">
                              {saveEdit ? (
                                <button
                                  type="button"
                                  data-dismiss="modal"
                                  className="btn btn-primary btn-block mt-4 "
                                  onClick={updateClick}
                                >
                                  update
                                </button>
                              ) : (
                                <button
                                  type="submit"
                                  // data-dismiss="modal"
                                  className="btn btn-primary btn-block mt-4"
                                  // onClick={saveClick}
                                >
                                  Save
                                </button>
                              )}
                              <button
                                type="button"
                                className="btn btn-secondary btn-block mt-4"
                                data-dismiss="modal"
                                onClick={clearForm}
                              >
                                Close
                              </button>
                            </div>
                          </Form>
                        </div>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>

              {/* <div className="form-group row p-2 m-2">
                <label>Name</label>
                <input
                  id="txtName"
                  name="name"
                  placeholder="Enter Name"
                  type="text"
                  className="form-control"
                  onChange={changeHandler}
                  value={studentForm?.name || ""}
                />
                <p className="text-danger"></p>
              </div>
              <div className="form-group row p-2 m-2">
                <label>Age</label>
                <input
                  id="txtAddress"
                  name="age"
                  placeholder="Enter Age"
                  type="number"
                  className="form-control"
                  onChange={changeHandler}
                  value={studentForm?.age || ""}
                />
                <p className="text-danger"></p>
              </div>
              <div className="form-group row p-2 m-2">
                <label>Email</label>
                <input
                  id="txtSalary"
                  name="email"
                  placeholder="Enter Email"
                  type="text"
                  className="form-control"
                  onChange={changeHandler}
                  value={studentForm?.email || ""}
                />
                <p className="text-danger"></p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCrud;
