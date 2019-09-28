import Chart from 'chart.js';

var ctx = document.getElementById('graph').getContext('2d');
var chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Yes", "No"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: [2478, 5267]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Should we go left or right?'
    }
  }
});
