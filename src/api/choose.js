import request from '@/utils/request'

export function getOrgList(params) {
  return request({
    url: '/api/org',
    method: 'get'
  })
}

export function getOrgSubList(id){
  return request({
    url:'api/orglist/' + id,
    method:'get'
  })
}
