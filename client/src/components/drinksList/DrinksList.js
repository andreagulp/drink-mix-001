import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import List from 'material-ui/List';
import Grid from 'material-ui/Grid';

import { fetchDrinks } from '../../actions/drinkAction'
import DrinkItem from './DrinkItem';

class DrinksList extends Component {

    componentDidMount = () => {
        this.props.fetchDrinks()
    }

    render() {
        if (!this.props.drinks) {
            return <div>...loading</div>
        }
        const { drinks } = this.props
        return (
            <Grid container style={{ marginTop: '10px' }} >
                {drinks.map(drink => {
                    return <DrinkItem key={drink._id} drink={drink} />
                })}
            </Grid>
        )
    }
};

const mapStateToProps = (state) => { return { drinks: state.drinks } }
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchDrinks }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DrinksList);