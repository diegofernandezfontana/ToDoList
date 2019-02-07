import React, { Component } from 'react';

import { Switch, Route, Link } from 'react-router-dom'

import AddContainer from '../containers/AddContainer'
import RemoveContainer from '../containers/RemoveContainer'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            things: ['Manzana', 'Tomate'],
            thing: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    handleChange(evt){
        console.log(this.state.thing)
        this.setState({
            thing: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.setState({
            things: [...this.state.things, this.state.thing]
        })
    }

    handleDelete(evt){
        evt.preventDefault();
        let removeItem = evt.target.value;
        let idxRemove = this.state.things.indexOf(removeItem)
        var algo = this.state.things.splice(idxRemove, 1)
        this.setState({
            things: this.state.things
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        <input type="name" value={this.state.thing} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <button type='submit' > Submit </button>
                </form>
                <ul>
                    {
                        this.state.things.map(thing => {
                            return( 
                                <li key={thing}>{thing} <button onClick={this.handleDelete} value={thing}>ELiminar</button> </li>
                            )    
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Main;