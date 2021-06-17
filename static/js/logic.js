// Add console.log to check to see if our code is working.
console.log("working");

var player_info_1;
var player_info_2;
var player_info_3;

dropDownFill('#dropDownList_1');
dropDownFill('#dropDownList_2');
dropDownFill('#dropDownList_3');

function buttonClicked(){
    if (player_info_1 || player_info_2 || player_info_3){
        if (player_info_1){
            if (player_info_2){
                if (player_info_3){
                    trace = [
                        {
                            type: 'scatterpolar',
                            r: [window.player_info_1.faceoff, window.player_info_1.control, window.player_info_1.takeaway, window.player_info_1.penalty],
                            theta: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            fill: 'toself',
                            name: window.player_info_1.name
                        },
                        {
                            type: 'scatterpolar',
                            r: [window.player_info_2.faceoff, window.player_info_2.control, window.player_info_2.takeaway, window.player_info_2.penalty],
                            theta: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            fill: 'toself',
                            name: window.player_info_2.name
                        },
                        {
                            type: 'scatterpolar',
                            r: [window.player_info_3.faceoff, window.player_info_3.control, window.player_info_3.takeaway, window.player_info_3.penalty],
                            theta: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            fill: 'toself',
                            name: window.player_info_3.name
                        }
                    ];
                    trace_bar = [
                        {
                            x: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            y: [window.player_info_1.faceoff, window.player_info_1.control, window.player_info_1.takeaway, window.player_info_1.penalty],
                            name: window.player_info_1.name,
                            type: 'bar'
                        },
                        {
                            x: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            y: [window.player_info_2.faceoff, window.player_info_2.control, window.player_info_2.takeaway, window.player_info_2.penalty],
                            name: window.player_info_2.name,
                            type: 'bar'
                        },
                        {
                            x: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            y: [window.player_info_3.faceoff, window.player_info_3.control, window.player_info_3.takeaway, window.player_info_3.penalty],
                            name: window.player_info_3.name,
                            type: 'bar'
                        }
                    ]
                }
                else {
                    trace = [
                        {
                            type: 'scatterpolar',
                            r: [window.player_info_1.faceoff, window.player_info_1.control, window.player_info_1.takeaway, window.player_info_1.penalty],
                            theta: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            fill: 'toself',
                            name: window.player_info_1.name
                        },
                        {
                            type: 'scatterpolar',
                            r: [window.player_info_2.faceoff, window.player_info_2.control, window.player_info_2.takeaway, window.player_info_2.penalty],
                            theta: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            fill: 'toself',
                            name: window.player_info_2.name
                        }
                    ];
                    trace_bar = [
                        {
                            x: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            y: [window.player_info_1.faceoff, window.player_info_1.control, window.player_info_1.takeaway, window.player_info_1.penalty],
                            name: window.player_info_1.name,
                            type: 'bar'
                        },
                        {
                            x: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            y: [window.player_info_2.faceoff, window.player_info_2.control, window.player_info_2.takeaway, window.player_info_2.penalty],
                            name: window.player_info_2.name,
                            type: 'bar'
                        }
                    ]
                }
            }
            else if(player_info_3) {
                    trace = [
                        {
                            type: 'scatterpolar',
                            r: [window.player_info_1.faceoff, window.player_info_1.control, window.player_info_1.takeaway, window.player_info_1.penalty],
                            theta: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            fill: 'toself',
                            name: window.player_info_1.name
                        },
                        {
                            type: 'scatterpolar',
                            r: [window.player_info_3.faceoff, window.player_info_3.control, window.player_info_3.takeaway, window.player_info_3.penalty],
                            theta: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            fill: 'toself',
                            name: window.player_info_3.name
                        }
                    ];
                    trace_bar = [
                        {
                            x: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            y: [window.player_info_1.faceoff, window.player_info_1.control, window.player_info_1.takeaway, window.player_info_1.penalty],
                            name: window.player_info_1.name,
                            type: 'bar'
                        },
                        {
                            x: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                            y: [window.player_info_3.faceoff, window.player_info_3.control, window.player_info_3.takeaway, window.player_info_3.penalty],
                            name: window.player_info_3.name,
                            type: 'bar'
                        }
                    ]
                }
            else {
                trace = [
                    {
                        type: 'scatterpolar',
                        r: [window.player_info_1.faceoff, window.player_info_1.control, window.player_info_1.takeaway, window.player_info_1.penalty],
                        theta: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                        fill: 'toself',
                        name: window.player_info_1.name
                    }
                ];
                trace_bar = [
                    {
                        x: ['Face-off', 'Possession Control', 'Takeaway', 'Penalty Avoid'],
                        y: [window.player_info_1.faceoff, window.player_info_1.control, window.player_info_1.takeaway, window.player_info_1.penalty],
                        name: window.player_info_1.name,
                        type: 'bar'
                    }
                ];
            }
        }
        layout = {
            polar: {
              radialaxis: {
                visible: true,
                range: [0, 2]
              }
            },
            showlegend: true
        }
        layout_bar = {
            barmode: 'group'
        }
        Plotly.newPlot("Data_Plot", trace, layout)
        Plotly.newPlot("Bar_Plot", trace_bar, layout_bar)
    }
    else {
        alert("Please select players to generate diagram.");
    }
    
}

function dropDownFill(dropDown_id){
    dropDownName = d3.select(dropDown_id);
    dropDownName.html("");

    players.forEach((player) => {
        dropDownName.append("option").text(player.name).property("value", player.name);
    })
    console.log("fill complete");
}

function searchInfo(searchName){
    var info = secondary_metric.find(item => item.player === searchName);
    if(info) {
        var retval = {
            name: info.player,
            faceoff: info.score_faceoff,
            control: info.score_control,
            takeaway: info.score_takeaway,
            penalty: info.score_penalty
        };
        return retval;
    }
    else{
        return null;
    }
}

function typeOptionChange_1(playerName){
    window.player_info_1 = searchInfo(playerName);
    console.log(player_info_1.name);
}

function typeOptionChange_2(playerName){
    window.player_info_2 = searchInfo(playerName);
    console.log(player_info_2.name);
}

function typeOptionChange_3(playerName){
    window.player_info_3 = searchInfo(playerName);
    console.log(player_info_3.name);
}
