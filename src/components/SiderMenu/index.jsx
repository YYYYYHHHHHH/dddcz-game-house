import React, {useEffect, useState} from 'react'
import { Layout, Menu } from 'antd';
import { InboxOutlined, CodeOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function SiderMenu() {
    const [innerHeight, setInnerHeight] = useState(0)

    useEffect(() => {
        setInnerHeight(window.innerHeight - 64) 
    })
    
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultOpenKeys={['sub1']}
                style={{ height: `${innerHeight}px`, borderRight: 0 }}
            >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/main/home">首页</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<InboxOutlined />} title="管理">
                    <Menu.Item key="2">
                        <Link to="/main/version-manage">版本管理</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/main/member-manage">成员管理</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/main/userfeedback-manage">用户反馈</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<CodeOutlined />} title="开发">
                    <Menu.Item key="5">
                        <Link to="/main/devmanage-develop">开发管理</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}
