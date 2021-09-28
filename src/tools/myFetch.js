import { message } from 'antd'
const baseUrl = 'https://mock.yonyoucloud.com/mock/19838/dddcz-game-house'

function http(url, params, headers, method) {
    let fParams = params || {}
    let fHeaders = headers || new Headers()

    let result = fetch(baseUrl + url, { method: method, mode: 'cors', body: JSON.stringify(fParams), headers: fHeaders })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Network response was not ok.')
            }
        }).catch(function (error) {
            console.log('There has been a problem with your fetch operation: ', error.message);
        }).then(data => {
            if (data.success) {
                message.success(data.msg)
            } else {
                message.warning(data.msg)
            }
            return data
        });

    return result
}

export function get(url, params, headers) {
    if (params) {
        let paramsArray = []
        paramsArray = Object.keys(params).map(key => {
            return key + params[key]
        })
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return http(url, {}, headers, 'GET')
}

export function post(url, params, headers) {
    let fHeaders = new Headers()

    fHeaders.append('Content-Type', 'application/json')
    fHeaders.append('Accept', 'application/json')
    fHeaders = headers || fHeaders

    return http(url, params, fHeaders, 'POST')
}