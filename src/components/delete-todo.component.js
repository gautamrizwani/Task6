import { Component } from "react";
import axios from 'axios';

class DeleteTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChangeTodoDescription(e) {
        this.setState({
            _id: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const aaidee = this.state._id;

        axios.post("http://localhost:56565/todos/delete/" + aaidee)
            .then(res => console.log(res.data));

        this.setState({
            _id: ''
        })

    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h3>Delete todo with ID</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Todo ID: </label>
                        <input type="text"
                            className="form-control"

                            onChange={this.onChangeTodoDescription}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Delete Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default DeleteTodo;