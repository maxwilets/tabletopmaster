import React, { Component } from 'react'

export default class MiddleForm extends Component {
    constructor(props){
        super(props)
        this.state={
            ac:"",
            init:"",
            speed:"",
            hp: "",
            hd: ""
        }
    }
    render() {
        return (
            <div>
                <form className="middle">
                <div className="row">
                <label htmlFor="ac">ARMOR CLASS</label>
                    <input
                        type="text"
                        name="ac"
                        value={this.state.ac}
                        size="2"
                        onChange={this.handleChange}
                        />
                    <label htmlFor="init">INITIATIVE</label>
                    <input
                        type="text"
                        name="init"
                        value={this.state.init}
                        size="2"
                        onChange={this.handleChange}
                        />
                    <label htmlFor="speed">SPEED</label>
                    <input
                        type="text"
                        name="speed"
                        value={this.state.speed}
                        size="2"
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="row">
                    <label htmlFor="hp">HIT POINTS</label>
                    <input
                        type="text"
                        name="hp"
                        value={this.state.hp}
                        size="3"
                        onChange={this.handleChange}
                        />
                    <label htmlFor="hd">HIT DICE</label>
                    <input
                        type="text"
                        name="ac"
                        value={this.state.hd}
                        size="4"
                        onChange={this.handleChange}
                        />
                    </div>
                </form>
                
            </div>
        )
    }
}
