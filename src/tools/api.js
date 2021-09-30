import { post, get } from './myFetch'
// 登录接口
export function login(data) {
    return post( {url: '/login', params: data})
}

// 加载首页数据
export function dashboard(token) {
    let headers = new Headers()

    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json')
    headers.append('Authorization', token)
    
    return post( {url: '/dashboard', headers: headers} )
}