//import { ReactDOM } from "react-dom";
import React, { Component } from "react";
import TodoListItem from "../todo-list-item";
//import "./todo-list.css";



export default class TodoList extends Component{
    constructor({ todos, onDeleted, onLabelClick, onMarkImportant }){
        console.log('Constructor TodoList');
        //console.log(todos)
        //super( { todos, onDeleted } );
        super();
        //const {todos} = todos
        this.todos = todos
        this.onDeleted = onDeleted
        this.onLabelClick = onLabelClick
        this.onMarkImportant = onMarkImportant
        //console.log(this.todos)
    }

    onLabelClick = (id) => {
        //console.log('on label click', id);
        //this.onLabelClick()
    }

    
    render(){
        console.log(this.props.todos)
        const elements = this.props.todos.map(({id, ...props}) => {
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem {...props} onLabelClick={ ()=> this.onLabelClick(id) } onMarkImportant={ ()=> this.onMarkImportant(id)} onDeleted={ () => this.onDeleted(id) } />
                </li>
            )
        });
        //console.log('elements', elements)
    
        return (
            <ul className="list-group">
                { elements }
            </ul>
        )
    }
}
