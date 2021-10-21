import { post, get, put, baseUrl } from './myFetch'
// 登录接口
export function login(data) {
  return post({ url: '/user/login', params: data })
}
// 修改用户信息
export function editUser(data) {
  return put({ url: '/user/users', params: data })
}

// 上传头像
export function upload() {
  return `${baseUrl}/user/upload`
}
// // 加载首页数据
// export function dashboard(token) {
//     let headers = new Headers()

//     headers.append('Content-Type', 'application/json')
//     headers.append('Accept', 'application/json')
//     headers.append('Authorization', token)

//     return post( {url: '/dashboard', headers: headers} )
// }
