import React from 'react'
import { Row, Col } from 'antd'
import Util from '../../util/util'
import './index.less'
import axios from '../../axios/index'
export default class Header extends React.Component {
    componentWillMount() {
        this.setState({
            userName: 'Leo Chen'
        })
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000);
        this.getWeatherAPIData();
    }
    //JSONP 获取天气
    getWeatherAPIData() {
        let city = '上海';
        let url = 'http://wthrcdn.etouch.cn/weather_mini?city=' + encodeURIComponent(city)
        axios.jsonp(
            url
        ).then((res) => {
            let fengxiang = res.data.forecast[0].fengxiang
            let type = res.data.forecast[0].type
            this.setState({
                fengxiang,
                type
            })


        })
    }
    render() {
        return (
            <div>
                <Row className='header-top'>
                    <Col span='24'>
                        <span>欢迎，{this.state.userName} </span>
                        <a href=''>退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb' >
                    <Col span='4' className='breadcrumb-title'>首页</Col>
                    <Col span='20' className='breadcrumb-weather'>
                        <span className='date'>{this.state.sysTime}</span>
                        <span className='weather'>{this.state.fengxiang}  {this.state.type}</span>
                    </Col>
                </Row>
            </div>

        )
    }

}