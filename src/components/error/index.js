export const Error = ({ type, url }) => (
  <div id="error" class="column col-12 p-2">
    <h1>Ups {type}</h1>
    {type === "404" ? <p>URL not found.</p> : ""}
    <pre>{url}</pre>
  </div>
);
