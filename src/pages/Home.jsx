/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const styles = {
    list: css`
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
      li {
        text-transform: capitalize;
        a {
          color: black;
          text-decoration: none;
        }
      }
    `,
  };

  const { data, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=5000"
  );

  return (
    <ul css={styles.list}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.results?.map((item) => (
          <li key={item.name} className="list-item">
            <Link to={"/pokemon/" + item.name}>{item.name}</Link>
          </li>
        ))
      )}
    </ul>
  );
}
