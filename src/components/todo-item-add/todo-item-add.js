import React, { Component } from "react";


export default class TodoItemAdd extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        //console.log('.');
        
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState({
            label: ''
        })
    }

    render(){
        //const { onAdded } = this.props
        return (
            <form className="item-add-form d-flex" onSubmit={ this.onSubmit }>
                <input type="text" className="form-control" onChange={this.onLabelChange} placeholder="What needs to be done" value={this.state.label} />
                <button className="btn btn-outline-secondary">Add</button>
            </form>
        )
    }
}