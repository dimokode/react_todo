import React, { Component } from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component{
    constructor(props){
        super(props);
    }
/*
    state = {
        done : this.props.done,
        important : this.props.important
    }
*/
    onLabelClick = () => {
        /*
        this.setState(( { done } ) => {
            return {
                done: !done
            }
        })
        */
       this.props.onLabelClick()
       //console.log(this.props);
    }

    onMarkImportant = () => {
        /*
        this.setState(({important})=>{
            return {
                important: !important
            }
        })
        */
       this.props.onMarkImportant()
    }

    
    render(){

        //console.log('listItemProps', this.props);
        //console.log('listItemState', this.state);
        const { label, onDeleted, done, important } = this.props
        //const { done, important } = this.state;

        let className = 'todo-list-item';
        if( done ){
            className += ' done';
        }

        if( important ){
            className += ' important';
        }

        const style = {
            color : important ? 'tomato' : 'black',
            fontWeight : important ? 'bold' : 'normal',
        }
    
    
        return (
            <span className={className} >
                <span className="todo-list-item-label" onClick={this.onLabelClick} style={style}>{ label }</span>
                
                <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={this.onMarkImportant}>
                    <i className="fa fa-exclamation"></i>
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={ onDeleted }>
                    <i className="fa fa-trash"></i>
                </button>

            </span>
        )
    }
}