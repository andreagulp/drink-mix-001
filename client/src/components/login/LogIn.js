import React, { Component } from 'react';
import Button from 'material-ui/Button';

import AuthMenu from './AuthMenu'

class LogIn extends Component {

    renderContent = () => {
        const { user } = this.props

        switch (user) {
            case null:
                return
            case false:
                return (
                    <Button color="inherit" >
                        <a href="/auth/google" style={{ textDecoration: 'none', color: 'inherit' }} >login</a>
                    </Button>
                )
            default:
                return (
                    <div>
                        <AuthMenu user={user} />
                    </div>
                )
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
};

export default LogIn