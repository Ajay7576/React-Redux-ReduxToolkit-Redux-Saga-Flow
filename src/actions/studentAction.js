import * as type from '../constants/studentConstants';


export const getStudents = () => {
  return { 
    type:type.All_STUDENT_REQUEST
  }
};


export const newStudent=(newStudent)=>{
  return {
    type:type.NEW_STUDENT_REQUEST,
    payload:newStudent,

  };

};

export const updateStudent=(updateStudent)=>{
  return {
    type:type.UPDATE_STUDENT_REQUEST,
    payload:updateStudent,
  };

};

export const deleteStudent=(id)=>{
  return {
    type:type.DELETE_STUDENT_REQUEST,
    payload:id,
  }

};