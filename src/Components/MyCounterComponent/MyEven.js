import React, { Component } from 'react'

export default class MyEven extends Component {
    render() {
        return (
            <div>
                <p>even {this.props.even}</p>
            </div>
        )
    }
}
