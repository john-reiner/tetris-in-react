import React from 'react'

export default function Score(props) {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.username}</td>
            <td>{props.score}</td>
            <td>{props.level}</td>
            <td>{props.rows}</td>
        </tr>
    )
}
