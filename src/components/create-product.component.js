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
        this.onChangeNewPrice = this.onChangeNewPrice.bind(this);
        this.onChangeUsedPrice = this.onChangeUsedPrice.bind(this);
        this.onChangeTrialPrice = this.onChangeTrialPrice.bind(this);
        this.onChangeInventory = this.onChangeInventory.bind(this);
        this.onChangeDate_Added = this.onChangeDate_Added.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            brand: '',
            new_price: 0,
            used_price: 0,
            trial_price: 0,
            inventory: 0,
            date_added: new Date(),
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
    onChangeNewPrice(e) {
        this.setState({
            new_price: e.target.value
        });
    }
    onChangeUsedPrice(e) {
        this.setState({
            used_price: e.target.value
        });
    }
    onChangeTrialPrice(e) {
        this.setState({
            trial_price: e.target.value
        });
    }
    onChangeInventory(e) {
        this.setState({
            inventory: e.target.value
        });
    }
    onChangeDate_Added(date) {
        this.setState({
            date_added: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const product = {
            name: this.state.name,
            description: this.state.description,
            brand: this.state.brand,
            new_price: this.state.new_price,
            used_price: this.state.used_price,
            trial_price: this.state.trial_price,
            inventory: this.state.inventory,
            date_added: this.state.date_added,
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
                        <label>New Price</label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.new_price}
                            onChange={this.onChangeNewPrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Used Price</label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.used_price}
                            onChange={this.onChangeUsedPrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trial Price</label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.trial_price}
                            onChange={this.onChangeTrialPrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Inventory</label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.inventory}
                            onChange={this.onChangeInventory}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date_added}
                                onChange={this.onChangeDate_Added}
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
