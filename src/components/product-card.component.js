import React, { Component } from 'react';
import axios from 'axios';


// let { id } = useParams();

// return (
//     <div>
//         <h3>ID: {id}</h3>
//     </div>


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

        // let response = await fetch('http://localhost:5000/products/' + this.props.product._id)
        // let data = await response.json()
        // this.setState({
        //     loading: false,
        //     product: data
        // })
    }

    render() {
        return (
            <div className="product">
                <div className="product__information">
                    <h2 className="Product-title">{this.state.product.name}</h2>
                    {/* <BuyButton {...this.state} /> */}
                </div>
                <div className="product__description">
                    {this.state.product.description}
                </div>
            </div>
        )
    }
}

