import React from 'react';
import axios from 'axios';

export default class DeleteItem extends React.Component {
  state = {
    id: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

  axios.delete(`https://my-json-server.typicode.com/drakulovski/dbplaceholder/products/${this.state.id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Product Id:
            <input type="number" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}