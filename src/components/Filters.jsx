import { Button, Grid, Box, Popover, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { listMovies } from "../api/movies";
import { makeStyles } from "@material-ui/core/styles";
import vars from "../styles/vars";

const useStyles = makeStyles((theme) => ({
  popoverList: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
  popoverItem: {
    paddingBottom: "0.4rem",
    cursor: "pointer",
  },
}));

const Filters = ({ setList, hasFilter, setHasFilter }) => {
  const classes = useStyles();
  const emptyPagination = {};
  const [selected, setSelected] = useState("");

  //Year Popover
  const [anchorPopover, setAnchorPopover] = useState(null);
  const handleOpenPopover = (event) => {
    setAnchorPopover(event.currentTarget);
    if (!selected) setSelected("Year");
  };
  const handleClosePopover = () => {
    setAnchorPopover(null);
    setSelected("");
  };
  const anchorOpenPopover = Boolean(anchorPopover);
  const idPopover = anchorOpenPopover ? "simple-popover" : undefined;

  let yearsArray = [];
  for (let index = 2016; index >= 2000; index--) {
    yearsArray.push(index);
  }

  const handleFilterMovies = (year) => {
    let filter = {};
    if (year) {
      filter = {
        start: year,
        end: year,
      };
      handleClosePopover();
      setSelected(year);
    } else {
      setSelected("");
    }
    listMovies(emptyPagination, filter)
      .then(({ data }) => {
        let temp = data.content;
        //sort revenue
        temp.sort((a, b) => Number(b.revenue) - Number(a.revenue));

        //save top 10
        setList(temp.slice(0, 10));
        setHasFilter(year ? "year" : "top");
      })
      .catch((e) => console.log(e));
  };

  const handleResetFilters = () => {
    const emptyFilter = {};
    const pagination = {
      page: 0,
      size: 20,
    };
    listMovies(pagination, emptyFilter)
      .then(({ data }) => {
        setList(data.content);
        setSelected("");
        setHasFilter("");
      })
      .catch((e) => console.log(e));
  };

  return (
    <Box mt={4}>
      <Grid container direction="row" spacing={3} alignItems="center">
        <Grid item>
          <Button
            variant={hasFilter === "top" ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleFilterMovies()}
          >
            Top 10 Revenue
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={selected ? "contained" : "outlined"}
            color="primary"
            onClick={handleOpenPopover}
          >
            {`Top 10 Revenue per ${selected ? selected : "Year"}`}
          </Button>
          <Popover
            id={idPopover}
            open={anchorOpenPopover}
            anchorEl={anchorPopover}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Grid container direction="column" className={classes.popoverList}>
              <Grid item>
                <Box mt={2} mb={2}>
                  <Typography variant="body2" style={{ color: vars.gray1 }}>
                    Select a year
                  </Typography>
                </Box>
              </Grid>
              {yearsArray.map((year) => (
                <Grid
                  item
                  key={year}
                  className={classes.popoverItem}
                  onClick={() => handleFilterMovies(year)}
                >
                  <Typography variant="body1">{year}</Typography>
                </Grid>
              ))}
            </Grid>
          </Popover>
        </Grid>
        {hasFilter ? (
          <Grid item>
            <img
              src="/refresh.svg"
              alt="clear-filter"
              style={{ cursor: "pointer" }}
              onClick={handleResetFilters}
            />
          </Grid>
        ) : null}
      </Grid>
    </Box>
  );
};

export default Filters;
