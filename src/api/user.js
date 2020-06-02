import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function bindpbx(pbx) {
  return request({
    url: '/api/bindpbx',
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    data: { pbx: pbx.toString() }
  });
}

export function getInfo1() {
  return request({
    url: '/api/userinfo',
    method: 'get',
    params: {}
  })
}
