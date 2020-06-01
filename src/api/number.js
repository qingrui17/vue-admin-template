import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/api/numbers',
    method: 'get'
  })
}

export function bindUse(id){
    return request({
        url: '/api/use/' + id,
        method: 'post',
        id: id
    })
}

export function delUse(id){
    return request({
        url: '/api/unuse/' + id,
        method: 'delete',
        id: id
    })
}