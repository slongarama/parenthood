import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateProduct extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangePhoto = this.onChangePhoto.bind(this);
        this.onChangeRetailPrice = this.onChangeRetailPrice.bind(this);
        this.onChangeCostPrice = this.onChangeCostPrice.bind(this);
        this.onChangeLikeNewPrice = this.onChangeLikeNewPrice.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDateAcquired = this.onChangeDateAcquired.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            brand: '',
            photo: '',
            retail_price: 0,
            cost_price: 0,
            likenew_price: 0,
            type: '',
            date_acquired: new Date(),
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        // users: response.data.map(user => user.username),
                        name: response.data[0].username
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeBrand(e) {
        this.setState({
            brand: e.target.value
        });
    }
    onChangePhoto(e) {
        this.setState({
            photo: e.target.value
        });
    }
    onChangeRetailPrice(e) {
        this.setState({
            retail_price: e.target.value
        });
    }
    onChangeCostPrice(e) {
        this.setState({
            cost_price: e.target.value
        });
    }
    onChangeLikeNewPrice(e) {
        this.setState({
            likenew_price: e.target.value
        });
    }
    onChangeType(e) {
        this.setState({
            type: e.target.value
        });
    }
    onChangeDateAcquired(date) {
        this.setState({
            date_acquired: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const product = {
            name: this.state.name,
            description: this.state.description,
            brand: this.state.brand,
            photo: this.state.photo,
            retail_price: this.state.retail_price,
            cost_price: this.state.cost_price,
            likenew_price: this.state.likenew_price,
            type: this.state.type,
            date_acquired: this.state.date_acquired,
        };
        console.log(product);

        axios.post('http://localhost:5000/products/add', product)
            .then(res => console.log(res.data));
        window.location = '/';
    }


    render() {
        return (
            <div>
                <h3>Add New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Brand</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.brand}
                            onChange={this.onChangeBrand}
                        />
                    </div>
                    <div className="form-group">
                        <label>Photo: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.photo}
                            onChange={this.onChangePhoto}
                        />
                    </div>
                    <div className="form-group">
                        <label>Retail Price</label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.retail_price}
                            onChange={this.onChangeRetailPrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cost Price</label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.cost_price}
                            onChange={this.onChangeCostPrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Type: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}
                        />
                    </div>
                    <div className="form-group">
                        <label>Like New Price</label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.likenew_price}
                            onChange={this.onChangeLikeNewPrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date Acquired: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date_acquired}
                                onChange={this.onChangeDateAcquired}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
