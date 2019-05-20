Highcharts.chart('line', {

    title: {
        text: 'หนี้สาธารณะต่อ GDP, 2552-2560'
    },

    subtitle: {
        text: 'แหล่งข้อมูล: https://databank.worldbank.org'
    },

    yAxis: {
        title: {
            text: 'หนี้สาธารณะต่อ GDP (%)'
        }
    },
    legend: false,

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2552
        }
    },

    series: [{
    		name: 'หนี้สาธารณะต่อ GDP',
        data: [42.36, 39.83, 39.12, 41.93, 42.19, 43.34, 42.55, 41.79, 41.87],
    }],


    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('pie', {
    chart: {
        type: 'variablepie'
    },
    title: {
        text: 'หนี้สาธารณะ, เดือนมีนาคม 2562'
    },

    subtitle: {
        text: 'แหล่งข้อมูล: http://www.pdmo.go.th/th/public-debt/debt-outstanding'
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'หนี้สาธารณะคงค้าง (ล้านบาท): <b>{point.y} </b><br/>' + 'เปอร์เซ็นต์  <b>{point.percentage:.1f} %'
    },
    series: [{ 
        //dataLabels: {enabled: false},
        name: 'องค์ประกอบหนี้สาธารณะ',
        allowPointSelect: true,
        data: [{
            name: 'หนี้รัฐบาล',
            y: 5645640.19,
            selected: true,
            sliced: true,
            color: Highcharts.getOptions().colors[0]
        }, {
            name: 'หนี้รัฐวิสาหกิจ (รัฐบาลค้ำประกัน+รัฐบาลไม่ค้ำประกัน)',
            y: 925701.24,
            selected: false,
            color: Highcharts.getOptions().colors[6]
        }, {
            name: 'หนี้รัฐวิสาหกิจที่เป็นสถาบันการเงิน (รัฐบาลค้ำประกัน)',
            y: 329004.24,
            selected: false,
            color: Highcharts.getOptions().colors[5]
        }, {
            name: 'หนี้หน่วยงานของรัฐ (รัฐบาลค้ำประกัน+รัฐบาลไม่ค้ำประกัน)',
            y: 8397.96,
            selected: false,
            color: Highcharts.getOptions().colors[3]
        }],
        showInLegend: true
    }]
});


Highcharts.chart('stack', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'หนี้สาธารณะคงค้าง, 2552-2562'
    },
    subtitle: {
        text: 'แหล่งข้อมูล: http://www.pdmo.go.th/th'
    },
    xAxis: {
        categories: ['2552', '2553', '2554', '2555','2556','2557','2558','2559','2560','2561']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'หนี้สาธารณะคงค้าง (ล้านบาท)'
        },
    },
    legend: {
     align: 'right',
     verticalAlign: 'middle'
   },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>รวม: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
        }
    },
    series: [{
        name: 'รัฐบาลกู้เพื่อชดเชยความเสียหายของ FIDF',
        data: [1131803.42, 1126523.24, 1142100.87, 1133131.85, 1108070.25, 1073851.84, 998790.81, 949098.81, 891490.71, 845037.21]
    }, {
        name: 'รัฐวิสาหกิจ',
        data: [1108580.32, 1083982.57, 1079748.57, 1064287.82, 1112973.85, 1087393.88, 1065199.18, 994794.29, 970216.31, 945129.74]
    },{
        name: 'รัฐวิสาหกิจที่เป็นสถาบันการเงิน (รัฐบาลค้ำประกัน)',
        data: [208702.02, 177179.43, 156941.96, 352207.35, 541932.01, 626508.19, 542296.35, 500054.33, 426321.04, 367634.93]
    },
    {
        name: 'รัฐบาลกู้โดยตรง',
        data: [1449709.76, 1780951.07, 2039058.02, 2381879.1, 2666749.24, 2891603.18, 3134824.97, 3522121.28, 4037673.73, 4605182.8]
    }]
});

Highcharts.chart('scatter', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'ความสัมพันธ์ระหว่าง ค่าGDP กับ หนี้สาธารณะคงค้าง, 2552-2560'
    },
    subtitle: {
        text: 'แหล่งข้อมูล: https://databank.worldbank.org'
    },
    xAxis: [{
        categories: [2552, 2553, 2554, 2555, 2556, 2557,
            2558, 2559, 2560],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} ลบ',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'GDP',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'หนี้สาธารณะคงค้าง',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} ลบ',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.y} ล้านบาท'
            },
    legend: {
     layout: 'vertical',
     align: 'right',
     verticalAlign: 'middle',
     itemMarginTop: 5,
     itemMarginBottom: 5
   },
    series: [{
        name: 'หนี้สาธารณะคงค้าง',
        type: 'scatter',
        yAxis: 1,
        data: [4001942, 4230311.69, 4448294.6,4937238.33, 5430560.04,5690814.11,5783323.19,5988386.53,6369331.31],

    }, {
        name: 'GDP',
        type: 'scatter',
        data:  [9658656, 10808151, 11306894,12357338, 12915162,13230301,13747007,14533475,15452882],
    }]
});