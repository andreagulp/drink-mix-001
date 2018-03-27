import React, { Component } from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class BookCard extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardMedia
                        style={{ height: 200 }}
                        title="Contemplative Reptile"
                        image="https://images.gr-assets.com/books/1385193032l/38154.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Lizard
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
};

export default BookCard