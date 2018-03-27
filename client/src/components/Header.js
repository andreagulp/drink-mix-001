import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux'
import Drawer from 'material-ui/Drawer';

import { fetchUser } from '../actions/userAction'
import LogIn from './login/LogIn'
import Navigation from './Navigation'

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    componentDidMount = () => {
        this.props.fetchUser()
    }

    toggleDrawer = () => {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }))
    }



    render() {
        const { classes, user } = this.props;
        console.log(user)

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Book App
                        </Typography>
                        <LogIn user={user} />
                    </Toolbar>
                </AppBar>

                <Drawer open={this.state.menuOpen} onClose={this.toggleDrawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer}
                        onKeyDown={this.toggleDrawer}
                    >
                        <Navigation user={user} />
                    </div>
                </Drawer>

            </div>
        )
    }
};

const mapStateToProps = (state) => { return { user: state.user } }
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Header)

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(Header)