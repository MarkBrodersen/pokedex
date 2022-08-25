/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const styles = {
    list: css`
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      justify-content: center;
      align-items: center;

      row-gap: 5px;
      column-gap: 5px;

      li {
        text-transform: capitalize;
        background-color: gray;
        a {
          color: black;
          text-decoration: none;
        }
      }
    `,
  };

  const { data, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  console.log(data.results);
  return (
    <ul css={styles.list}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.results?.map((item) => (
          <li key={item.name}>
            <Link to={"/pokemon/" + item.name}>
              <div>{item.name}</div>
            </Link>
          </li>
        ))
      )}
    </ul>
  );
}
