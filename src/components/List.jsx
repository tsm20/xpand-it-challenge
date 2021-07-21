import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { listMovies } from "../api/movies";
import Filters from "./Filters";
import ListItems from "./ListItems";

const List = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [totalElements, setTotalElements] = useState(0);
  const [hasFilter, setHasFilter] = useState("");

  useEffect(() => {
    const emptyFilter = {};
    const initialPagination = {
      page: 0,
      size: 20,
    };
    listMovies(initialPagination, emptyFilter)
      .then(({ data }) => {
        setData(data.content);
        setTotalElements(data.totalElements);
        setPagination({
          page: 0,
          size: 20,
        });
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Box>
      <Filters
        setList={setData}
        hasFilter={hasFilter}
        setHasFilter={setHasFilter}
      />
      <ListItems
        list={data}
        setList={setData}
        pagination={pagination}
        setPagination={setPagination}
        totalElements={totalElements}
        setTotalElements={setTotalElements}
      />
    </Box>
  );
};

export default List;
