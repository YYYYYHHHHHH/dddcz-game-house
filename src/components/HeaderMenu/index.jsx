import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';

import  './index.css'

const { Header } = Layout;

export default function index() {
    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1"><Link to="/tools">工具</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/about">关于</Link></Menu.Item>
            </Menu>
        </Header>
    )
}
