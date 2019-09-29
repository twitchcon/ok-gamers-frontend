import Chart from 'chart.js';
import voice from '../data/data.json';

var ctx = document.getElementById('graph').getContext('2d');
new Chart(ctx, {
  type: 'pie',

  data: {
    labels: voice.data.labels,
    datasets: [{
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: voice.data.votes,
    }]
  },

  options: {
    title: {
      display: true,
      text: voice.data.title,
    }
  }
});

// console.log(voice.data);
