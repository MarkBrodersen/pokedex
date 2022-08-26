/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import Types from "../components/Types";
import useFetch from "../hooks/useFetch";

export default function Pokemon() {
  const styles = {
    heading: css`
      text-transform: capitalize;
    `,
  };
  const { name } = useParams();
  const { data, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/" + name
  );
  console.log(data.results);
  return (
    <article>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img
            src={data.sprites.front_default}
            alt={"Image of a " + data.name}
          />
          <h1 css={styles.heading}>{data.name}</h1>
          <Types types={data.types} />
        </>
      )}
    </article>
  );
}
