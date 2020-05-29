import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/api/test-vue',
    method: 'get',
    params
  })
}

