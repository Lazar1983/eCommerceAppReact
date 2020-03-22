import React from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";

export default class CreateItem extends React.Component {

  constructor(props) {
      super(props);

    this.state = {
          title: '',
          price: '',
          stateId: '',
          categoryId: '',
          stock: '',
          picture: '',
          description: ''
    }
  }

  handleTitle = event => {this.setState({ title: event.target.value })}
  handlePrice = event => {this.setState({ price: event.target.value })}
  handleStateId = event => {this.setState({ stateId: event.target.value })}
  handlecategoryId = event => {this.setState({ categoryId: event.target.value })}
  handleStock = event => {this.setState({ stock: event.target.value })}
  handlePicture = event => {this.setState({ picture: event.target.value })}
  handleDescription = event => {this.setState({ description: event.target.value })}

  handleSubmit = event => {
    event.preventDefault();
    axios.post(`https://my-json-server.typicode.com/drakulovski/dbplaceholder/products`, 
      { title: this.state.title, 
      price: this.state.price, 
      stateId: this.state.stateId, 
      categoryId: this.state.categoryId, 
      stock: this.state.stock, 
      picture: this.state.picture,
      description: this.state.description,
      },)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title:<input type="text" name="this.state.title" value={this.state.title} onChange={this.handleTitle} /></label><br/>
          <label>Price:<input type="text" name="price" value={this.state.price} onChange={this.handlePrice} /></label><br/>
          <label>stateId:<input type="text" name="stateId" value={this.state.stateId} onChange={this.handleStateId} /></label><br/>
          <label>categoryId:<input type="text" name="categoryId" value={this.state.categoryId} onChange={this.handlecategoryId} /></label><br/>
          <label>Stock:<input type="text" name="stock" value={this.state.stock} onChange={this.handleStock} /></label><br/>
          <label>Picture:<input type="text" name="picture" value={this.state.picture} onChange={this.handlePicture} /></label><br/>
          <label>description:<input type="text" name="description" value={this.state.description} onChange={this.handleDescription} /></label><br/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

