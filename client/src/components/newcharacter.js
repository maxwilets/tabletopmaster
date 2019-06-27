import React, { Component } from 'react'
import Leftsheet from './leftsheet';

export default class NewCharacter extends Component {
    render() {
        return (
            <div>
                <h3>New Charactersheet</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Leftsheet/>
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
