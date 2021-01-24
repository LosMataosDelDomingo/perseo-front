import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export function ImgMediaCard() {

  return (
    <Card style={{ marginBottom: "30px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2019/10/shutterstock_1135204490-1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent style={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="h2">
            PERSEO
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Llevamos dedicandonos a la búsqueda de talento desde hace 20 años.
          <br />
          Somos una empresa centrada en ofrecer servicios de manera cercana y una atención personalizada.
          <br />
          Queremos aportar nuestro conocimiento tradicional  del medio y aplicarlo al mundo del desarrollo de software
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}