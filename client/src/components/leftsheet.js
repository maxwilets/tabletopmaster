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