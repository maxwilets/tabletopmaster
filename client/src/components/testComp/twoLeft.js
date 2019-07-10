import React, { Component } from 'react'

export default class twoLeft extends Component {
    constructor(props){
        super(props)
        this.state={
            acrobatics: false,
            animal: false,
            arcana: false,
            athletic: false,
            decpt: false,
            hist: false,
            insight: false,
            intimid: false,
            invest: false,
            med: false,
            nature: false,
            percept: false,
            perform: false,
            persuade: false,
            religion: false,
            sleight: false,
            stealth: false,
            survive: false
        }
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event){
        this.setState({
          [event.target.name]: event.target.value
        })
      };

    render() {
        return (
            <div>
                <form id="skills">
                <label htmlFor="acrobatics">Acrobatics</label>
                    <input
                        type="checkbox"
                        name="acrobatics"
                        onChange={this.handleBox}
                        />
                    <label htmlFor="animal">Animal Handling</label>
                    <input
                        type="checkbox"
                        name="animal"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="arcana">Arcana</label>
                    <input
                        type="checkbox"
                        name="arcana"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="athletic">Athletics</label>
                    <input
                        type="checkbox"
                        name="athletic"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="decpt">Deception</label>
                    <input
                        type="checkbox"
                        name="decept"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="hist">History</label>
                    <input
                        type="checkbox"
                        name="hist"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="insight">Insight</label>
                    <input
                        type="checkbox"
                        name="instight"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="intimid">Intimidation</label>
                    <input
                        type="checkbox"
                        name="intimid"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="invest">Investigation</label>
                    <input
                        type="checkbox"
                        name="invest"
                        onChange={this.handleChange}
                    /> 
                    <label htmlFor="med">Medicine</label>
                    <input
                        type="checkbox"
                        name="med"
                        onChange={this.handleChange}
                    /> 
                    <label htmlFor="nature">Nature</label>
                    <input
                        type="checkbox"
                        name="nature"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="percept">Perception</label>
                    <input
                        type="checkbox"
                        name="percept"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="perform">performance</label>
                    <input
                        type="checkbox"
                        name="perform"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="persuade">Persuasion</label>
                    <input
                        type="checkbox"
                        name="persuade"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="religion">Religion</label>
                    <input
                        type="checkbox"
                        name="religion"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="sleight">Sleight of Hand</label>
                    <input
                        type="checkbox"
                        name="sleight"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="stealth">stealth</label>
                    <input
                        type="checkbox"
                        name="stealth"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="survive">Survival</label>
                    <input
                        type="checkbox"
                        name="survive"
                        onChange={this.handleChange}
                    />                                    
            </form>
            </div>
        )
    }
}
