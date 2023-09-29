import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@material-ui/core";
import "./Contato.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  userFeedback: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  feedbackText: {
    marginLeft: theme.spacing(2),
  },
}));

function Contato() {
  const classes = useStyles();

  const feedbacks = [
    { name: "Anupama Nadella", feedback: "Adorei o projeto!", avatar: '/Anupama.jpg' },
    { name: "Mario", feedback: "Iniciativa maravilhosa, vou contribuir!", avatar: '/mario.jpg' },
    { name: "Satya", feedback: "Achei interessante e bem feito.", avatar: '/Satya.jpg' },
    { name: "Miguel", feedback: "Perfeito, amei", avatar: '/Miguel.jpg' },
];


  return ( 
    <Container component="main" maxWidth="lg">
      <div className={classes.root}>
        <Typography component="h1" variant="h5">
          Feedback
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Password"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="feedback"
                label="Feedback"
                name="feedback"
                autoComplete="feedback"
                multiline
                rows={4}
                inputProps={{ maxLength: 255 }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enviar Feedback
          </Button>
        </form>
      </div>
      <Typography variant="h6">Feedback dos usuários:</Typography>
      <Grid container spacing={3}>
        {feedbacks.map((feedback, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card className={classes.card}>
              <div className={classes.userFeedback}>
                <Avatar className={classes.avatar} src={process.env.PUBLIC_URL + feedback.avatar} />
                <CardContent>
                  <Typography variant="h6">{feedback.name}</Typography>
                  <Typography className={classes.feedbackText} variant="body2" color="textSecondary" component="p">
                    {feedback.feedback}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Contato;
