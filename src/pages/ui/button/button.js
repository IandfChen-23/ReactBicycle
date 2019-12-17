import React from 'react'
import { Card,Button,Icon,Radio} from 'antd';
import './button.less'
const ButtonGroup = Button.Group;
export default class IButton extends React.Component{
    state = {
        loading: false,
        size:'small'
    };
    enterLoading = () => {
        this.setState({ loading: true });
    };
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };
    render(){
        return (
            <div>
                <Card title="基础按钮" className='card-button'>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button disabled>disabled</Button>
                </Card>
                <Card title="图形按钮" className='card-button' >
                    <Button icon='plus'>新增</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button icon='search' shape='circle'></Button>
                    <Button  icon='download'>下载</Button>
                </Card>
                <Card title="loading按钮" className='card-button' >
                    <Button type="primary" loading>Loading</Button>
                    <Button type="primary" onClick={this.enterLoading}  loading={this.state.loading} >click me</Button>
                </Card>
                <Card title="按钮组"  className='button-group' >
                    <ButtonGroup >
                        <Button type="primary" icon="cloud"  />
                        <Button type="primary" icon="cloud-download" style={{marginLeft:0}} />
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>Cancel</Button>
                        <Button>OK</Button>
                    </ButtonGroup>
                    <ButtonGroup >
                        <Button type="primary">
                            <Icon type="left" />
                            前进
                        </Button>
                        <Button type="primary">
                            后退
                            <Icon type="right" />
                        </Button>
                    </ButtonGroup>
                </Card>
                <Card title='按钮大小' className='card-button' >
                <Radio.Group defaultValue="small" onChange={this.handleSizeChange}>
                    <Radio.Button value="small">small</Radio.Button>
                    <Radio.Button value="default">default</Radio.Button>
                    <Radio.Button value="large">large</Radio.Button>
                </Radio.Group>
                    <div style={{margin:20}}>
                        <Button type="primary" size={this.state.size}>Primary</Button>
                        <Button size={this.state.size}>Default</Button>
                        <Button type="dashed" size={this.state.size}>Dashed</Button>
                    </div>
                </Card>
            </div>
        )
    }
    
}
