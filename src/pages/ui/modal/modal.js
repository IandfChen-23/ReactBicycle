import React from 'react'
import { Modal, Button,Card } from 'antd';
import './modal.less'
export default class IButton extends React.Component{
    state = { visible: false };
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
      render() {
        return (
            <Card title="基本弹框" className='card-button' >
            <Button type="primary" onClick={this.showModal}>
              Open Modal
            </Button>
            <Modal
              title="基本弹框"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
        </Card>
            
        );
      }
    
}

