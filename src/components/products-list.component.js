import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/components/products-list.css'

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  LoadAllProducts() {
    return this.state.products.map((product) => {
      return (
        <div className="ProductList-product" key={product._id}>
          <Link to={"/view/" + product._id}>
            <h3>{product.name}</h3>
          </Link>
        </div >
      );
    })
  }

  render() {
    return (
      <div className="ProductList">
        <h2 className="ProductList-title">Available Products ({this.state.products.length})</h2>
        <div className="ProductList-container">
          {this.LoadAllProducts()}
        </div>
      </div>
    )
  }
}
