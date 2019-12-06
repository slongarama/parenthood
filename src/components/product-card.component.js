import React, { Component } from 'react';
import axios from 'axios';

export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = { product: [] };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const { id } = this.props.match.params;

        axios.get('http://localhost:5000/products/' + id)
            .then(response => {
                this.setState({ loading: false, 
                    product: response.data
                });
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
                            <img src={this.state.product.photo} vspace="70" alt="" className="img-fluid" />
                        </div>
                        <div class="col-lg-8">
                            <div className="box-29291">
                                <div className="product__information">
                                    <h2 className="Product-title">{this.state.product.name}</h2>
                                </div>
                                <div className="product__description">
                                    {this.state.product && this.state.product.pricing &&
                                        <h4>${this.state.product.pricing.likenew_price}/month</h4>
                                    }
                                    <p> {this.state.product.description} </p>  
                                </div>
                                <p className="mb-0 mt-4"><a href="#" className="btn btn-primary">Add to Cart</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

