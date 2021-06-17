import axios from "axios";


export default class SystemEmployeesService{
    getSystemEmployee(){
        return axios.get("http://localhost:8080/api/system_employees/getall")
    }
}
