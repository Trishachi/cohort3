d3.select(".remove").on("click", function() {
  d3.selectAll(".note").remove();
});

d3.select(".restyle").on("click", function() {
  d3.selectAll(".note").classed("restyled", true);
});

var input = d3.select("input");
var preview = d3.select(".preview");

d3.select("#new-note").on("submit", function() {
  d3.event.preventDefault();
  d3.select("#notes")
    .append("p")
    .classed("note", true)
    .text(input.property("value"));
  input.property("value", "");
  setPreview("");
});

input.on("input", function() {
  var note = d3.event.target.value;
  setPreview(note);
});

function setPreview(value) {
  preview.text(value).classed("hide", value === "");
}
