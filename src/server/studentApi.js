
import axios from "axios";

   const apiUrl = `https://localhost:44368/api/student/`;


    export async function getApi() {
       return await axios.get(apiUrl);
     } ;


   export async function createApi(newStudent){
        return await axios.post(apiUrl,newStudent);
     };


     export async function updateApi(updateStudent){
        return await axios.put(apiUrl,updateStudent);
     };


     export async function deleteApi(deleteStudent){
        return await axios.delete(apiUrl+deleteStudent);
     };
 

