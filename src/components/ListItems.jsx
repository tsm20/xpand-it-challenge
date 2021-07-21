import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import { listMovies } from "../api/movies";
import { makeStyles } from "@material-ui/core/styles";
import vars from "../styles/vars";
import MovieItem from "./MovieItem";
import InfiniteScroll from "react-infinite-scroll-component";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    textTransform: "uppercase",
    color: vars.mediumBlue,
    fontSize: "10px",
    fontWeight: "700",
    borderBottom: `2px solid ${vars.mediumBlue}`,
    height: "24px",
  },
}));

const ListItems = ({
  list,
  setList,
  pagination,
  setPagination,
  totalElements,
}) => {
  const classes = useStyles();
  const emptyFilter = {};

  const fetchMoreData = () => {
    const temp = { page: pagination.page + 1, size: pagination.size };
    listMovies(temp, emptyFilter)
      .then(({ data }) => {
        //add new results to dataList
        let newList = list;
        data.content.forEach((el) => {
          newList.push(el);
        });
        setList(newList);
        setPagination(temp);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Box mt={4}>
      <Grid container direction="row" className={classes.header}>
        <Grid item xs={1} container justifyContent="center">
          <Typography variant="caption">{"ranking"}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="caption">{"title"}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption">{"year"}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption">{"revenue"}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="caption">{""}</Typography>
        </Grid>
      </Grid>
      <Grid container direction="column">
        <InfiniteScroll
          dataLength={list.length}
          next={fetchMoreData}
          hasMore={totalElements > list.length}
          loader={list.length ? <h4>Loading...</h4> : <h4>No results.</h4>}
        >
          {list.map((row) => {
            return (
              <Grid item key={row.id}>
                <MovieItem data={row} />
              </Grid>
            );
          })}
        </InfiniteScroll>
      </Grid>
    </Box>
  );
};

export default ListItems;
