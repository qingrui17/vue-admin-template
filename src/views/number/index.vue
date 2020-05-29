<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="cardhead">01000101204</span>
        <span class="circle" type="text" title="使用人数">20</span>
      </div>
      <div v-for="o in 5" :key="o" class="text item">
        {{'17000872794 ' + o }}
      </div>
      <el-button class="usebutton" type="text">领用</el-button>
    </el-card>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        width="180">
      </el-table-column>
      <el-table-column
        fix="right"
        width="180">
      </el-table-column>
    </el-table>

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
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
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
    margin-bottom: 18px;
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
  }
</style>
