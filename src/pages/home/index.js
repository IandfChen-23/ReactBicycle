import React from 'react'
import { Row } from 'antd'
import './index.less'
export default class Footer extends React.Component{
    render(){
        return (
            <div className='home-wrap'>
                 <img src={require('../../public/assets/logo192.png')}  alt=''></img>
                 <Row  style={{paddingLeft:20}}>欢迎使用香香享共享单车后台管理系统，祝您使用愉快</Row>
            </div>
        )
    }
    
}