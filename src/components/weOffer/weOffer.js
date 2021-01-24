import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export function CenteredGrid() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                What we offer
          </Typography>
              <Typography variant="h5" component="h2">
                A desarrolladores:

          </Typography>
              <Typography className={classes.pos} color="textSecondary">

              </Typography>
              <Typography variant="body2" component="p">
                {bull}Cursos de formación específicos para desarrolladores.
          <br />
                {bull}Una plataforma para dar visibilidad a tu perfil.
          <br />
                {bull}Contacto directo con empresas que están buscando perfiles concretos.
          </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                What we offer
          </Typography>
              <Typography variant="h5" component="h2">
                A empresas:

          </Typography>
              <Typography className={classes.pos} color="textSecondary">

              </Typography>
              <Typography variant="body2" component="p">
                {bull}Información detallada y certera de los perfiles en nuestro portal.
          <br />
                {bull}Contacto directo y rápido con candidatos que cumplen el perfil buscado.
          <br />
                {bull}Conocimiento detallado de la ciudad y su entorno social tras 20 años de historia.
          </Typography>
            </Paper>
          </Grid>

        </Grid>
      </div>
    </>
  );
}

