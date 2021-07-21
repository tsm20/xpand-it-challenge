import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import vars from "../styles/vars";
import { getMovie } from "../api/movies";
import Popup from "./DetailsPopup";
import { formatRevenue } from "./utils";

const useStyles = makeStyles((theme) => ({
  movies: {
    width: "100%",
    height: "50px",
    borderBottom: `1px solid ${vars.gray1}`,
  },
}));

const MovieItem = ({ data }) => {
  const classes = useStyles();
  const [details, setDetails] = useState({});

  const handleClickOpenDetails = (id) => {
    getMovie(id).then(({ data }) => {
      setDetails(data);
    });
    handleOpenDetailsPopup();
  };

  //Details Popup
  const [openDetailsPopup, setOpenDetailsPopup] = useState(false);

  const handleOpenDetailsPopup = () => {
    setOpenDetailsPopup(true);
  };
  const handleCloseDetailsPopup = () => {
    setOpenDetailsPopup(false);
  };

  return (
    <Grid container alignItems="center" className={classes.movies}>
      <Grid item xs={1} container justifyContent="center">
        <Typography variant="body1" color="secondary">
          {data.rank}
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Typography variant="body1" color="secondary">
          {data.title}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1" color="secondary">
          {data.year}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body1" color="secondary">
          {formatRevenue(data.revenue)}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <img
          src="/view.svg"
          alt="view-details"
          width="15px"
          height="12px"
          style={{ cursor: "pointer" }}
          onClick={() => handleClickOpenDetails(data.id)}
        />
      </Grid>
      <Popup
        data={details}
        open={openDetailsPopup}
        close={handleCloseDetailsPopup}
      />
    </Grid>
  );
};

export default MovieItem;
