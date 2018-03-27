import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Dialog, {
    DialogTitle,
    withMobileDialog
} from 'material-ui/Dialog';

import BookForm from '../components/bookForm/BookForm'


class BookPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dialogOpen: false
        }
    }


    handleDialogOpen = () => { this.setState({ dialogOpen: true }) };
    handleDialogClose = () => { this.setState({ dialogOpen: false }) };

    render() {
        const styles = {
            position: 'fixed',
            bottom: 20,
            right: 20
        }

        return (
            <div>
                <h4>BookPage Component Working</h4>
                <Button
                    variant="fab"
                    color="primary"
                    aria-label="add"
                    style={styles}
                    onClick={this.handleDialogOpen}
                >
                    <AddIcon />
                </Button>
                <Dialog
                    onClose={this.handleDialogClose}
                    open={this.state.dialogOpen}
                    aria-labelledby="responsive-dialog-title"
                    fullScreen
                >
                    <DialogTitle id="simple-dialog-title">Create New Book</DialogTitle>
                    <BookForm
                        handleDialogClose={this.handleDialogClose}
                    />
                </Dialog>
            </div>
        )
    }
};

export default withMobileDialog()(BookPage)