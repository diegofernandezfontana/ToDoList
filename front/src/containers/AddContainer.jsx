import React, { Component} from 'react';

class AddContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            thing: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt){
        this.setState({
            thing: evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
    }

    render(){
        console.log(this.props)
        return(
            <div> Add something Container
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        <input type="name" value={this.state.thing} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <button type='submit'> Submit </button>
                </form>
            </div>
        )

    }

}

export default AddContainer;