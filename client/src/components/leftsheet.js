import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container"


class Leftsheet extends Component {
    constructor(props){
        super(props)
        this.state={
            strength:"",
            dex:"",
            const:"",
            int: "",
            char: ""
        }
    }
  
    handleChange(event){
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    handleBox(event){
        if(!event.target.name){
        this.setState({
            [event.target.name]: true
        })
        
    }
    else{
        this.setState({
            [event.target.name]: false
        })
    }
    }
  render() {
    return (
      <Container>
        <Row>
            <Col lg="1" md="1" >
                <form id="statsForm">
                    <label htmlFor="strength">STRENGTH</label>
                        <input
                            type="text"
                            name="strength"
                            value={this.state.strength}
                            size="2"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="dex">DEXTERITY</label>
                        <input
                            type="text"
                            name="dex"
                            value={this.state.dex}
                            size="2"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="const">CONSTITUTION</label>
                        <input
                            type="text"
                            name="const"
                            value={this.state.const}
                            size="2"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="int">INTELLIGENCE</label>
                        <input
                            type="text"
                            name="int"
                            value={this.state.int}
                            size="2"
                            onChange={this.handleChange}
                    />
                    <label htmlFor="wis">WISDOM</label>
                    <input
                        type="text"
                        name="wis"
                        value={this.state.wis}
                        size="2"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="char">CHARISMA</label>
                    <input
                        type="text"
                        name="char"
                        value={this.state.char}
                        size="2"
                        onChange={this.handleChange}
                    />
            </form>
              
           </Col>
           <Col lg={2} md={4}>
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
            </form>
           </Col>
           <Col md={4} lg={4}>
              <p>
                  
              </p>
           </Col>
           
        </Row>
        
      </Container>
    ) 
  }
}

export default Leftsheet;