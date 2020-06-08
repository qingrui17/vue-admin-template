import request from '@/utils/request'

export function getOrgList(id) {
  return request({
    url: '/v2/org/list/' + id,
    method: 'get'
  })
}

export function getOrgSubList(id){
  return request({
    url:'api/orglist/' + id,
    method:'get'
  })
}
