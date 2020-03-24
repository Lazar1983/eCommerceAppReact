import React from 'react';
import axios from 'axios';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount(){
    axios.get('https://my-json-server.typicode.com/drakulovski/dbplaceholder/categories')
      .then((res) => {
        this.setState({ categories: res.data })
      });
  }

  render() {
    const categoryList = this.state.categories.map((item) =>
      <div className="name" key={item.id}>
        <div className="itemName">
            <div className="item">
            </div>
            <div className="CategoryName">
              <span className="name"> Category Name: {item.name}</span>
            </div>
       
          </div>
      </div>
    );
    return (
      <div>
        <ul>{categoryList}</ul>
      </div>
    );
  
  }
}