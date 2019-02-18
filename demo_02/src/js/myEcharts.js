
/*************************** main02 ***************************/
function main02() {
    var myChart = echarts.init(document.getElementById('main02'), 'dark');

    var option = {
        // backgroundColor: '#aaaaaa',
        visualMap: {
            show: false,
            min: 90,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius: '75%',
                data:[
                    {value:535, name:'SNH48', itemStyle: {color: '#00b6de'}},
                    {value:474, name:'BEJ48', itemStyle: {color: '#f54ca7'}},
                    {value:410, name:'GNZ48', itemStyle: {color: '#9FBF40'}}
                ],
                roseType: 'angle',
                label: {
                    emphasis: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.9)'
                        }
                    }
                },
                labelLine: {
                    emphasis: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                },
                itemStyle: {
                    // emphasis:
                    emphasis: {
                        // color: Color displayed when mouse is hovering.
                        // color: '#c23531',
                        shadowBlur: 100,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}

$(main02());




/*************************** main01 ***************************/
function main01() {
    var myChart = echarts.init(document.getElementById('main01'));

    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    myChart.setOption(option);
}

$(main01());