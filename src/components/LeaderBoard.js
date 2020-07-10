import React from 'react'
import {Table} from 'react-bootstrap'
import Score from './Score'

export default function leaderBoard(props) {
    
    const renderScores = () => {
        return props.scores.map(score => {
            
            return <Score key={score.id} id={score.id} username={score.user_id} score={score.points} level={score.level} rows={score.rows} />
        })
    }

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
                {renderScores()}
            </tbody>
        </Table>
    )

}
