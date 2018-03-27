import React, { Component } from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';
import { DialogActions, DialogContent } from 'material-ui/Dialog';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';

import BookCard from './BookCard'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class BookForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            description: '',
            status: '',
            visible: true
        }
    }

    handleFieldChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }
    handleSelectChange = (e) => { this.setState({ [e.target.name]: e.target.checked }) }

    addBook = () => {
        console.log("add book function", { ...this.state })
    }

    render() {
        const { classes, handleDialogClose } = this.props;
        return (
            <div>
                <DialogContent style={{ margin: '10px' }} >
                    <form>
                        <Grid container>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <BookCard />
                            </Grid>
                            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                                        <FormControl fullWidth className={classes.formControl}>
                                            <InputLabel htmlFor="title">Title</InputLabel>
                                            <Input id="title" name="title" value={this.state.title} onChange={this.handleFieldChange} />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                                        <FormControl fullWidth className={classes.formControl}>
                                            <InputLabel htmlFor="author">Author</InputLabel>
                                            <Input id="author" name="author" value={this.state.author} onChange={this.handleFieldChange} />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                                        <FormControl fullWidth className={classes.formControl}>
                                            <InputLabel htmlFor="name-simple">Description</InputLabel>
                                            <Input multiline rows="2" rowsMax="4" id="description" name="description" value={this.state.description} onChange={this.handleFieldChange} />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                                        <FormControl fullWidth className={classes.formControl}>
                                            <InputLabel htmlFor="age-simple">Status</InputLabel>
                                            <Select
                                                value={this.state.status}
                                                onChange={this.handleFieldChange}
                                                input={<Input name="status" id="age-simple" />}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value="read" >Read</MenuItem>
                                                <MenuItem value="reading">Reading</MenuItem>
                                                <MenuItem value="want to read">Want to Read</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                                        <FormControl fullWidth className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        onChange={this.handleSelectChange}
                                                        name="visible"
                                                        checked={this.state.visible}
                                                        icon={<VisibilityOff />}
                                                        checkedIcon={<Visibility />}
                                                        color="primary"
                                                    />
                                                }
                                                label={this.state.visible ? `Public` : `Private`}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.addBook} color="primary">
                        Add Book
                    </Button>
                </DialogActions>
            </div>
        )
    }
};

export default withStyles(styles)(BookForm)