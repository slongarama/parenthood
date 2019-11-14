import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = props => (
  <tr>
    <td>{props.product.name}</td>
    <td>{props.product.description}</td>
    <td>{props.product.brand}</td>
    <td>{props.product.new_price}</td>
    <td>{props.product.used_price}</td>
    <td>{props.product.trial_price}</td>
    <td>{props.product.inventory}</td>
    <td>{props.product.date_added.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.product._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}>delete</a>
    </td>
  </tr>
)

export default class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.state = {products: []};
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

    deleteProduct(id) {
        axios.delete('http://localhost:5000/products/'+id)
        .then(res => console.log(res.data));
        this.setState({
            products: this.state.products.filter(el => el._id !== id)
        })
    }

    productList() {
        return this.state.products.map(currentproduct => {
            return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>;
        })
    }
  render() {
    return (
        <div>
            <h3>All Products</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Brand</th>
                      <th>New Price</th>
                      <th>Used Price</th>
                      <th>Trial Price</th>
                      <th>Inventory</th>
                      <th>Date Added</th>
                      <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  { this.productList() }
                </tbody>
            </table>
        </div>
    )
  }
}
