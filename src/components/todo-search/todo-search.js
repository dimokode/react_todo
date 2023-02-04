import React, { Component } from "react";

export default class TodoSearch extends Component{
    
    state = {
        searchText : ''
    }

    onChangeFilter = (e) => {
        //console.log(e.target.value);
        const searchText = e.target.value;
        this.setState({
            searchText : searchText
        })
        //this.onFilter(e.target.value);
        this.props.onFilter(searchText)
    }

    render(){
        //console.log(this.props)
            return (
                <input type="text" placeholder="Type something to search" onChange={ this.onChangeFilter }
                value={this.state.searchText} />
            )

    }


}


