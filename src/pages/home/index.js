import React, { Component } from 'react';
import { Row, Col } from 'antd';
import echarts from "echarts"
import {EchartsContent} from "./styled"
export default class Home extends Component {
  render() {
    return (
      <EchartsContent>
      <Row>
        <Col xs={{ span: 7, offset: 1 }} lg={{ span: 7, offset: 1 }}
          style={{ background: '#1890ff', height: '100px' ,textAlign:'center',lineHeight:'100px',fontSize:'20px',color:'#FFF'}}
        >
          访问量:4988
      </Col>
        <Col xs={{ span: 7, offset: 1 }} lg={{ span: 7, offset: 1 }}
          style={{ background: '#1890ff', height: '100px' ,textAlign:'center',lineHeight:'100px' ,fontSize:'20px',color:'#FFF'}}
        >
          阅读量:1230
      </Col>
        <Col xs={{ span: 7, offset: 1 }} lg={{ span: 7, offset: 1 }}
          style={{ background: '#1890ff', height: '100px'  ,textAlign:'center',lineHeight:'100px',fontSize:'20px',color:'#FFF'}}
        >
          销售量:499
      </Col>
      </Row>
       <div ref="echarsContent" style={{"width":"900px","height":"400px"}}></div>
      </EchartsContent>
    )
   
  }
  componentDidMount(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.refs.echarsContent);
     // 指定图表的配置项和数据
  var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['访问量','阅读量','销售量']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '访问量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '阅读量',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {
            name:'访问量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'阅读量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'销售量',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

}


