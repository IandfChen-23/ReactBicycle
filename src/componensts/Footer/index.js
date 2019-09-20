import React from 'react'
import { Row } from 'antd'
import './index.less'
export default class Footer extends React.Component{
    render(){
        return (
            <Row className='footer'>版权所有：上海香香享共享单车有限责任公司（推荐使用谷歌浏览器，可以获得更佳操作页面体验） 技术支持：陈磊</Row>
        )
    }
    
}