import React from 'react'
import Navi from './Navi'
import JobPostions from '../pages/Users/Employers'
import Employers from '../pages/Users/JobSeekers'
import JobSeekers from '../pages/JobPositions/JobPositions'
import SystemEmployee from '../pages/Users/SystemEmployee'
import Sidebar from './Sidebar'

export default function Dashboard() {
    return (
       <div>

        <Sidebar/>
        <JobPostions/>
        <Employers/>
        <JobSeekers/>
        <SystemEmployee/>
       </div>
    )
}
