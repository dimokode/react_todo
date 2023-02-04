import React, { Component } from "react";
import TodoList from '../todo-list'
import TodoSearch from '../todo-search'
import TodoItemAdd from "../todo-item-add";
import TodoListStatus from "../todo-list-status";


export default class App extends Component {

    maxId = 100;

    state = {
        searchText : '',
        filter : 'all',//all, active, done
        todoData : [
            this.createTodoItem('Drink Cofee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Watch TV'),
        ]
    }

    createTodoItem(label){
        return {
            label,
            important: false,
            done: false,
            important: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
       
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el)=> el.id===id);
            console.log(idx);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx+1)
            ];
            console.log(newArray);
            console.log('state', this.state);
            
            return {     
                todoData: newArray
            }
        });
        //console.log(this.state)   
    }

    addItem = (label) => {
        console.log('Add Item');
        this.setState(({ todoData }) => {
            const newItem = this.createTodoItem(label);

            //console.log(newItem);
            return {
                todoData : [...todoData, newItem]
            }
        })
    }
/*
    filterItems = (searchText) => {

        let newArray = [...this.state.todoData];
        if(searchText != ''){
            console.log('filter Items',searchText);
            newArray = newArray.filter(todoItem => {
                if(todoItem.label.toLowerCase().indexOf(searchText)>=0){
                    return true
                }
            })
        }

        this.setState({
            todoData : newArray
        })

        console.log('state', this.state.todoData);
        console.log('newArray', newArray);
    }
*/
    searchItems = (items, searchText) => {
        
        console.log('items', items);
        console.log('searchText', searchText);
        //return items
        
        if(searchText == ''){
            return items;
        }
        
        return items.filter((item) => {
            return  item.label.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
        })
    }

    onSearchChange = (searchText) => {
        this.setState({
            searchText
        })
    }

    showTodos = (type) => {
        //console.log('tofd');
        console.log('todoData', type, this.state.todoData);
    }

    /*
    toggleStateItem = (id, name) => {
        console.log(id, name);

        const arrItem = this.state.todoData.filter( item => {
            return item.id == id
        })
        console.log(arrItem)
        arrItem[0][name] = !arrItem[0][name]
        console.log(arrItem)
    }
    */

    toggleStateItem = (id, name) => {
        this.setState(({ todoData })=>{
            const idx = todoData.findIndex((el) => el.id === id);
            //console.log('idx', idx);
            const newArray = [...todoData];
            console.log('newArray', newArray);
            const item = newArray[idx];
            console.log('item', item)
            item[name] = !item[name]
            return {
                todoData : [...todoData.slice(0,idx), item, ...todoData.slice(idx+1)]
            }
        });
    }

    onLabelClick = (id) => {
        //console.log('onLabelClick App', id);
        this.toggleStateItem(id, 'done');
    }

    onMarkImportant = (id) => {
        this.toggleStateItem(id, 'important');
    }

    filterItems = (todoData, filter) => {
        switch (filter){
            case 'all':
                return todoData
            case 'active':
                return todoData.filter( item => !item.done)
            case 'done':
                return todoData.filter( item => item.done)
            default:
                return todoData
        }
    }

    onFilterChange = (name) => {
        console.log('filter name: ', name);
        this.setState({
            filter: name
        })
    }
//< TodoListStatus showTodos={ (type) => { this.showTodos(type) } }/>
    render(){
        const { todoData, searchText, filter } = this.state;
        const visibleItems = this.searchItems( this.filterItems(todoData, filter), searchText)
        const TotalTodosCount = todoData.length;
        const TodoTodosCount = todoData.filter( item => item.done == false ).length;
        const DoneTodosCount = TotalTodosCount-TodoTodosCount;
        return (
            <div>
                < TodoSearch onFilter={ this.onSearchChange } />
                
                < TodoListStatus    TotalTodosCount={TotalTodosCount}
                                    TodoTodosCount={TodoTodosCount}
                                    DoneTodosCount={DoneTodosCount}
                                    showTodos={ this.showTodos }
                                    filter={filter}
                                    onFilterChange={this.onFilterChange} />
                < TodoList todos={visibleItems} onDeleted={ this.deleteItem } onMarkImportant={this.onMarkImportant} onLabelClick={ this.onLabelClick } />
                < TodoItemAdd onAdded={ this.addItem } />
            </div>
        )
    }

}