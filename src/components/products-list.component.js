import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../styles/components/products-list.css'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: '#bbcbef',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
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
        <Grid container spacing={4}>
          {this.state.products.map(product => (
            <Grid item key={product._ID} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>
                    {product.description}
                  </Typography>
                  <Typography>
                    {product.used_price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={"/view/" + product._id}>
                    View
                    </Button>
                  <Button size="small" color="primary">
                    Edit
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  render() {
    return (
      <div className="ProductList">
        <h2 className="ProductList-title">Our Shop ({this.state.products.length})</h2>
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

