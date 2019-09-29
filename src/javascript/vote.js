import Chart from 'chart.js';

var ctx = document.getElementById('graph').getContext('2d');
var chart = new Chart(ctx, {
  type: 'pie',

  data: {
    labels: votes.labels,
    datasets: [{
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: votes.votes,
    }]
  },

  options: {
    title: {
      display: true,
      text: votes.title,
    }
  }
});

// Fetch every 1000 milliseconds
setInterval(() => {
    fetch(`http://127.0.0.1:5000/votes`, { method: "GET" })
      .then(response => {
        return response.json();
      })
      .then(response => {
        let { data } = response;
        let votes = data
        chart.config.data = {
            labels: votes.labels,
            datasets: [{
              backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
              data: votes.votes,
            }]
          }
        chart.update();
        console.error(votes)
      })
      .catch(err => {
        console.error(err);
      })
}, 1000);

console.log(votes);
