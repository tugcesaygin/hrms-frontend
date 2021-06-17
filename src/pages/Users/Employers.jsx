import React, { useState, useEffect } from "react";
import EmployersService from "../../services/employersService";

export default function Employers() {

    const [employers, setEmployers] = useState([])

    useEffect(()=>{
       let employersService = new EmployersService()
       employersService.getEmployers().then(result=>setEmployers(result.data.data))
    })


    return (
        <div>
            <table class="ui single line table">
                <thead>
                    <tr>
                        <th>Employers</th>
                        <th>Company Name</th>
                        <th>Tel No</th>
                        <th>Web Site</th>
                    </tr>
                </thead>


                <tbody>
                    {
                        employers.map(employers => (
                            <><tr>

                                </tr><tr>

                                </tr><tr>

                                </tr></>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
