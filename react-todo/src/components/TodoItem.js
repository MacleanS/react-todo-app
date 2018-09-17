import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
        return (
        <li className="Todo">
            <strong>{this.props.todo.title}</strong>: {this.props.todo.category}
        </li>
        );
    }
}

export default TodoItem;
