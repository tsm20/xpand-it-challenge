import { Button, Grid, Box } from "@material-ui/core";
import React from "react";
import { listMovies } from "../api/movies";

const Filters = ({
  filter,
  setFilter,
  pagination,
  setList,
  totalElements,
  setTotalElements,
}) => {
  const handleFilterMoviesByYear = (year) => {};
  const handleFilterMoviesByRevenue = () => {
    listMovies(pagination, filter)
      .then(({ data }) => {
        setList(data.content);
        setTotalElements(data.totalElements);
        console.log(data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <Box mt={4}>
      <Grid container direction="row" spacing={3}>
        <Grid item>
          <Button variant="outlined" color="primary">
            Top 10 Revenue
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            Top 10 Revenue per Year
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filters;
