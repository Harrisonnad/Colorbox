import React, { Component } from 'react'
import Box from './Box'

export default class ColorChart extends Component {
    static defaultProps = {
        Box: [
            {id: 1, color:'Black'},
            {id: 2, color:'Red'},
            {id: 3, color:'Blue'},
            {id: 4, color:'Yellow'},
            {id: 5, color:'Green'},
            {id: 6, color:'Pink'},
            {id: 7, color:'Purple'},
            {id: 8, color:'Turquies'},
            {id: 9, color:'Green'},
            {id: 10, color:'Aqua'},
        ]
    }
    render() {
        return (
            <div>
                {this.props.Box.map((box) => (
                    <Box color={box.color} id={box.id} />
                ))}
            </div>
        )
    }
}
