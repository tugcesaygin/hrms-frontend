import React from 'react'

export default function JobPositions() {
    return (
        <div>
            <table class="ui inverted table">
                <thead>
                    <tr>
                        <th>Job Positions</th>
                        <th>Status</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Approved</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Jamie</td>
                        <td>Approved</td>
                        <td>Requires call</td>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Denied</td>
                        <td>None</td>
                    </tr>
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
