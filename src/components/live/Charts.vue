<template>
	<div id="main"></div>
</template>

<script>
 import Vue from 'vue'
 import echarts from 'echarts'
 export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
        	title: {
		        text: '弹幕统计'
		    },
            xAxis: {
		        type: 'category',
		        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		        axisLabel: {
                    rotate:40
                },
                axisTick: {
                    //设置地名分割线颜色
                    lineStyle: {
                        color: '#A9A9A9'
                    }
                },
                axisLine: {
                    //设置地名及x轴线条颜色
                    show: true,
                    lineStyle: {
                        color: '#A9A9A9'
                    }
                },
		    },
		    yAxis: {
		        type: 'value',
		        splitLine :{    //网格线
			        lineStyle:{
			            type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
			        },
			        show:true//隐藏或显示
			        
			    }
		    },
		    visualMap: {
			    show: false,
			    dimension: 1,
			    pieces: [
			    	{gte: 700, lte: 1430, color: 'gold'}
			    ],  //pieces的值由动态数据决定
			    outOfRange: {
			         color: 'black'
			    }
			},
		    series: [{
		        data: [800, 902, 901, 934, 120, 1330, 1320],
		        type: 'line',
		        smooth: false,
		        symbol:'none',
		        itemStyle:{
	                normal:{
	                    lineStyle:{
	                        width:4,
	                        type:'dotted'  //'dotted'虚线 'solid'实线
	                    }
	                }
	            }
		    }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
  }
}
</script>


<style lang="less" scoped>
  #main{width:100%;height: 300px;background: #fff;padding: 15px 0;}
</style>
