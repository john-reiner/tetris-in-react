import React from 'react'
import {Table} from 'react-bootstrap'
import Score from './Score'

export default function leaderBoard(props) {
    
    // const renderScores = () => {
    //     return props.scores.map(score => {
            
    //         return <Score key={score.id} userName={score.user_id} points={score.points} level={score.level} rows={score.rows} />
    //     })
    // }

    console.log(props)
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Username</th>
                <th>Score</th>
                <th>Rows</th>
                <th>Level</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr> */}
            </tbody>
        </Table>
    )

}
