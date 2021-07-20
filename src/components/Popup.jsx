import { Dialog, Typography, Grid, IconButton } from "@material-ui/core";
import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import vars from "../styles/vars";

const styles = makeStyles((theme) => ({
  dialogTitle: {
    padding: "2rem 2rem 0 3rem ",
  },
  dialogContainer: {
    padding: "2rem 3rem",
  },
}));

const Popup = ({ data, open, close }) => {
  const classes = styles();

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Grid container direction="column">
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h4" color="primary">
                {children}
              </Typography>
              {onClose ? (
                <IconButton
                  aria-label="close"
                  className={classes.closeButton}
                  onClick={onClose}
                >
                  <img
                    src="/close.svg"
                    alt="close"
                    width="24px"
                    height="24px"
                  />
                </IconButton>
              ) : null}
            </Grid>
            <Grid item>
              <div
                style={{
                  marginTop: "1rem",
                  width: "52px",
                  height: "3px",
                  borderBottom: `3px solid ${vars.lightBlue}`,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </MuiDialogTitle>
    );
  });
  return (
    <Dialog
      onClose={close}
      aria-labelledby="details-dialog"
      open={open}
      maxWidth="sm"
    >
      <DialogTitle
        id="movie-title"
        onClose={close}
        className={classes.dialogTitle}
      >
        {data.title}
      </DialogTitle>
      <MuiDialogContent className={classes.dialogContainer}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Year
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ marginBottom: "0.5rem" }}
            >
              {data.year}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Genre
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ marginBottom: "0.5rem" }}
            >
              {data.genre}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Description
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ marginBottom: "0.5rem" }}
            >
              {data.description}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Grid item xs={3}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                      Director
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      style={{ color: vars.lightBlue }}
                    >
                      {data.director}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={9} style={{ paddingLeft: "0.5rem" }}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="body2" color="textSecondary">
                      Actors
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      style={{ color: vars.lightBlue }}
                    >
                      {data.actors}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Runtime
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ marginBottom: "0.5rem" }}
            >
              {data.runtime}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Rating
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ marginBottom: "0.5rem" }}
            >
              {data.rating}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Votes
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ marginBottom: "0.5rem" }}
            >
              {data.votes}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              Revenue
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ marginBottom: "0.5rem" }}
            >
              {data.revenue}
            </Typography>
          </Grid>
        </Grid>
      </MuiDialogContent>
    </Dialog>
  );
};

export default Popup;
