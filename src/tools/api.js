import { post, get } from './myFetch'
// 登录接口
export function login(data) {
    return post( {url: '/login', params: data})
}