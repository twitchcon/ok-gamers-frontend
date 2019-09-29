import Chart from 'chart.js';
import {votes} from './api.js';

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

setInterval(() => {
    chart.update();
}, 1000)

console.log(votes);
