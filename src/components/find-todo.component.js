import { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Todo = props => (
    <tr>
        <td>{props.todo._id}</td>
        <td>{props.todo.todo_description}</td>
    </tr>
)

class FindTodo extends Component {

    constructor(props) {
        super(props);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { todos: [] };
    }

    onChangeTodoDescription(e) {
        this.setState({
            _id: e.target.value
        });
    }


    todoList() {
        return <Todo todo={this.state.todos} />;
    }

    onSubmit(e) {
        e.preventDefault();
        const aaidee = this.state._id;
        axios.get("http://localhost:56565/todos/" + aaidee)
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        return (
            <div>
                <div style={{ marginTop: 20 }}>
                    <h3>Find todo with ID</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Todo ID: </label>
                            <input type="text"
                                className="form-control"
                                onChange={this.onChangeTodoDescription}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Find Todo" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
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

export default FindTodo;