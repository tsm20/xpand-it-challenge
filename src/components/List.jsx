import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { listMovies } from "../api/movies";
import Filters from "./Filters";
import ListItems from "./ListItems";

const List = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0,
    size: null,
  });
  const [filter, setFilter] = useState({});
  const [totalElements, setTotalElements] = useState(0);
  useEffect(() => {
    listMovies(pagination, filter)
      .then(({ data }) => {
        let temp = data.content;
        temp.sort((a, b) => Number(b.revenue) - Number(a.revenue));
        console.log(temp.slice(0, 10));
        setData(temp.slice(0, 10));
        setTotalElements(data.totalElements);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Box>
      <Filters
        filter={filter}
        setFilter={setFilter}
        setPagination={setPagination}
        setList={setData}
      />
      <ListItems
        list={data}
        setList={setData}
        pagination={pagination}
        setPagination={setPagination}
        filter={filter}
        totalElements={totalElements}
        setTotalElements={setTotalElements}
      />
    </Box>
  );
};

export default List;
