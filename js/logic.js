//json
const jsonData = {
    "dataList": [{
        "label": "Data 1",
        "value": 5,
        "color": "rgba(255, 99, 132, 1)"
        //color here
    }, {
        "label": "Data 2",
        "value": 10,
        "color": "rgba(255, 206, 86, 1)"
        //color here
    }, {
        "label": "Data 3",
        "value": 15,
        "color": "rgba(46, 223, 64, 1)"
        //color here
    }, {
        "label": "Data 4",
        "value": 20,
        "color": "rgba(54, 162, 235, 1)"
        //color here
    }]
}

myData = {
    labels: [],
        datasets: [{
            label: '# of data',
            data: [],
            backgroundColor: [],
            borderWidth: 1
        }]
}

myOptions = {
            scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
}

// bar chart
var barChart = document.getElementById('bar');
barChart.height = 300
var barConfig = new Chart(barChart, {
    type: 'horizontalBar',
    data: myData,
    options: myOptions
})

// Function runs on chart type select update
function updateChartType() {
  // Since you can't update chart type directly in Charts JS you must destroy original chart and rebuild
   barConfig.destroy();
   barConfig = new Chart(barChart, {
     type: document.getElementById("chartType").value,
     data: myData,
     options: myOptions
   });
}

//set value
function distributeData() {
    //select id
    const dataOne = document.getElementById("data-one")
    const dataTwo = document.getElementById("data-two")
    const dataThree = document.getElementById("data-three")
    const dataFour = document.getElementById("data-four")
    const labelOne = jsonData.dataList.filter(function(data) {
        return data.label === 'Data 1'
    });
    const labelTwo = jsonData.dataList.filter(function(data) {
        return data.label === 'Data 2'
    });
    const labelThree = jsonData.dataList.filter(function(data) {
        return data.label === 'Data 3'
    });
    const labelFour = jsonData.dataList.filter(function(data) {
        return data.label === 'Data 4'
    });
    dataOne.value = labelOne[0].value
    dataTwo.value = labelTwo[0].value
    dataThree.value = labelThree[0].value
    dataFour.value = labelFour[0].value
}
distributeData()

function sortData() {
    //empty arrays
    const labelArray = []
    const valueArray = []
    const colorArray = []
    //sort in decending order
    const sorted = jsonData.dataList.sort(function(a, b) {
        return b.value - a.value
    });
    for (var i = 0; i < sorted.length; i++) {
        //add the sorted data in arrays
        labelArray.push(sorted[i].label)
        valueArray.push(sorted[i].value)
        colorArray.push(sorted[i].color)
    };
    //update data in bar chart
    barConfig.data.labels = labelArray
    barConfig.data.datasets[0].data = valueArray
    barConfig.data.datasets[0].backgroundColor = colorArray
    barConfig.update()
}
sortData()

function dataOneMinus() {
    //get the value of the id
    let currentValue = document.getElementById("data-one").value
    //select id
    const dataOne = document.getElementById("data-one")
    if (currentValue > 1) {
        //subtract 1 at the current value
        currentValue--
        //set new current value
        dataOne.value = currentValue;
        //find data one at json
        const labelOne = jsonData.dataList.filter(function(data) {
            return data.label === 'Data 1'
        });
        //set new data one value at json
        labelOne[0].value = currentValue
        //run sort function
        sortData()
    }
}

function dataOnePlus() {
    //get the value of the id
    let currentValue = document.getElementById("data-one").value
    //select id
    const dataOne = document.getElementById("data-one")
    //add 1 at the current value
    currentValue++
    //set new current value
    dataOne.value = currentValue
    //find data one at json
    const labelOne = jsonData.dataList.filter(function(data) {
        return data.label === 'Data 1'
    });
    //set new data one value at json
    labelOne[0].value = currentValue
    //run sort function
    sortData()
}

function dataTwoMinus() {
    let currentValue = document.getElementById("data-two").value
    const dataTwo = document.getElementById("data-two")
    if (currentValue > 1) {
        currentValue--
        dataTwo.value = currentValue;
        const labelTwo = jsonData.dataList.filter(function(data) {
            return data.label === 'Data 2'
        });
        labelTwo[0].value = currentValue
        sortData()
    }
}

function dataTwoPlus() {
    let currentValue = document.getElementById("data-two").value
    const dataTwo = document.getElementById("data-two")
    currentValue++
    dataTwo.value = currentValue
    const labelTwo = jsonData.dataList.filter(function(data) {
        return data.label === 'Data 2'
    });
    labelTwo[0].value = currentValue
    sortData()
}

function dataThreeMinus() {
    let currentValue = document.getElementById("data-three").value
    const dataThree = document.getElementById("data-three")
    if (currentValue > 1) {
        currentValue--
        dataThree.value = currentValue;
        const labelThree = jsonData.dataList.filter(function(data) {
            return data.label === 'Data 3'
        });
        labelThree[0].value = currentValue
        sortData()
    }
}

function dataThreePlus() {
    let currentValue = document.getElementById("data-three").value
    const dataThree = document.getElementById("data-three")
    currentValue++
    dataThree.value = currentValue
    const labelThree = jsonData.dataList.filter(function(data) {
        return data.label === 'Data 3'
    });
    labelThree[0].value = currentValue
    sortData()
}

function dataFourMinus() {
    let currentValue = document.getElementById("data-four").value
    const dataFour = document.getElementById("data-four")
    if (currentValue > 1) {
        currentValue--
        dataFour.value = currentValue;
        const labelFour = jsonData.dataList.filter(function(data) {
            return data.label === 'Data 4'
        });
        labelFour[0].value = currentValue
        sortData()
    }
}

function dataFourPlus() {
    let currentValue = document.getElementById("data-four").value
    const dataFour = document.getElementById("data-four")
    currentValue++
    dataFour.value = currentValue
    const labelFour = jsonData.dataList.filter(function(data) {
        return data.label === 'Data 4'
    });
    labelFour[0].value = currentValue
    sortData()
}