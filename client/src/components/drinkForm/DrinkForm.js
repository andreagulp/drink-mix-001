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
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux'

import { addDrink } from '../../actions/drinkAction'
import DrinkCard from './DrinkCard'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class DrinkForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            img: '',
            glass: '',
            visible: true,
            rating: 0
        }
    }

    handleFieldChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }
    handleSelectChange = (e) => { this.setState({ [e.target.name]: e.target.checked }) }
    handleRatingChange = (rating) => { this.setState({ rating: rating }) }

    addDrink = () => {
        this.props.addDrink({ ...this.state })
        this.props.handleDialogClose()
    }

    render() {

        const { drinks, user } = this.props
        const { name, img, rating } = this.state

        const { classes, handleDialogClose } = this.props;
        return (
            <div>
                <DialogContent style={{ margin: '10px' }} >
                    <form>
                        <Grid container>
                            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                                <DrinkCard
                                    user={user}
                                    name={name}
                                    img={img}
                                    rating={rating}
                                    handleFieldChange={this.handleFieldChange}
                                    handleRatingChange={this.handleRatingChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                                        <FormControl fullWidth className={classes.formControl}>
                                            <InputLabel htmlFor="name">Name</InputLabel>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={this.state.name}
                                                onChange={this.handleFieldChange}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                                        <FormControl fullWidth className={classes.formControl}>
                                            <InputLabel htmlFor="age-simple">Glass Type</InputLabel>
                                            <Select
                                                value={this.state.glass}
                                                onChange={this.handleFieldChange}
                                                input={<Input name="glass" id="glass-simple" />}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value="read" >Flute</MenuItem>
                                                <MenuItem value="reading">Highball</MenuItem>
                                                <MenuItem value="want to read">Irish Coffee</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                                        <FormControl fullWidth className={classes.formControl}>
                                            <InputLabel htmlFor="name-simple">Description</InputLabel>
                                            <Input
                                                multiline rows="2"
                                                rowsMax="4"
                                                id="description"
                                                name="description"
                                                value={this.state.description}
                                                onChange={this.handleFieldChange}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container>
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
                                    {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
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
                                    </Grid> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.addDrink} color="primary">
                        Add Drink
                    </Button>
                </DialogActions>
            </div>
        )
    }
};

const mapStateToProps = (state) => { return { user: state.user, drinks: state.drinks } }
const mapDispatchToProps = (dispatch) => bindActionCreators({ addDrink }, dispatch)

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(DrinkForm)