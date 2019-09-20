import React from 'react'
import { Row } from 'antd'
import MenuList from '../../config/menuConfig'
import { Menu, Icon } from 'antd';
import './index.less'
const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuList);
        this.setState({
            menuTree:menuTreeNode
        })
    }
    //菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu  style={{margin:15}} title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item style={{margin:15}} title={item.title} key={item.key}>{item.title}</Menu.Item>

        })
    }
    render() {
        return (
            <div className='nav-left'>
                <div className='logo'>
                  <img src={require('../../public/assets/logo-ant.svg')}  alt=''></img>
                    <h1>SHARED MS </h1>
                </div>
                <Menu theme='dark' mode="vertical">
                    {this.state.menuTree}

                </Menu>
            </div>
        )
    }

}