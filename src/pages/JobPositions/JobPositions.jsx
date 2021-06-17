
import React, { useState, useEffect } from "react";
import JobPositionsService from "../../services/jobPositionsService";

export default function JobPositions() {

    const [jobpositions, setJobPositions] = useState([])

    useEffect(()=>{
        let jobPositionsService = new JobPositionsService()
        jobPositionsService.getJobPositions().then(result=>setJobPositions(result.data.data))
    } )


    return (
        <div>
            <table class="ui inverted table">
                <thead>
                    <tr>
                        <th>Job Positions</th>
                        <th>Job Titles</th>
                        <th></th>
                        <th>Web Site</th>
                        <th>City</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        jobpositions.map(jobpositions => (
                            <><tr>

                                </tr><tr>
                                   {jobpositions.jobTitle }
                                </tr><tr>
                                   {jobpositions.jobPositionsId }
                                </tr><tr>
                                  {jobpositions.userId }
                                </tr><tr>

                             </tr></>
                        ))
                    }

                </tbody>
                <tfoot>
                    <tr><th>3 People</th>
                        <th>2 Approved</th>
                        <th></th>
                    </tr></tfoot>
            </table>
        </div>
    )
}
