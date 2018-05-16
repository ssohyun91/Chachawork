var chart_created = false;
$(window).scroll(function() {
  var s3 = $('a[name="s3"]').offset().top;
  if(parseInt($(document).scrollTop(),10) >= parseInt(s3,10) && chart_created == false){

    startchart();
    chart_created = true;
  }
});

var startchart = function() {
  var myChart = new Chart('myChart', {
    type: 'pie',
    data: {

        datasets: [{
            data: [85, 15],
            backgroundColor: [
                'rgba(252, 219, 45, 1)',
                'rgba(255, 246, 198, 1)',
            ],
            borderColor: [
                'rgba(255,99,132,0)',
                'rgba(54, 162, 235, 0)',
            ],
            borderWidth: 1


        }]
    },
});
myChart.options.tooltips.enabled = false;


var myChart = new Chart('myChart2', {
  type: 'pie',
  data: {
      datasets: [{
          data: [90, 10],
          backgroundColor: [
              'rgba(105, 183, 186, 1)',
              'rgba(215, 251, 252, 1)',
          ],
          borderColor: [
              'rgba(255,99,132,0)',
              'rgba(54, 162, 235, 0)',
          ],
          borderWidth: 1
      }]
  }
});
myChart.options.tooltips.enabled = false;

var myChart = new Chart('myChart3', {
  type: 'pie',
  data: {
      datasets: [{
          label: '# of Votes',
          data: [85, 15],
          backgroundColor: [
              'rgba(248, 158, 169, 1)',
              'rgba(253, 230, 233, 1)',
          ],
          borderColor: [
              'rgba(255,99,132,0)',
              'rgba(54, 162, 235, 0)',
          ],
          borderWidth: 1
      }]
  }
});
myChart.options.tooltips.enabled = false;

var myChart = new Chart('myChart4', {
  type: 'pie',
  data: {
      datasets: [{
          label: '# of Votes',
          data: [80, 20],
          backgroundColor: [
              'rgba(120, 169, 110, 1)',
              'rgba(222, 241, 218, 1)',
          ],
          borderColor: [
              'rgba(255,99,132,0)',
              'rgba(54, 162, 235, 0)',
          ],
          borderWidth: 1
      }]
  }
});
myChart.options.tooltips.enabled = false;

var myChart = new Chart('myChart5', {
  type: 'pie',
  data: {
      datasets: [{
          label: '# of Votes',
          data: [75, 25],
          backgroundColor: [
              'rgba(214, 92, 86, 1)',
              'rgba(254, 232, 231, 1)',
          ],
          borderColor: [
              'rgba(255,99,132,0)',
              'rgba(54, 162, 235, 0)',
          ],
          borderWidth: 1
      }]
  }

});
myChart.options.tooltips.enabled = false;
}
