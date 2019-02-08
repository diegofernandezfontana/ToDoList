import React, { Component } from 'react';

import { Switch, Route, Link } from 'react-router-dom'

import s from '../styles.css'

//I Did not add styles cause i need to install loaders and stuff. Just practicing React

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            things: [],
            thing: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCross = this.handleCross.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    handleChange(evt){
        this.setState({
            thing: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        if(this.state.things.indexOf(this.state.thing.toLocaleLowerCase()) >= 0){
            alert("Este Item ya se encuentra en la lista")
        }else{
            this.setState({
                things: [...this.state.things, this.state.thing.toLocaleLowerCase()],
                thing: ''
            })
        }
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

    handleCross(e){
        console.log(e.target);
        
    }

    render() {
        return (
            <div className={s.container}>
                <div className={s.todo}>
                    <h1>To do list</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="">
                        </label>
                            <input type="name" value={this.state.thing} onChange={this.handleChange} />
                        <br/>
                        <button type='submit' > Submit </button>
                    </form>
                    <ul>
                        {
                            this.state.things.map(thing => {
                                return( 
                                    <li key={thing}>
                                        <p onClick={this.handleCross} name={thing}>{thing}</p>
                                        <button onClick={this.handleDelete} value={thing}>
                                            Delete
                                        </button> 
                                    </li>
                                )                                                                
                            })
                        }
                    </ul>
                    <p className={s.tachar}>
                        Diego Fernandez Fontana
                    </p>
                </div>
            </div>
        );
    }
}

export default Main;