import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = theme => ({
    '@global': {
        p: {
            // paddingBottom: 2,
        },
    },
    // container: {

    // },
    allText: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    media: {
        height: 140,
    },
    question: {
        paddingTop: 10,
        // paddingBottom: 10,
    },
    answer: {
        // How to add paragraph spacing?
    },
});

class AboutUs extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className='site-section'>
                <div className={'container ' + classes.allText}>
                    <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        Parenthood is the easiest and most sustainable way to give your baby the best.
                        {/* <br /><br /> */}
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer} component="p">
                        Our mission is to make the best quality baby gear accessible to all families while
                        creating a sustainable consumption cycle for the future of your little one. With
                        parenthood you can rent items for as long as you need, and send them back to us
                        when their time is up. This is parenthood made convenient, affordable, sustainable,
                        and personalized for your needs.
                     </Typography>

                    {/* --- QUESTION 1 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        Rent, enjoy, return. Repeat!
                        {/* Rent. Enjoy. Return. Repeat! */}
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer}>
                        <p>
                            We have curated the most innovative and high-quality gear from premium baby brands
                            that help in your baby’s healthy development. You choose the items you want and
                            you keep them for as long as you need.
                        </p>
                        <p>
                            Once your baby outgrows or doesn’t use the items anymore, you can send them back
                            to us and we will worry about shipping, storing and cleaning them for you. All of
                            our products go through a safe and rigorous deep-cleaning process to ensure the
                            highest quality standards to your baby.
                        </p>
                        <p>
                            Give your baby the best, while saving your wallet and our planet!
                        </p>
                    </Typography>

                    {/* --- QUESTION 2 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        Our Problem
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer} component="p">
                        <p>
                            We are currently living in an unsustainable consumption cycle. While babies
                            grow extraordinarily fast, products don’t grow with them. Parents spend an
                            average of $12,000 every year on baby products that kids outgrow within
                            weeks. This cycle leads to enormous amounts of waste for our planet.
                        </p>
                        <p>
                            But the problem is not just on the consumer side. Every time you buy a
                            product and you return it, companies have to get rid of those
                            returned items due to high inventory costs. Even if the item was never
                            used and the packaging is undamaged, the vast majority of returned products
                            become waste.
                        </p>
                    </Typography>

                    {/* --- QUESTION 3 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question} component="p">
                        Our Solution
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer}>
                        <p>
                            We get the extra-inventory items at perfect condition from premium brands and
                            reintroduce them to the consumption cycle. Our unique model promotes
                            sustainability and accessibility for you, businesses and our planet.
                        </p>
                        <p>
                            For you: We provide families an affordable and convenient way of enjoying
                            the best baby gear
                        </p>
                        <p>
                            For businesses: We help companies avoid the waste from inventory surplus.
                        </p>
                        <p>
                            For the planet: We introduce a sustainable consumption cycle by promoting
                            the reuse of resources.
                        </p>
                    </Typography>

                    {/* --- QUESTION 4 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question} component="p">
                        Our Quality Control
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer}>
                        We have a rigorous quality check to guarantee that all of our items are in
                        perfect condition. Our products go through a deep-cleaning process using
                        uniquely non-toxic, natural, biodegradable cleaning products that are safe
                        for your baby. If an item doesn’t pass our quality standards after our
                        cleaning process, we retire it from our catalog and donate it to charity.
                </Typography>
                </div>
            </div>
        )
    }
}

AboutUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUs);
