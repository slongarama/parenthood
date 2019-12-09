import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import axios from 'axios';
import '../styles/components/products-list.css'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },

});

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    axios.get('https://protected-cove-03602.herokuapp.com/products')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  LoadAllCards() {
    const { classes } = this.props;

    return (
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={6}>
          {this.state.products.map(product => (
            <Grid item key={product._ID} xs={12} sm={6} md={4}>
              <div className="media-03819">
                <Link className="nav-link img-link" to={"/view/" + product._id}>
                  <img src={product.photo} alt="" className="img-fluid" />
                </Link>
                <h3>
                  <Link className="nav-link" color="textPrimary" to={"/view/" + product._id}>
                    {product.name}
                  </Link>
                </h3>
                <p>${product.pricing.likenew_price}/month</p>
                <span>{product.description}</span>
                <p className="mb-0 mt-4">
                  <Link className="nav-link btn btn-primary" color="textPrimary" to={"/view/" + product._id}>
                    View More
                  </Link>
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  render() {
    return (
      <div className="ProductList">
        <h3 className="ProductList-title">Our Shop ({this.state.products.length})</h3>
        <div className="ProductList-container">
          {this.LoadAllCards()}
        </div>
      </div>
    )
  }
}

ProductsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductsList);

