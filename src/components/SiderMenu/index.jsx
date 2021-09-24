import React from 'react'
import { Layout, Menu } from 'antd';
import { InboxOutlined, CodeOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function index() {
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/home">首页</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<InboxOutlined />} title="管理">
                    <Menu.Item key="2">
                        <Link to="/manage/version">版本管理</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/manage/member">成员管理</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/manage/userfeedback">用户反馈</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<CodeOutlined />} title="开发">
                    <Menu.Item key="5">
                        <Link to="/develop/devmanage">开发管理</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}
