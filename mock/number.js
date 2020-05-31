import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

const data = Mock.mock({
  'data|30': [{
    id: '@id',
    caller: '',
    number: '',
    count: '',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/vue-admin-template/number/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
