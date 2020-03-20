import React from 'react';
import axios from 'axios';

export default class createItem extends React.Component {
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

    axios.post(`https://my-json-server.typicode.com/drakulovski/dbplaceholder/products`, { item })
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
            Title:
            <input type="text" name="product" onChange={this.handleChange} />
          </label>
          <label>
            Price:
            <input type="number" onChange={this.handleChange} />
          </label>
          <label>
            STOCK
             
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}