/** @jsxImportSource @emotion/react */
import { css } from "@emtion/react";

export default function Types({ types }) {
  const typeColor = {
    fire: "background-color: rgb(255, 97, 68);",
    water: "background-color: rgb(82, 169, 255);",
    grass: "background-color: rgb(140, 212, 111);",
    electric: "background-color: rgb(255, 204, 51);",
    ice: "background-color: rgb(125, 212, 255);",
    ghost: "background-color: rgb(102, 102, 187);",
    fighting: "background-color: rgb(197, 111, 97);",
    ground: "background-color: rgb(226, 197, 111);",
    rock: "background-color: rgb(187, 170, 102);",
    flying: "background-color: rgb(154, 169, 255);",
    bug: "background-color: rgb(170, 187, 34);",
    poison: "background-color: rgb(183, 111, 169);",
    dark: "background-color: rgb(119, 85, 68);",
    steel: "background-color: rgb(183, 183, 197);",
    dragon: "background-color: rgb(125, 125, 197);",
    normal: "background-color: rgb(183, 183, 169);",
    psychic: "background-color: rgb(255, 111, 169);",
  };
  const styles = {
    typecolor: css`
      ${types.type.name === fire
        ? typeColor.fire &
          (types.type.name === typeColor.water) &
          (types.type.name === typeColor.grass) &
          (types.type.name === typeColor.electric) &
          (types.type.name === typeColor.ice) &
          (types.type.name === typeColor.ghost) &
          (types.type.name === typeColor.fighting) &
          (types.type.name === typeColor.water) &
          (types.type.name === typeColor.water) &
          (types.type.name === typeColor.water) &
          (types.type.name === typeColor.water) &
          (types.type.name === typeColor.water) &
          (types.type.name === typeColor.water) &
          (types.type.name === typeColor.water) &
          (types.type.name === typeColor.water) &
          (types.type.name === typeColor.water)
        : types.type.name === typeColor.water}
    `,
  };

  return (
    <>
      <h1>Type(s)</h1>
      <ul>
        {types.map((type) => (
          <li className={`type.type.name === fire ? ty`} key={type.type.name}>
            {type.type.name}
          </li>
        ))}
      </ul>
    </>
  );
}
