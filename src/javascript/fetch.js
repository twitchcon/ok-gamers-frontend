fetch(`127.0.0.1:5000/votes`, { method: "GET" })
  .then(response => {
    return response.json();
  })
  .then(response => {
    let { votes } = response;
  })
  .catch(err => {
    console.error(err);
  });
