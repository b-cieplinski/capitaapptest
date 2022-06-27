import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({id ,title, completion}) {
  return (
    <Card sx={{width: '33%'}} m={4}>
      <CardContent m={4}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Task nr: {id}
        </Typography>
        <Typography variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" component="div" direction="row">
 {completion ? (
        <Typography color="secondary">Todo</Typography>
      ) : (

        <Typography color="success">Done</Typography>
      )}
        </Typography>
      </CardContent>
      <CardActions>
      {completion ? (
         <Button size="small">Done</Button>
      ) : (
        <Button size="small">Undo</Button>
       
      )}
      </CardActions>
    </Card>
  );
}
