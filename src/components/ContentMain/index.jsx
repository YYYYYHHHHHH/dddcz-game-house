import React, { useState, useEffect } from 'react'
import { Layout, Breadcrumb } from 'antd';
import { Route, Switch } from 'react-router-dom'

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
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/manage/version" component={VersionManage}></Route>
                    <Route exact path="/manage/member" component={MemberManager}></Route>
                    <Route exact path="/manage/userfeedback" component={UserFeedback}></Route>
                    <Route exact path="/develop/devmanage" component={DevManage}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/tools" component={Tools}></Route>
                </Switch>
            </Content>
        </Layout>
    )
}
