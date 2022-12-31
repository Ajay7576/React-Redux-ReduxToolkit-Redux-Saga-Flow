import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStudents } from "../actions/studentAction";
import { DataGrid } from "@mui/x-data-grid";

const Student = () => {

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "age", headerName: "Age", width: 400 },
    { field: "email", headerName: "Email", width: 500 },
  ];

  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  
  return (
    <div style={{ height: 700, width: "100%" }}>
      <br /> <br /> <br />
      <DataGrid
        rows={students}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />

    </div>
  );
};

export default Student;
