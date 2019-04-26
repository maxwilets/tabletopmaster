import React, { Component } from 'react';

class Leftsheet extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
  render() {
    return (
      <div>
        <div className="row">
            <form id="statsForm">
                <label htmlFor="strength">STRENGTH</label>
                    <input
                        type="text"
                        name="strength"
                        value={this.state.strength}
                        onChange={this.handleChange}
                        />
                    <label htmlFor="dex">DEXTERITY</label>
                    <input
                        type="text"
                        name="dex"
                        value={this.state.dex}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="const">CONSTITUTION</label>
                    <input
                        type="text"
                        name="const"
                        value={this.state.const}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="int">INTELLIGENCE</label>
                    <input
                        type="text"
                        name="int"
                        value={this.state.int}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="wis">WISDOM</label>
                    <input
                        type="text"
                        name="wis"
                        value={this.state.wis}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="char">CHARISMA</label>
                    <input
                        type="text"
                        name="char"
                        value={this.state.char}
                        onChange={this.handleChange}
                    />
            </form>
           <div className="col-3">
              <form>
                  
              </form>
           </div>
        </div>
      </div>
    )
  }
}

export default Leftsheet;