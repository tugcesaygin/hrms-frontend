import React, { useState, useEffect } from "react";
import SystemEmployeesService from "../../services/systemEmployeeService";

export default function SystemEmployee() {
    const[systememployees , setSystemEmployee] = useState([])

    useEffect(()=>{
      let systemEmployeeService = new SystemEmployeesService()
      systemEmployeeService.getSystemEmployee().then(result=> setSystemEmployee(result.data.data))
    })



    return (
        <div>
           <table class="ui celled table">
  <thead>
    <tr><th>System Employee</th>
    <th>Age</th>
    <th>Job</th>
  </tr></thead>


  <tbody>
   
   {
     systememployees.map(systememployee=>(
      <><tr>
        
       </tr><tr>
        {systememployees.name}
         </tr><tr>

         </tr><tr>
        {systememployees.lastName}
         </tr><tr>

         </tr><tr>
        {systememployees.email}
         </tr><tr>

         </tr><tr>
        {systememployees.id}
         </tr><tr>


      </tr></>


     ))
   }
  </tbody>
</table>
        </div>
    )
}
