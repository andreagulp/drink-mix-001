import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from "react-router-dom";

import { fetchUser } from './actions/userAction'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
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
                    <Route path="/books_list" component={BookPage} />
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