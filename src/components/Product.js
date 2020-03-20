// import React from 'react';
// import axios from 'axios';

// export default class Product extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: []
//     };
//   }

//   componentDidMount(){
//     axios.get('https://my-json-server.typicode.com/drakulovski/dbplaceholder/products')
//       .then((res) => {
//         this.setState({ products: res.data })
//       });
//   }


//   render() {
//     const productList = this.state.products.map((item) =>
//       <div className="items" key={item.id}>
//         <div className="item">
//             <div className="picture">
//               <img alt={item.title} src={item.img}></img>
//             </div>
//             <div className="ItemPrice">
//               <span className="price"> Price: {item.price}</span>
//             </div>
//             <div className="stateId">
//               <span className="stateId"> stateId: {item.stateId}</span>
//             </div>
//             <div className="categoryId">
//               <span className="categoryId"> categoryId: {item.categoryId}</span>
//             </div>
//             <div className="stock">
//               <span className="stock"> Stock: {item.stock}</span>
//             </div>                        
//             <div className="description">
//               <p>{item.description}</p>
//             </div>
//           </div>
//       </div>
//     );
//     return (
//       <div>
//         <ul>{productList}</ul>
//       </div>
//     );
  
//   }
// }