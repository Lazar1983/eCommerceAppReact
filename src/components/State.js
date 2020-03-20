import React from 'react';
import axios from 'axios';

export default class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: []
    };
  }

  componentDidMount(){
    axios.get('https://my-json-server.typicode.com/drakulovski/dbplaceholder/states')
      .then((res) => {
        this.setState({ stateName: res.data })
      });
  }

  render() {
    const stateList = this.state.stateName.map((item) =>
      <div className="name" key={item.id}>
        <div className="itemName">
            <div className="item">
            </div>
            <div className="StateName">
              <span className="name"> State Name: {item.name}</span>
            </div>
            <div className="tax">
              <span className="tax"> Tax: {item.tax}</span>
            </div>
        
          </div>
      </div>
    );
    return (
      <div>
        <ul>{stateList}</ul>
      </div>
    );
  
  }
}