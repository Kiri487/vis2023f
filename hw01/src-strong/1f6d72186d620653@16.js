function _1(md){return(
md`# HW1 Strong baseline (2pt)
Reference: https://observablehq.com/@d3/ridgeline-plot?intent=fork`
)}

function _data(FileAttachment){return(
FileAttachment("studentTable.csv").csv()
)}

function _homeworks(){return(
["作業一", "作業二", "作業三", "作業四", "作業五", "作業六", "作業七", "作業八", "作業九", "作業十"]
)}

function _studentArray(){return(
[]
)}

function _5(studentArray,data,homeworks)
{
  studentArray.length = 0;
  data.forEach(row => {
    let Class = row["班級"];
    let Id = row["學號"];
    let Name = row["姓名"];
    for (let i = 0; i < 10; i++) {
      studentArray.push({
        Class: Class,
        ID: Id,
        Name: Name,
        HW: i + 1,
        value: row[homeworks[i]]
      });
    }
  });
return studentArray
}


function _6(Plot,d3){return(
Plot.plot({
  x: {domain: [0, 100], label: "Total Score"},
  color: {scheme: "BuGn"},
  marks: [
    Plot.barX(d3.range(101).map(i => ({TotalScore: i})), {
      x: "TotalScore",
      fill: "TotalScore",
      interval: 1,
      inset: 0
    })
  ]
})
)}

function _7(d3,studentArray,homeworks)
{
  const HWs = Array.from(d3.group(studentArray, d => + d.HW).keys()).sort(d3.ascending);
  const series = d3.groups(studentArray, d => d.Name).map(([Name, values]) => {
    const value = new Map(values.map(d => [+d.HW, d.value]));
    return {name: `${values[0].Class} ${values[0].ID} ${Name}`, values: HWs.map(d => value.get(d))};
  });
  const totalScores = series.map(d => d3.sum(d.values));

  const overlap = 5;
  const width = 1200;
  const height = 3000;
  const marginTop = 100;
  const marginBottom = 30;
  const marginRight = 30;
  const marginLeft = 120;

  const x = d3.scaleLinear()
      .domain([1, 10])
      .range([marginLeft, width - marginRight]);

  const y = d3.scalePoint()
    .domain(series.map(d => d.name))
    .range([marginTop, height - marginBottom]);

  const z = d3.scaleLinear()
    .domain([0, d3.max(series, d => d3.max(d.values))]).nice()
    .range([0, -overlap * y.step() * 0.5])

  const area = d3.area()
      .curve(d3.curveBasis)
      .defined(d => !isNaN(d))
      .x((d, i) => x(HWs[i]))
      .y0(0)
      .y1(d => z(d));

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

  svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x)
        .ticks(10)
        .tickFormat(d => homeworks[d - 1])
        .tickSizeOuter(0));

  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickSize(0).tickPadding(4))
      .call(g => g.select(".domain").remove());

  const group = svg.append("g")
    .selectAll("g")
    .data(series)
    .join("g")
      .attr("transform", d => `translate(0,${y(d.name) + 1})`);
  
  group.append("path")
  .attr("fill", (d, i) => d3.interpolateBuGn(totalScores[i] / 100))
  .attr("d", d => area(d.values))

  return svg.node();
}


export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["studentTable.csv", {url: new URL("../studentTable.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("data")).define("data", ["FileAttachment"], _data);
  main.variable(observer("homeworks")).define("homeworks", _homeworks);
  main.variable(observer("studentArray")).define("studentArray", _studentArray);
  main.variable(observer()).define(["studentArray","data","homeworks"], _5);
  main.variable(observer()).define(["Plot","d3"], _6);
  main.variable(observer()).define(["d3","studentArray","homeworks"], _7);
  return main;
}
