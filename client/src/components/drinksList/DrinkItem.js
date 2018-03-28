import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';


class DrinkItem extends Component {

    render() {
        const { name, _user, img, dateAdded } = this.props.drink
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <Card>
                    <CardHeader
                        title={_user}
                        avatar={<Avatar> U </Avatar>}
                        subheader={dateAdded}
                    />
                    <CardMedia
                        style={{ height: 200 }}
                        title="Contemplative Reptile"
                        image={img}
                    />
                    <CardContent>
                        <Typography noWrap gutterBottom variant="headline" component="h2">
                            {name}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

        )
    }
};

export default DrinkItem