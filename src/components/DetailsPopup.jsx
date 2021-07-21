import { Dialog, Typography, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import vars from "../styles/vars";
import { formatRevenue } from "./utils";

const styles = makeStyles((theme) => ({
  dialogTitle: {
    padding: "2rem 2rem 0 3rem ",
  },
  dialogContainer: {
    padding: "1rem 4rem 2rem 3rem",
  },
}));

const Popup = ({ data, open, close }) => {
  const classes = styles();
  const [show, setShow] = useState(false);

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={10}>
            <Typography variant="h4" color="primary">
              {children}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Grid
              container
              direction={show ? "row-reverse" : "column"}
              alignItems="center"
              justifyContent="center"
              onMouseMove={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              style={{ cursor: "pointer", height: "49px" }}
              onClick={onClose}
            >
              <Grid item>
                <img
                  src="/close.svg"
                  alt="close"
                  width="14px"
                  height="14px"
                  style={{ verticalAlign: "middle" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="caption"
                  style={{
                    color: vars.grayBlue1,
                    marginRight: show ? "0.5rem" : "0",
                    fontWeight: "500",
                  }}
                >
                  CLOSE
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div
          style={{
            marginTop: "1rem",
            width: "52px",
            height: "3px",
            borderBottom: `3px solid ${vars.lightBlue}`,
          }}
        />
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
              {formatRevenue(data.revenue)}
            </Typography>
          </Grid>
        </Grid>
      </MuiDialogContent>
    </Dialog>
  );
};

export default Popup;
