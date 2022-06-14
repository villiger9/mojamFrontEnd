const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://17dafddd-cd5e-4fd2-a56f-d271e22f333e.mock.pstmn.io/distribution', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  const tmplst = [];
  const tmplstnames = [];
  
  data.forEach(location => {
    tmplst.push(location.percentage);
    tmplstnames.push(location.name);
});

//checking, delete later
const logArrayElements = (element, index, tmplst) => {
  console.log('a[' + index + '] = ' + element);
};

  if (request.status >= 200 && request.status < 400) {
    var width = 250;
      height = 250;
      margin = 10;

      // The radius of the pieplot is half the width or half the height (smallest one).
      var radius = Math.min(width, height) / 2 - margin;

      // append the svg object to the div
      var svg = d3
        .select("#my_dataviz")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      // create the data
      var data = tmplst;
      var datanames = tmplstnames;

      // set the color
      var color = d3
        .scaleOrdinal()
        .domain(data.length)
        .range(d3.schemeDark2);

      // Compute the position of each group on the pie
      var pie = d3
        .pie()
        .sort(null) // Do not sort group by size
        .value(function (d) {
          return d.value;
        });
      var data_ready = pie(d3.entries(data));

      // The arc generator
      var arc = d3
        .arc()
        .innerRadius(radius * 0.4) // This is the size of the donut hole
        .outerRadius(radius * 0.8);

      // Another arc that won't be drawn. Just for labels positioning
      var outerArc = d3
        .arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9);

      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      svg
        .selectAll("allSlices")
        .data(data_ready)
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", function (d) {
          return color(d.data.key);
        })
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 0.7);

      // Add the polylines between chart and labels:
      svg
        .selectAll("allPolylines")
        .data(data_ready)
        .enter()
        .append("polyline")
        .attr("stroke", "black")
        .style("fill", "none")
        .attr("stroke-width", 1)
        .attr("points", function (d) {
          var posA = arc.centroid(d); // line insertion in the slice
          var posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
          var posC = outerArc.centroid(d); // Label position = almost the same as posB
          var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
          posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
          return [posA, posB, posC];
        });

      // Add the polylines between chart and labels:
      svg
        .selectAll("allLabels")
        .data(data_ready)
        .enter()
        .append("text")
        .text(function (d) {
          console.log(d.data.key);
          return d.data.key;
        })
        .attr("transform", function (d) {
          var pos = outerArc.centroid(d);
          var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
          return "translate(" + pos + ")";
        })
        .style("text-anchor", function (d) {
          var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          return midangle < Math.PI ? "start" : "end";
        });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Oops! Mojam hit a roadblock`;
    app.appendChild(errorMessage);
    const errorLogo = document.createElement('img');
    errorLogo.src = 'Error_Logo.png';
    app.appendChild(errorLogo);
    if (request.status == 401)
      window.alert('401 Unauthorized');
    else if (request.status == 408)
      window.alert('408 Request Timeout');
  }
}

request.send();