import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from "react-router-dom";

import { fetchUser } from './actions/userAction'
import HomePage from './pages/HomePage'
import DrinkPage from './pages/DrinkPage'
import UserPage from './pages/UserPage'
import Header from './components/Header'

class App extends Component {

    componentDidMount = () => {
        this.props.fetchUser()
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/drinks_list" component={DrinkPage} />
                    <Route path="/user" component={UserPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </div>
        )
    }
};

const mapStateToProps = (state) => { return { user: state.user } }
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))