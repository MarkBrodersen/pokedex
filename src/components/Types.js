export default function Types({ types }) {
  return (
    <>
      <h1>Type(s)</h1>
      <ul>
        {types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </>
  );
}
