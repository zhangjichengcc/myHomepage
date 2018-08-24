<template>
  <div class="page_con">
    <vm-message></vm-message>
    <div id="charts_pie" class="charts_pie" style="width: 600px;height:400px;" />
    <div id="charts_radar" class="charts_radar" style="width: 600px;height:400px;" />
    <div id="charts_line_bar" class="charts_line_bar" style="width: 600px;height:400px;" />
  </div>
</template>
<script>
  import echarts from 'echarts';
  import { message } from '../plagin/global.js'
  import vmMessage from '../components/message.vue';
  export default {
    data : function(){
      return {
        
      }
    },
    created: function () {
      global.vm = this;
      global.a = message;
    },
    mounted: function() {
      this.initCharts()
    },
    methods: {
      initCharts() {
        this.initPieChart();
        this.initRadarChart();
        this.initLineBarChart();
      },
      initPieChart() {
        const myChart = echarts.init(document.getElementById('charts_pie'));
        const option = {
          backgroundColor: '#2c343c',
          title: {
            text: 'Customized Pie',
            left: 'center',
            top: 20,
            textStyle: {
              color: '#ccc'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name:'访问来源',
              type:'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
              ].sort(function (a, b) { return a.value - b.value; }),
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: '#c23531',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      initRadarChart() {
        const myChart = echarts.init(document.getElementById('charts_radar'));
        const option = {
          title: {
            text: '浏览器占比变化',
            subtext: '纯属虚构',
            top: 10,
            left: 10
          },
          tooltip: {
            trigger: 'item',
            backgroundColor : 'rgba(0,0,250,0.2)'
          },
          legend: {
            type: 'scroll',
            bottom: 10,
            data: (function (){
              const list = [];
              for (let i = 1; i <=28; i++) {
                list.push(i + 2000 + '');
              }
              return list;
            })()
          },
          visualMap: {
            top: 'middle',
            right: 10,
            color: ['red', 'yellow'],
            calculable: true
          },
          radar: {
            indicator : [
              { text: 'IE8-', max: 400},
              { text: 'IE9+', max: 400},
              { text: 'Safari', max: 400},
              { text: 'Firefox', max: 400},
              { text: 'Chrome', max: 400}
            ]
          },
          series : (function (){
              var series = [];
              for (var i = 1; i <= 28; i++) {
                  series.push({
                      name:'浏览器（数据纯属虚构）',
                      type: 'radar',
                      symbol: 'none',
                      lineStyle: {
                          width: 1
                      },
                      emphasis: {
                          areaStyle: {
                              color: 'rgba(0,250,0,0.3)'
                          }
                      },
                      data:[
                        {
                          value:[
                              (40 - i) * 10,
                              (38 - i) * 4 + 60,
                              i * 5 + 10,
                              i * 9,
                              i * i /2
                          ],
                          name: i + 2000 + ''
                        }
                      ]
                  });
              }
              return series;
          })()
        };
        myChart.setOption(option);
      },
      initLineBarChart() {
        const myChart = echarts.init(document.getElementById('charts_line_bar'));
        const option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              },
            },
          },
          toolbox: {
            feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true},
            },
          },
          legend: {
            data:['蒸发量','降水量','平均温度'],
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              axisPointer: {
                type: 'shadow',
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: '水量',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} ml',
              },
            },
            {
              type: 'value',
              name: '温度',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} °C',
              },
            },
          ],
          series: [
            {
              name:'蒸发量',
              type:'bar',
              data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            },
            {
              name:'降水量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            },
            {
              name:'平均温度',
              type:'line',
              yAxisIndex: 1,
              data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
            },
          ],  
        };
        myChart.setOption(option);
      }
    },
    computed: {
      userIcon: function() {
      },
    },
    components : {
      vmMessage,
    }
  }
</script>
<style lang="sass">
  // @import '../css/default.scss';
  // @import '../css/common.scss';
  // @import '../css/style.css';
</style>
