import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserPage extends Component {

    render() {
        if (!this.props.user) {
            return <div>...loading</div>
        }

        const { user } = this.props

        return (
            <div>
                <h4>UserPage Component Working</h4>
                {user.name}
            </div>
        )
    }
};

const mapStateToProps = (state) => { return { user: state.user } }

export default connect(mapStateToProps, null)(UserPage)