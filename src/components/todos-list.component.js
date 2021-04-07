import { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo._id}</td>
        <td>{props.todo.todo_description}</td>
    </tr>
)

class TodosList extends Component {

    constructor(props) {
        super(props);

        this.state = { todos: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:56565/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    todoList() {
        return this.state.todos.map(function (currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3><center>Todos List</center></h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Todo ID</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodosList;