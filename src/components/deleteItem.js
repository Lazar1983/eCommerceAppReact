import React from 'react';
import axios from 'axios';

export default class DeleteItem extends React.Component {
  state = {
    product: '',
  }

  handleChange = event => {
    this.setState({ product: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const item = {
      product: this.state.product
    };

    axios.post(`https://my-json-server.typicode.com/drakulovski/dbplaceholder/products/:id`, { item })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
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