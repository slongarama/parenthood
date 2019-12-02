import React, { Component } from 'react';
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
    // backgroundColor: '#bbcbef',
  },
  // card: {
  //   height: '100%',
  //   display: 'flex',
  //   flexDirection: 'column',
  // },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
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
    axios.get('http://localhost:5000/products/')
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
                <a href={"/view/" + product._id} className="img-link"><img src={product.photo} alt="" className="img-fluid" /></a>
                <h3><a href={"/view/" + product._id}>{product.name}</a></h3>
                <p>${product.pricing.likenew_price}/month</p>
                <span>{product.description}</span>
                <p className="mb-0 mt-4"><a href={"/view/" + product._id} className="btn btn-primary">View More</a></p>
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

