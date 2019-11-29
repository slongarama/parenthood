import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
}));

export default function Hero(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    {props.content}
                </Typography>
            </Container>
        </React.Fragment>
    );
}