import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'http://192.168.150.197:8087/api/test-vue',
    method: 'get',
    params
  })
}

