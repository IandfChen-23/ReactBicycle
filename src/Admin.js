import React from 'react';
import {Row,Col} from 'antd'
import Header from './componensts/Header';
import Footer from './componensts/Footer';
import NavLeft from './componensts/NavLeft';
import Home from './pages/home'
import './style/common.less'
export default class Admin extends React.Component{
    render() {
        return (
            <Row className='container'>
              <Col span={3} >
                  <NavLeft className='nav-left'/>
              </Col>
              <Col span={21} className="main">
                  < Header/>
                  <Row className="content">
                     {this.props.children}
                  </Row>
                  <Footer/>
              </Col>
            </Row>
        )
    }
}