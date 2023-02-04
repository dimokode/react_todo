import React, {Component} from "react";

export default class TodoListStatus extends Component{

    status = {
        type : 'all'
    }

    showTodos = () => {
        console.log('Show todos');
        //console.log(this.state);
        //this.props.showTodos(type);
    }

    buttons = [
        { name: 'all', label: 'All'},
        { name: 'active', label: 'Active'},
        { name: 'done', label: 'Done'}
    ];



    render(){
        const { TodoTodosCount, TotalTodosCount, DoneTodosCount, filter, onFilterChange } = this.props

        const buttons = this.buttons.map( ({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button className={`btn ${clazz}`}
                    key={name} 
                    onClick={ ()=>onFilterChange(name) }>{label}</button>
            );
        });


        return (
            <div>
                <div>
                    Total {TotalTodosCount}. To do {TodoTodosCount}. Done {DoneTodosCount}
                </div>
                
                {buttons}
            </div>
        )
    }
}