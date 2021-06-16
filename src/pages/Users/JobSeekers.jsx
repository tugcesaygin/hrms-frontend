import React from 'react'

export default function JobSeekers() {
    return (
        <div>
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Candidates</th>
                        <th>Status</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>No Action</td>
                        <td class="selectable">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Jamie</td>
                        <td>Approved</td>
                        <td class="selectable">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Denied</td>
                        <td class="selectable">
                            <a href="#">Edit</a>
                        </td>
                    </tr>
                    <tr class="warning">
                        <td>John</td>
                        <td>No Action</td>
                        <td class="selectable warning">
                            <a href="#">Requires change</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Jamie</td>
                        <td class="positive">Approved</td>
                        <td class="selectable positive">
                            <a href="#">Approve</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td class="negative">Denied</td>
                        <td class="selectable negative">
                            <a href="#">Remove</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
