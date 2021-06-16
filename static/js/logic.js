// Add console.log to check to see if our code is working.
console.log("working");

var name_1;
var name_2;
var name_3;

function buttonClicked(){

    dropDownName = d3.select("#dropDownList");
    dropDownName.html("");

    players.forEach((player) => {
        dropDownName.append("option").text(player.name).property("value", player.name);
    })
}

function typeOptionChange(playerName){
    var info = secondary_metric.find(item => item.player == playerName);
    if(info) {
        var retval = {
            name: info.player,
            faceoff: info.score_faceoff,
            control: info.score_control,
            takeaway: info.score_takeaway,
            penalty: info.score_penalty
        };
        trace_1 = [{
            type: 'scatterpolar',
            r: [retval.faceoff, retval.control, retval.takeaway, retval.penalty],
            theta: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
            fill: 'toself'
          }]
          
          layout = {
            polar: {
              radialaxis: {
                visible: true,
                range: [0, 2]
              }
            },
            showlegend: false
          }
          
          Plotly.newPlot("Data_Plot", trace_1, layout)
    }
    else{
        alert("No info available");
    }

}