import React, { Component } from 'react';
import axios from 'axios';

export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = { product: [] };
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get('http://localhost:5000/products/' + id)
            .then(response => {
                this.setState({ product: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="product">
                <div className="product__information">
                    <h2 className="Product-title">{this.state.product.name}</h2>
                </div>
                <div className="product__description">
                    ${this.state.product.description}/month
                </div>
            </div>
        )
    }
}

