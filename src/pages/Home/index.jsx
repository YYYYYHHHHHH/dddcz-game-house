import React, {useState, useEffect} from 'react'
import { dashboard } from '../../tools/api'
export default function Home() {
    const [data, setData] = useState('')

    useEffect(() => {
        dashboard('QasbeJbmAWVRJgBJoGzoooGZS9waA2').then(data => {
            console.log('首页: ', data)
            setData(data.data.str)
        })
    })

    return (
        <div>
            <h1>首页</h1>
            <div>{data}</div>
        </div>
    )
}
