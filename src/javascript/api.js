var votes = {}

// Fetch every 1000 milliseconds
setInterval(
    fetch(`http://127.0.0.1:5000/votes`, { method: "GET" })
  .then(response => {
    return response.json();
  })
  .then(response => {
    let { data } = response;
    votes = data
  })
  .catch(err => {
    console.error(err);
  })
, 1000);

exports.votes = votes
