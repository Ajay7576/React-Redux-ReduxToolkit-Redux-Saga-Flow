
import * as type from '../constants/studentConstants';


// Get All Student 

export  function studentReducer (state = { students: [] }, action){
  console.log(action);
    switch (action.type) {

      case type.All_STUDENT_SUCCESS:
        return {
          loading: false,
          // students: action.students,
          students:[...action.students.data]
        };
      default:
        return state;
    }
  };


  
//      New Student


export  function newStudentReducer (state = { newStudent: [] }, action){
  switch (action.type) {

      case type.NEW_STUDENT_SUCCESS:
        return {
          loading: false,
          success: action.success,
          newStudent: action.newStudent
        };

    default:
      return state;
  }
};



export  function updateStudentReducer (state = { updateStudent: [] }, action){
  switch (action.type) {
      case type.UPDATE_STUDENT_SUCCESS:
        return {
          loading: false,
          success: action.success,
          updateStudent: action.updateStudent
        };

    default:
      return state;
  }
};



export  function deleteStudentReducer (state = { deleteStudent: [] }, action){
  
switch (action.type) {
    case type.DELETE_STUDENT_SUCCESS:
      return {
        loading: false,
        success: action.success,
      };

  default:
    return state;
}
};