import Chart from 'chart.js';

var ctx = document.getElementById('graph').getContext('2d');
var chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue'],
    datasets: [{
      data: [10, 45],
    }]
  },
  options: {}
});
