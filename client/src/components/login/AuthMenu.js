import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import ExitToApp from 'material-ui-icons/ExitToApp';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';


class AuthMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
        }
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const { user } = this.props;
        const open = Boolean(anchorEl);

        return (
            <div>
                <IconButton
                    onClick={this.handleMenu}
                    color="inherit"
                >
                    <Avatar alt={user.name} src={user.photo} />

                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText inset primary="My Profile" />
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>
                        <ListItemIcon>
                            <ExitToApp />
                        </ListItemIcon>
                        <a href="/api/logout" style={{ textDecoration: 'none', color: 'inherit', textAlign: 'inherit' }}>
                            <ListItemText inset primary="Log Out" />
                        </a>
                    </MenuItem>

                    {/* <MenuItem onClick={this.handleClose}>
                        <a href="/api/logout" style={{ textDecoration: 'none', color: 'inherit' }}>Log Out</a>
                    </MenuItem> */}
                </Menu>
            </div>
        )
    }
};

export default AuthMenu