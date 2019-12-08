import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    allText: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    header: {
        paddingTop: 30,
    },
    question: {
        paddingTop: 10,
    },
    sectionHeader: {
        paddingTop: 20,
        borderColor: '#3e64ff',
        borderTopStyle: 'solid',
        borderWidth: 2,
        borderRadius: 1,
        position: 'relative',
    },
    lastBlock: {
        paddingBottom: 30,
    }
});

class FAQ extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={'site-section ' + classes.header}>
                <div className={'container ' + classes.allText}>
                    <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
                        FAQ
                    </Typography>

                    <Typography component="h5" variant="h5" color="textPrimary" className={classes.sectionHeader} gutterBottom>
                        Our Service
                    </Typography>

                    {/* --- QUESTION 1 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        How does parenthood work?
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer} component="p">
                        You pick the items you want from our carefully curated list and choose
                        whether you want to rent it like new or pre-loved, or if you prefer
                        to buy it pre-loved. Then, it is all with us. We will deliver the order
                        right to your door, and you can enjoy the best quality products in the
                        world with your baby. When the items are outgrown, you just return them
                        to us. Shipping, cleaning and storing is all on us. You enjoy the
                        products, we do the worrying for you!
                    </Typography>

                    {/* --- QUESTION 2 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        Is there a minimum rental period?
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer} component="p">
                        The minimum rental period is one month. You can try as many items
                        as you want and swap them if they don’t really work for your baby.
                    </Typography>

                    {/* --- QUESTION 3 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        How do rental payments work?
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer} component="p">
                        Once you pick your items, you will pay for the first month’s rent. You
                        will be charged on a monthly basis from the day you receive your items
                        until they are returned. You can enjoy your items for as long as you need,
                        and you can return at any point. You pay as you go!
                    </Typography>

                    {/* --- QUESTION 4 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        Where do you deliver?
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer} component="p">
                        We currently only serve New York, but you can sign up to our mailing
                        list as we continuously expand our service!
                    </Typography>

                    {/* --- QUESTION 5 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        What brands do you work with?
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer} component="p">
                        All our gear is carefully chosen for its high standards of quality, innovation,
                        safety, and sustainability. We work with premium brands that are certified by
                        pediatricians and parents, including BabyBjörn, 4Moms, Bugaboo, Skip Hop,
                        DockATot, Lovevery, Peg Perego, and Tula.
                    </Typography>

                    {/* --- QUESTION 6 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        How do returns work?
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer} component="p">
                        Your item comes in a reusable shipping box that includes a pre-paid return
                        label. When ready, you just put your returning item in it and send it to us.
                    </Typography>

                    {/* --- QUESTION 7 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        What is the difference between rent like new and pre-loved?
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer + ' ' + classes.lastBlock} component="p">
                        Like new items are either brand new products or items that were loved for
                        less than 10 months. Pre-loved items were previously loved for longer
                        than 10 months. We have a rigorous cleaning process and quality control
                        to guarantee that all of our products are good-as-new.
                    </Typography>

                    {/****************************************************************************/}
                    {/****************************************************************************/}

                    <Typography component="h5" variant="h5" color="textPrimary" className={classes.sectionHeader} gutterBottom>
                        Our Service
                    </Typography>

                    {/* --- QUESTION 8 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        What is the cleaning process?
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer} component="p">
                        All our gear goes through a rigorous deep-cleaning process. We only use
                        non-toxic, natural, biodegradable cleaning products that are safe for your
                        baby. All our items are steam cleaned and sanitized. Machine washable
                        items and wearables are laudered with hypoallergenic detergent to
                        guarantee the safety of your little one.
                    </Typography>

                    {/* --- QUESTION 9 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        What condition will my baby gear come in?
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer} component="p">
                        Giving your baby the best products in the market is our mission. We
                        have rigorous inspection to guarantee that all of our products are
                        good-as-new. If an item doesn’t pass our quality standards after our
                        cleaning process, we retire it from our catalog and donate it to a charity.
                    </Typography>

                    {/* --- QUESTION 10 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        Where do you get the baby gear?
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer} component="p">
                        As a solution to avoid the waste from inventory surplus, we receive returned
                        items that are undamaged and pass quality control from premium baby gear
                        companies. This is a viable solution because the cost of restocking and
                        reselling returned items for companies often exceeds the value of those
                        items. Even if the product is in perfect condition and packaging is undamaged,
                        the vast majority of returned items  don’t end up back on the store shelves
                        and become waste for our planet.
                    </Typography>

                    {/* --- QUESTION 11 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        What if an item gets damaged while it’s in my care?
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer + ' ' + classes.lastBlock} component="p">
                        Don’t worry about your baby’s mess. We expect some wear and tear after
                        loving an item. If we can clean it or repair it, you won’t be charged extra.
                    </Typography>

                    {/****************************************************************************/}
                    {/****************************************************************************/}

                    <Typography component="h5" variant="h5" color="textPrimary" className={classes.sectionHeader} gutterBottom>
                        Our Purpose
                    </Typography>

                    {/* --- QUESTION 12 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        What is Parenthood's mission?
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer} component="p">
                        Our mission is to make the best quality baby gear accessible to all families,
                        while creating a sustainable consumption cycle for the future of your little
                        one. We want to make parenthood convenient, affordable, sustainable and
                        personalized for every family’s needs.
                    </Typography>

                    {/* --- QUESTION 13 --------------------------------------------------------- */}
                    <Typography variant="h6" color="textSecondary" className={classes.question}>
                        Why is it important?
                    </Typography>
                    <Typography variant="p" color='textPrimary' className={classes.answer + ' ' + classes.lastBlock} component="p">
                        We are currently part of an unsustainable consumption cycle. While babies grow
                        extraordinarily fast, products don’t grow with them. Parents spend an
                        average of US$12,000 every year with baby products, which become outgrown
                        within weeks. This leads to enormous amounts of clutter in our homes, and
                        waste for our planet. The future begins with our little ones, let’s create
                        a sustainable world with them!
                    </Typography>
                </div>
            </div >
        )
    }
}

FAQ.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQ);
