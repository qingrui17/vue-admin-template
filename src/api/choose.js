import request from '@/utils/request'

export function getOrgList(id) {
  return request({
    url: '/v2/org/list/?orgid=' + id,
    method: 'get'
  })
}

export function getOrgSubList(id){
  return request({
    url:'/v2/org/list/?orgid=' + id,
    method:'get'
  })
}
