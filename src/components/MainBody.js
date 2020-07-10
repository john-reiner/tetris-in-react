import React from 'react'
import Tetris from './Tetris'

// import LeaderBoard from './LeaderBoard'
// import { Route } from 'react-router-dom'

export default function MainBody(props) {
    return (
        <Tetris userId={props.userId} scores={props.scores} username={props.username} />
    )
}
