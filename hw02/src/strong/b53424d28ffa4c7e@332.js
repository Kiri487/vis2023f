function _1(md){return(
md`# HW2 Strong baseline (2pt)`
)}

function _data(FileAttachment){return(
FileAttachment("data.json").json()
)}

function _3(md){return(
md`- Strong baseline -1 (1pt)`
)}

function _constellationsList(){return(
["牡羊座", "金牛座", "雙子座", "巨蟹座", "獅子座", "處女座", "天秤座", "天蠍座", "射手座", "魔羯座", "水瓶座", "雙魚座"]
)}

function _yCounts(){return(
[]
)}

function _6(yCounts,constellationsList,data)
{
  yCounts.length = 0; // 清空 yCounts
  for (var y = 0; y < 12; y++) { 
    // 所有年份建立兩個 Object，一個存放男性資料，一個存放女性資料
    yCounts.push({Constellation: constellationsList[y], Gender: "男", Count: 0}); 
    // Object 包含：1. 星座，2.男性，3.人數 (設為 0)
    yCounts.push({Constellation: constellationsList[y], Gender: "女", Count: 0}); 
    // Object 包含：1. 星座，2.女性，3.人數 (設為 0)
  }
  data.forEach (x => {
    var i = (x.Constellation) * 2 + (x.Gender== "男" ? 0 : 1); 
    yCounts[i].Count++;
    // 讀取 data array，加總星座的人
  })
  return yCounts
}


function _7(Plot,constellationsList,yCounts){return(
Plot.plot({
  grid: true,
  y: {label: "Count"},
  x: {label: "Constellation", domain: constellationsList},
  marks: [
    Plot.ruleY([0]),
    Plot.barY(yCounts, {x: "Constellation", y: "Count", fill: "Gender", tip: {format: {x: true}}}),
  ]
})
)}

function _8(md){return(
md`- Strong baseline -2 (1pt)`
)}

function _9(Plot,constellationsList,data){return(
Plot.plot({  
	y: {grid: true, label: "Count"}, 
  x: {label: "Constellation", ticks: 9, tickFormat: (d) => constellationsList[d]},
	marks: [    
		Plot.rectY(data, Plot.binX({y:"Count"}, 
                               {x: "Constellation",
                                interval: 1,
                                fill: "Gender",
                                title: (d) => ["Constellation: ", constellationsList[d.Constellation], "\nGender: ", d.Gender].join(""),
                                tip: true 
                               })),    
	 ]
})
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["data.json", {url: new URL("../data.json", import.meta.url), mimeType: "application/json", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("data")).define("data", ["FileAttachment"], _data);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer("constellationsList")).define("constellationsList", _constellationsList);
  main.variable(observer("yCounts")).define("yCounts", _yCounts);
  main.variable(observer()).define(["yCounts","constellationsList","data"], _6);
  main.variable(observer()).define(["Plot","constellationsList","yCounts"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["Plot","constellationsList","data"], _9);
  return main;
}
