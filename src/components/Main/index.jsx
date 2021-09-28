import React, { useState, useEffect } from 'react'
import { Layout } from 'antd';

import HeaderMenu from '../HeaderMenu'
import SiderMenu from '../SiderMenu'
import ContentMain from '../ContentMain'

export default function Main() {
    return (
        <Layout>
            <HeaderMenu></HeaderMenu>
            <Layout>
                <SiderMenu></SiderMenu>
                <ContentMain></ContentMain>
            </Layout>
        </Layout>
    )
}
