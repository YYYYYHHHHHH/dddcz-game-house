import React, { useState, useEffect } from 'react'
import { Layout, Breadcrumb } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom'

import DevManage from '../../pages/DevManage'
import Home from '../../pages/Home'
import MemberManager from '../../pages/MemberManage'
import UserFeedback from '../../pages/UserFeedback'
import VersionManage from '../../pages/VersionManage'
import About from '../../pages/About'
import Tools from '../../pages/Tools'

const { Content } = Layout;

export default function ContentMain() {
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <Switch>
                    <Route path="/main/home" component={Home}></Route>
                    <Route path="/main/version-manage" component={VersionManage}></Route>
                    <Route path="/main/member-manage" component={MemberManager}></Route>
                    <Route path="/main/userfeedback-manage" component={UserFeedback}></Route>
                    <Route path="/main/devmanage-develop" component={DevManage}></Route>
                    <Route path="/main/about" component={About}></Route>
                    <Route path="/main/tools" component={Tools}></Route>
                    <Redirect to="/main/home"></Redirect>
                </Switch>
            </Content>
        </Layout>
    )
}
