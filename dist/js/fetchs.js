export async function fetchJSON(file) {
  let response = await fetch(`../json/${file}.json`)
    .then((res) => res.json())
    .then((res) => res);

  return response;
}
