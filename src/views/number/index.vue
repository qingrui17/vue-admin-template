<template>
  <div class="app-container">
    <el-card class="box-card" v-for="(item, key) in list">
      <div slot="header" class="clearfix">
        <span class="cardhead">{{ item.caller }}</span>
        <span class="circle" type="text" title="使用人数">{{ item.count }}</span>
      </div>
      <div v-for="number in item.number.split(',')" class="text item">
        {{ number }}
      </div>
      <el-button class="usebutton" type="text" v-if="1">领用2</el-button>
      <el-button class="usebutton" type="text" v-else="1">领用1</el-button>
    </el-card>

  </div>
</template>

<script>
import { getList } from '@/api/number'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.list = [{"id":"1","caller":"01000101204","number":"17000872794,17000872795,17000872796,17000872798,17000872799","count":20},{"id":"2","caller":"01000101205","number":"17001872794,17001872795,17001872796,17001872798,17001872799","count":20},{"id":"3","caller":"01000101206","number":"27001872794,17001872795,17001872796,17001872798,17001872799","count":20},{"id":"4","caller":"01000101207","number":"37001872794,17001872795,17001872796,17001872798,17001872799","count":30},{"id":"5","caller":"01000101209","number":"47001872794,17001872795,17001872796,17001872798,17001872799","count":20}]
      // console.log(this.list)
      // this.listLoading = true
      // getList().then(response => {
      //   console.log(response)
      //   this.list = response.data
      //   this.listLoading = false
      // })
    }
  }
}
</script>

<style>
  .cardhead {
    background-color:#ccc;
    font-size:30px;
    text-align:center;
  }
  .usebutton {
    color:#fff;
    float: right;
    width:120px;
    height:30px;
    background-color:#169BD5;
    padding: 3px 5px;
    margin-bottom:8px;
  }
  .circle {
      width: 35px;
      height: 35px;
      border-radius: 4em;
      border: 1px solid red;
      background: #169BD5;
      float: right;
      padding: 3px 0;
      text-align:center;
      line-height:30px;
      color:#fff;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-right:30px;
    margin-bottom: 18px;
    float:left;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 300px;
    margin:8px;
    float:left;
  }
</style>
