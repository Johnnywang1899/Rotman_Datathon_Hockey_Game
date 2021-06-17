// Add console.log to check to see if our code is working.
console.log("working");

var player_info_1;
var player_info_2;
var player_info_3;

dropDownFill('#dropDownList_1');
dropDownFill('#dropDownList_2');
dropDownFill('#dropDownList_3');

initFunction('Jillian Dempsey', 'Tereza Vanisova');
d3.select('#dropDownList_1').property("value", 'Jillian Dempsey');
d3.select('#dropDownList_2').property("value", 'Tereza Vanisova');

function buttonClicked() {
    var trace = [];
    var barTrace = [];
    if (player_info_1) {
        const trace1 =
        {
            type: 'scatterpolar',
            r: [window.player_info_1.faceoff, window.player_info_1.control, window.player_info_1.takeaway, window.player_info_1.penalty],
            theta: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
            fill: 'toself',
            name: window.player_info_1.name
        };
        const barTrace1 = {
            x: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
            y: [window.player_info_1.faceoff, window.player_info_1.control, window.player_info_1.takeaway, window.player_info_1.penalty],
            name: window.player_info_1.name,
            type: 'bar'
        };
        trace.push(trace1);
        barTrace.push(barTrace1);

    }
    if (player_info_2) {
        const trace2 =
        {
            type: 'scatterpolar',
            r: [window.player_info_2.faceoff, window.player_info_2.control, window.player_info_2.takeaway, window.player_info_2.penalty],
            theta: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
            fill: 'toself',
            name: window.player_info_2.name
        };
        const barTrace2 = {
            x: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
            y: [window.player_info_2.faceoff, window.player_info_2.control, window.player_info_2.takeaway, window.player_info_2.penalty],
            name: window.player_info_2.name,
            type: 'bar'
        };
        trace.push(trace2);
        barTrace.push(barTrace2);

    }

    if (player_info_3) {
        const trace3 =
        {
            type: 'scatterpolar',
            r: [window.player_info_3.faceoff, window.player_info_3.control, window.player_info_3.takeaway, window.player_info_3.penalty],
            theta: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
            fill: 'toself',
            name: window.player_info_3.name
        };
        const barTrace3 = {
            x: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
            y: [window.player_info_3.faceoff, window.player_info_3.control, window.player_info_3.takeaway, window.player_info_3.penalty],
            name: window.player_info_3.name,
            type: 'bar'
        };
        trace.push(trace3);
        barTrace.push(barTrace3);
    }

    layout = {
        polar: {
          radialaxis: {
            visible: true,
            range: [0, 2]
          },
          angularaxis:{
              tickfont:{
                  size : 18
              }
          }
        },
        showlegend: true,
        legend: {"orientation": "h"},
        height: 550
    }
    layout_bar = {
        barmode: 'group',
        height: 550
    }

    Plotly.newPlot("Data_Plot", trace, layout)
    Plotly.newPlot("Bar_Plot", barTrace, layout_bar)
}


function dropDownFill(dropDown_id) {
    dropDownName = d3.select(dropDown_id);
    dropDownName.html("");

    players.forEach((player) => {
        dropDownName.append("option").text(player.name).property("value", player.name);
    })
    console.log("fill complete");
}

function searchInfo(searchName) {
    var info = secondary_metric.find(item => item.player === searchName);
    if (info) {
        var retval = {
            name: info.player,
            faceoff: info.score_faceoff,
            control: info.score_control,
            takeaway: info.score_takeaway,
            penalty: info.score_penalty
        };
        return retval;
    }
    else {
        return null;
    }
}

function typeOptionChange_1(playerName) {
    window.player_info_1 = searchInfo(playerName);
    buttonClicked()
}

function typeOptionChange_2(playerName) {
    window.player_info_2 = searchInfo(playerName);
    buttonClicked()
}

function typeOptionChange_3(playerName) {
    window.player_info_3 = searchInfo(playerName);
    buttonClicked()
}

function initFunction(player_1_name, player_2_name){
    window.player_info_1 = searchInfo(player_1_name);
    window.player_info_2 = searchInfo(player_2_name);
    buttonClicked()
}