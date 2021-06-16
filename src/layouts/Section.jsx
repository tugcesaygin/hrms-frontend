import React from 'react'
import {Grid, GridColumn} from 'semantic-ui-react'
import JobPositions from '../pages/JobPositions/JobPositions'
import Employers from '../pages/Users/Employers'
import SystemEmployee from '../pages/Users/SystemEmployee'
import JobSeekers from '../pages/Users/JobSeekers'

export default function Section() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn size={14}>
                        <JobSeekers />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={14}>
                        <Employers/>
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={14}>
                        < JobPositions/>
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={14}>
                        <SystemEmployee />
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}
