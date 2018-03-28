import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Home from 'material-ui-icons/Home';
import Book from 'material-ui-icons/Book';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Divider from 'material-ui/Divider';

class Navigation extends Component {


    render() {
        const { user } = this.props

        const styles = {
            link: {
                textDecoration: 'none',
                color: 'inherit'
            }
        }
        return (
            <div>
                <Link to="/" style={styles.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link to="/drinks_list" style={styles.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <Book />
                        </ListItemIcon>
                        <ListItemText primary="Drinks" />
                    </ListItem>
                </Link>
                <Divider />
                <Link to="/user" style={styles.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="User" />
                    </ListItem>
                </Link>
                <a href={`${user ? '/api/logout' : '/auth/google'} `} style={styles.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary={`${user ? 'logout' : 'login'} `} />
                    </ListItem>
                </a>
            </div>
        )
    }
};

export default Navigation