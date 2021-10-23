import React, { useState, useEffect, useRef } from 'react'
import { Input, notification } from 'antd'
import { SmileOutlined, FrownOutlined, CodeSandboxCircleFilled } from '@ant-design/icons'
import localStorage from 'localStorage'
import './index.css'
import { LeftChatCard, RightChatCard } from './ChatCard'
import MemberCard from './MemberCard'
import getSocket from '../../server/webSocket'
import { getMemberList, getChatHis, sendChat } from '../../tools/api'

const { TextArea } = Input
const socket = getSocket()
const user = JSON.parse(localStorage.getItem('user'))

export default function GroupChat() {
  const [memberList, setMemberList] = useState([])
  const [chatList, setChatList] = useState([])
  const [mes, setMes] = useState('')

  let chatListC = []

  const mainCont = useRef(null)

  // 初级加载为socket绑定接收事件
  useEffect(() => {
    socket.onmessage = params => {
      const { data } = params
      const socketData = JSON.parse(data)
      switch (socketData?.type) {
        // xxx登录
        case 1: {
          socketLogin(socketData)
          break
        }
        // xxx退出
        case 2: {
          socketExit(socketData)
          break
        }
        // xxx发了消息
        case 3: {
          socketReceive(socketData)
          break
        }
        default:
          console.log('错误的type')
      }
    }
  }, [])
  // 初次加载获取用户列表
  useEffect(() => {
    getMemberList().then(data => {
      setMemberList(data?.data)
    })
  }, [])
  // 初级加载获取聊天记录
  useEffect(() => {
    getChatHis({ start: 0, num: 60 }).then(data => {
      setChatList(data?.data)
      chatListC = [...data?.data]
      mainCont.current.scrollTop = mainCont.current.scrollHeight
    })
  }, [])
  const onEnterPress = params => {
    sendChat({ userId: user.id, cont: mes }).then(() => {
      setMes('')
    })
  }
  const onTextAreaChange = params => {
    setMes(params.target.value)
  }
  const socketLogin = socketData => {
    const { nickname, id } = socketData.data
    notification.open({
      duration: 3,
      message: '通知',
      description: `${nickname}上线啦！！`,
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    })
    setMemberList(
      memberList.map(member => {
        if (member?.id === id) {
          return { ...member, onLine: true }
        }
        return member
      }),
    )
  }

  const socketExit = socketData => {
    const { nickname, id } = socketData.data
    notification.open({
      duration: 3,
      message: '通知',
      description: `${nickname}下线了`,
      icon: <FrownOutlined style={{ color: 'rgb(236, 91, 86)' }} />,
    })
    setMemberList(
      memberList.map(member => {
        if (member?.id === id) {
          return { ...member, onLine: false }
        }
        return member
      }),
    )
  }

  const socketReceive = socketData => {
    const newChatList = [...chatListC, socketData.data]
    setChatList(newChatList)
    chatListC = newChatList
    mainCont.current.scrollTop = mainCont.current.scrollHeight
  }

  return (
    <div className="wrap">
      <div className="left-component">
        <div className="title">丁丁的村庄内部聊天群</div>
        <div className="main-cont" ref={mainCont}>
          {chatList.map(chat => {
            const { avatar, nickname, chatCont, chatDateTime } = chat
            if (chat?.id === user?.id) {
              return <RightChatCard key={chatDateTime} avatar={avatar} nickName={nickname} cont={chatCont} />
            }
            return <LeftChatCard key={chatDateTime} avatar={avatar} nickName={nickname} cont={chatCont} />
          })}
        </div>
        <div className="input-area">
          <TextArea value={mes} onChange={onTextAreaChange} onPressEnter={onEnterPress} className="text-area" />
        </div>
        <div />
      </div>
      <div className="right-component">
        <div className="right-component-title">
          成员
          {memberList.reduce((count, currentValue) => {
            if (currentValue?.onLine) {
              return count + 1
            }
            return count
          }, 0)}
          /{memberList.length}
        </div>
        <div className="member-list">
          {memberList?.map(member => {
            const { onLine, nickname, avatar, id } = member
            return <MemberCard key={id} isGray={!onLine} nickname={nickname} avatar={avatar} />
          })}
        </div>
      </div>
    </div>
  )
}
