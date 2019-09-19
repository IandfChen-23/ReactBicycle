import React from 'react';
import {Row,Col} from 'antd'
import Header from './componensts/Header';
import Footer from './componensts/Footer';
import NavLeft from './componensts/NavLeft';
import './style/common.less'
export default class Admin extends React.Component{
    render() {
        return (
            <Row>
              <Col span={4} className='nav-left'>
                  <NavLeft/>
              </Col>
              <Col span={20} className="main">
                  < Header/>
                  <Row className="content">con</Row>
                  <Footer/>
              </Col>
            </Row>
        )
    }
}