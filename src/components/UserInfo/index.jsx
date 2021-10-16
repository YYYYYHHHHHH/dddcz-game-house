import React, { useState, useEffect } from 'react'
import { PageHeader, Form, Input, Button, Avatar, Upload } from 'antd';
import localStorage from 'localStorage'
import { editUser } from '../../tools/api'
import './index.css'

const { TextArea, Password } = Input

export default function UserInfo(comp) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const onFinish = (data) => {
        editUser(data).then(() => {
            setUser(data)
            localStorage.setItem('user', JSON.stringify(data))
        })
    };

    const handleChange = (info) => {
        if (info.file.status === 'done') {
            console.log(info)
            let data = { ...user, avatar: info.file.response.data }
            setUser(data)
            localStorage.setItem('user', JSON.stringify(data))
        }
    }

    const pageHeaderClick = ()=>{
        console.log(comp)
        comp.history.replace('/main')
    }

    return (
        <div className="wrap">
            <PageHeader
                className="page-header"
                onBack={pageHeaderClick}
                subTitle="返回个人主页"
            />
            <div className="con">
                <div className="side-left">

                </div>
                <div className="side-right">
                    <div className="form-warp">
                        <div className="form-title">
                            个人资料
                        </div>
                        <Form
                            labelCol={{ span: 3 }}
                            wrapperCol={{ span: 20, offset: 1 }}
                            size="large"
                            className="form"
                            name="basic"
                            autoComplete="off"
                            onFinish={onFinish}
                            initialValues={user}
                        >
                            <Form.Item
                                hidden
                                name="avatar"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                hidden
                                name="id"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="昵称"
                                name="nickname"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="手机"
                                name="phone"
                                rules={[
                                    {
                                        pattern: /^1[3456789]\d{9}$/,
                                        message: 'The input is not valid phone!'
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="邮箱"
                                name="email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="用户名"
                                name="name"
                            >
                                <Input
                                    disabled
                                    addonAfter={<Button>修改</Button>}
                                />
                            </Form.Item>
                            <Form.Item
                                label="密码"
                                name="password"
                            >
                                <Password visibilityToggle={false} disabled addonAfter={<Button>修改</Button>} />
                            </Form.Item>
                            <Form.Item
                                label="签名"
                                name="sign"
                            >
                                <TextArea />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    保存修改
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="upload-warp">
                        <div
                            className="uploader">
                            {/* <div class="mask">上传头像</div> */}
                            <Upload

                                accept=".png,.img,.gif"
                                name="avatar"
                                listType="picture"
                                showUploadList={false}
                                action="http://127.0.0.1:8080/api/user/upload"
                                data={{ id: user.id }}
                                onChange={handleChange}
                            >
                                <Avatar src={user.avatar} size="large" className="avatar-uploader">
                                </Avatar>
                            </Upload>
                        </div>

                        <div className="avatar-info">
                            我的头像
                        </div>
                        <div className="avatar-info-description">
                            支持 jpg、png、jpeg 格式大小 5M 以内的图片
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
