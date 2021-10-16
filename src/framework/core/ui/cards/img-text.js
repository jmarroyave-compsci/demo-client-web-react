import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';


class MediaCard extends React.Component {
  render() {
    var { title, subtitle, text, image, imageHeight, noImage, actions } = this.props;
    var key = 0;
    var subtitle = (subtitle) ? subtitle : "";
    noImage = (noImage) ? true : false;
    image = (image) ? image : 'https://dummyimage.com/${(imageHeight) ? imageHeight : 300}';

    return (
        <Card>
          <CardHeader 
            title={<Typography noWrap>{title}</Typography>}
            subheader={subtitle}
          />
          {!noImage && 
            <CardMedia 
              style={{ height: 0, paddingTop: "56.25%", backgroundColor: '#efefef',}}
              height={(imageHeight) ? imageHeight : null} 
              image={image} 
            />
          }
          {text  && 
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {text}
              </Typography>
            </CardContent>
          }
          <CardActions>
            {(actions) && actions.map(item => 
              <div key={key++}>{item}</div>
            )}
          </CardActions>
        </Card>
    );
  }

}

export default MediaCard


