import { combineReducers } from 'redux';
import {studentReducer, newStudentReducer,updateStudentReducer, deleteStudentReducer } from './studentReducer';

const rootReducer = combineReducers({
  student: studentReducer,
  newStudent:newStudentReducer,
  updateStudent:updateStudentReducer,
  deleteStudent:deleteStudentReducer
});

export default rootReducer;