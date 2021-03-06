import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function ImgMediaCard() {
  return (
    <Container maxWidth="md">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="80"
        image="/images/dummy1.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Ep.4 - Novo formato da Champions
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <img alt="Home" src="/images/play.png" height={25} width={25}/>
        <img alt="Home" src="/images/share.png" height={25} width={25}/>
      </CardActions>
    </Card>
    </Container>
  );
}