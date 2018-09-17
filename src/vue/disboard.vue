<template>
  <div id="page_disboard" class="page_con" style="background-color: #000; font-size: 14px;" >
    <div @click="getImg">click</div>
    <div id="charts_pie" class="charts_pie" style="width: 600px;height:400px; background-color: #000;" />
    <table border="1" style="border-color: #fff;">
      <tbody>
        <tr>
          <td>aaaaa</td>
          <td>aaaaa</td>
          <td>啊手动阀手动阀</td>
        </tr>
      </tbody>
    </table>
    <!-- <div id="charts_radar" class="charts_radar" style="width: 600px;height:400px;" />
    <div id="charts_line_bar" class="charts_line_bar" style="width: 600px;height:400px;" /> -->
    <vm-modal :show="modalVisibal" :handCancel="modalCancel" :render="modalDom" />
    <div @click="getImg"><i class="icon-camera"></i></div>
  </div>
</template>
<script>
  import echarts from 'echarts';
  import html2canvas from 'html2canvas';
  import { message } from '../plagin/global.js'
  import vmModal from '../components/modal.vue';
  import { mkCanvas } from '../plagin/utils.js';
  export default {
    data : function(){
      return {
        modalDom: '',
        modalVisibal: false,
        downLoadUrl: '',
      }
    },
    created: function () {
      global.vm = this;
      global.a = message;
      global.mkCanvas = mkCanvas;
    },
    mounted: function() {
      this.initCharts()
    },
    methods: {
      initCharts() {
        this.initPieChart();
        // this.initRadarChart();
        // this.initLineBarChart();
      },
      modalCancel() {
        this.$set(this, 'modalVisibal', false);
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
      // initRadarChart() {
      //   const myChart = echarts.init(document.getElementById('charts_radar'));
      //   const option = {
      //     title: {
      //       text: '浏览器占比变化',
      //       subtext: '纯属虚构',
      //       top: 10,
      //       left: 10
      //     },
      //     tooltip: {
      //       trigger: 'item',
      //       backgroundColor : 'rgba(0,0,250,0.2)'
      //     },
      //     legend: {
      //       type: 'scroll',
      //       bottom: 10,
      //       data: (function (){
      //         const list = [];
      //         for (let i = 1; i <=28; i++) {
      //           list.push(i + 2000 + '');
      //         }
      //         return list;
      //       })()
      //     },
      //     visualMap: {
      //       top: 'middle',
      //       right: 10,
      //       color: ['red', 'yellow'],
      //       calculable: true
      //     },
      //     radar: {
      //       indicator : [
      //         { text: 'IE8-', max: 400},
      //         { text: 'IE9+', max: 400},
      //         { text: 'Safari', max: 400},
      //         { text: 'Firefox', max: 400},
      //         { text: 'Chrome', max: 400}
      //       ]
      //     },
      //     series : (function (){
      //         var series = [];
      //         for (var i = 1; i <= 28; i++) {
      //             series.push({
      //                 name:'浏览器（数据纯属虚构）',
      //                 type: 'radar',
      //                 symbol: 'none',
      //                 lineStyle: {
      //                     width: 1
      //                 },
      //                 emphasis: {
      //                     areaStyle: {
      //                         color: 'rgba(0,250,0,0.3)'
      //                     }
      //                 },
      //                 data:[
      //                   {
      //                     value:[
      //                         (40 - i) * 10,
      //                         (38 - i) * 4 + 60,
      //                         i * 5 + 10,
      //                         i * 9,
      //                         i * i /2
      //                     ],
      //                     name: i + 2000 + ''
      //                   }
      //                 ]
      //             });
      //         }
      //         return series;
      //     })()
      //   };
      //   myChart.setOption(option);
      // },
      // initLineBarChart() {
      //   const myChart = echarts.init(document.getElementById('charts_line_bar'));
      //   const option = {
      //     tooltip: {
      //       trigger: 'axis',
      //       axisPointer: {
      //         type: 'cross',
      //         crossStyle: {
      //           color: '#999'
      //         },
      //       },
      //     },
      //     toolbox: {
      //       feature: {
      //         dataView: {show: true, readOnly: false},
      //         magicType: {show: true, type: ['line', 'bar']},
      //         restore: {show: true},
      //         saveAsImage: {show: true},
      //       },
      //     },
      //     legend: {
      //       data:['蒸发量','降水量','平均温度'],
      //     },
      //     xAxis: [
      //       {
      //         type: 'category',
      //         data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      //         axisPointer: {
      //           type: 'shadow',
      //         },
      //       },
      //     ],
      //     yAxis: [
      //       {
      //         type: 'value',
      //         name: '水量',
      //         min: 0,
      //         max: 250,
      //         interval: 50,
      //         axisLabel: {
      //           formatter: '{value} ml',
      //         },
      //       },
      //       {
      //         type: 'value',
      //         name: '温度',
      //         min: 0,
      //         max: 25,
      //         interval: 5,
      //         axisLabel: {
      //           formatter: '{value} °C',
      //         },
      //       },
      //     ],
      //     series: [
      //       {
      //         name:'蒸发量',
      //         type:'bar',
      //         data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      //       },
      //       {
      //         name:'降水量',
      //         type:'bar',
      //         data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
      //       },
      //       {
      //         name:'平均温度',
      //         type:'line',
      //         yAxisIndex: 1,
      //         data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
      //       },
      //     ],  
      //   };
      //   myChart.setOption(option);
      // },
      setModelDom: function(url) {
        const dom = '<div><img src='+url+' class="modal_img"><a class="load_img_btn" href='+this.downLoadUrl+' download="charts.png"><i class="icon-download3"></i>点击下载</a></div>';
        return dom;
      },
      getImg: function() {
        const that = this;
        const { modalDom } = this;
        const shareContent = document.getElementById('page_disboard');//需要截图的包裹的（原生的）DOM 对象
        const width = shareContent.offsetWidth; //获取dom 宽度
        const height = shareContent.offsetHeight; //获取dom 高度
        const canvas = document.createElement("canvas"); //创建一个canvas节点
        const scale = 2; //定义任意放大倍数 支持小数
        canvas.width = width * scale; //定义canvas 宽度 * 缩放
        canvas.height = height * scale; //定义canvas高度 *缩放
        canvas.getContext("2d").scale(scale, scale); //获取context,设置scale 
        const opts = {
            scale, // 添加的scale 参数
            canvas, //自定义 canvas
            // logging: true, //日志开关，便于查看html2canvas的内部执行流程
            width, //dom 原始宽度
            height,
            useCORS: true // 【重要】开启跨域配置
        };

        if(!modalDom) {
          html2canvas(shareContent, opts).then(function(canvas) {
            // document.body.appendChild(canvas);

            const context = canvas.getContext('2d');
            // 【重要】关闭抗锯齿
            context.mozImageSmoothingEnabled = false;
            context.webkitImageSmoothingEnabled = false;
            context.msImageSmoothingEnabled = false;
            context.imageSmoothingEnabled = false;

            canvas.id = "mycanvas";
            //生成base64图片数据    
            var dataUrl = canvas.toDataURL();    
            // var newImg = document.createElement("img");    
            // newImg.src =  dataUrl;    
            // document.body.appendChild(newImg);
            // console.log(newImg);
            that.$set(that, 'downLoadUrl', dataUrl);
            that.$set(that, 'modalDom', that.setModelDom(dataUrl));
            that.$set(that, 'modalVisibal', true);
          });
        } else {
          that.$set(that, 'modalVisibal', true);
        }
      },
    },
    computed: {
      userIcon: function() {
      },
    },
    components : {
      vmModal,
    }
  }
</script>
<style lang="sass">
  // @import '../css/default.scss';
  @import '../css/common.scss';
  // @import '../css/style.css';
  .load_img_btn {
    display: block;
    float: right;
    padding: 5px;
    color: $font-color;
    transition: all ease .3s;
    &:hover {
      color: $orange;
    }
    >.icon-download3 {
      display: inline-block;
      padding-right: 5px;
    }
  }
  .modal_img {
    width: 100%;
    box-shadow: 1px 1px 7px 1px #eee;
  }
</style>
