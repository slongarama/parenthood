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
                this.setState({ loading: false, product: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row align-items-stretch">
                        <div className="col-lg-4">
                            <img src={this.state.product.photo} vspace="20" alt="" className="img-fluid" />
                        </div>
                        <div class="col-lg-8">
                            <div className="h-100 bg-white box-29291">
                                <div className="product__information">
                                    <h2 className="Product-title">{this.state.product.name}</h2>
                                </div>
                                <div className="product__description">
                                    <p>{this.state.product.description} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}