import React, { useState, useEffect } from "react";
import JobSeekersService from "../../services/jobSeekersService";

export default function JobSeekers() {

    const [jobseekers, setjobSeekers] = useState([])

    useEffect(() => {
        let jobSeekersService = new JobSeekersService()
        jobSeekersService.getJobSeekers().then(result => setjobSeekers(result.data.data))


    })


    return (
        <div>
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>E-Mail</th>
                        <th>Birthday</th>

                    </tr>
                </thead>


                <tbody>
                    {

                        jobseekers.map(jobseekers => (
                            <><tr>
                                <td>John</td>
                                <td>Jill</td>
                                <td>Jill</td>

                            </tr><tr>
                                    <td>Jamie</td>
                                    <td>Jill</td>
                                    <td>Jill</td>
                                </tr><tr>
                                    <td>Jill</td>
                                    <td>Jill</td>
                                    <td>Jill</td>
                                </tr><tr class="warning">
                                    <td>John</td>
                                    <td>Jill</td>
                                    <td>Jill</td>
                                </tr><tr>
                                    <td>Jamie</td>
                                    <td>Jill</td>
                                    <td>Jill</td>


                                </tr><tr>
                                    <td>Jill</td>
                                    <td>Jill</td>
                                    <td>Jill</td>


                                </tr></>
                        ))


                    }
                </tbody>
            </table>
        </div>
    )
}
