import React, { useEffect, useState } from "react";
import { listMovies } from "../api/movies";
import { useTable } from "react-table";

const List = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const pagination = {
      page: 1,
      size: 10,
    };
    const filter = {};
    listMovies(pagination, filter)
      .then(({ data }) => {
        setData(data.content);
        console.log(data.content);
      })
      .catch((e) => console.log(e));
  }, []);

  const header = ["ranking", "title", "year", "revenue", ""];

  return (
    <table>
      <thead>
        <tr
          style={{
            borderBottom: "solid 3px red",
            background: "aliceblue",
            color: "black",
            fontWeight: "bold",
          }}
        >
          {header.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr
              style={{
                height: "2rem",
                borderBottom: "solid 5px black",
                color: "black",
              }}
            >
              <td>{row.rank}</td>
              <td>{row.title}</td>
              <td>{row.year}</td>
              <td>{row.revenue}</td>
              <td>
                <img src={"/view.svg"} className="Movie-details" alt="view" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
