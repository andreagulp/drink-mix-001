import React, { Component } from 'react';
import Card, { CardActions, CardContent, CardMedia, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import AddIcon from 'material-ui-icons/Add';
import Dialog, {
    DialogTitle,
    withMobileDialog,
    DialogActions
} from 'material-ui/Dialog';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class DrinkCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            addImgOpen: false
        }
    }

    openAddImageDialog = () => { this.setState({ addImgOpen: true }) }
    closeAddImageDialog = () => { this.setState({ addImgOpen: false }) }

    handleRate = ({ rating }) => { this.props.handleRatingChange(rating) }

    render() {
        const { user, name, img, rating, handleFieldChange } = this.props
        const addImg = 'https://extension.ucsd.edu/UCSDExtension/media/UCSDExtensionsMedia/placeholder.png'

        return (
            <div>
                <Card>
                    <CardHeader
                        title={user.name}
                        subheader={Date.now()}
                        avatar={<Avatar alt={user.name} src={user.photo} />}
                    />
                    <CardMedia
                        style={{ height: 200 }}
                        title="Contemplative Reptile"
                        image={img || addImg}
                    />
                    <Button
                        style={{ margin: "-25px 10px 0 0", float: "right" }}
                        variant="fab"
                        color="primary"
                        aria-label="add"
                        onClick={this.openAddImageDialog}
                    >
                        <AddIcon />
                    </Button>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {name}
                        </Typography>
                        <Rater total={5} rating={rating} onRate={this.handleRate} />
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
                <Dialog
                    onClose={this.closeAddImageDialog}
                    open={this.state.addImgOpen}
                    aria-labelledby="responsive-dialog-title"
                    fullWidth
                >
                    <DialogTitle id="simple-dialog-title">Add Cocktail Image</DialogTitle>
                    <div style={{ margin: '10px' }}>
                        <FormControl fullWidth >
                            <InputLabel htmlFor="name">Add Link</InputLabel>
                            <Input
                                id="Imgage Link"
                                name="img"
                                value={img}
                                onChange={handleFieldChange}
                            />
                        </FormControl>
                        <DialogActions>
                            <Button onClick={this.closeAddImageDialog} color="primary">
                                Add Image
                        </Button>
                        </DialogActions>
                    </div>
                </Dialog>
            </div>
        )
    }
};

export default withMobileDialog()(DrinkCard)


