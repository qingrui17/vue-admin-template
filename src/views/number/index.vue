<template>
  <div class="app-container">
    <el-card class="box-card" v-for="(item, key) in list">
      <div slot="header" class="clearfix">
        <span class="cardhead">{{ item.number }}</span>
        <span class="circle" type="text" title="使用人数">{{ item.count }}</span>
      </div>
      <div v-for="caller in item.caller.split(',')" class="text item">
        {{ caller }}
      </div>
      <el-button class="usebutton" type="text" v-if="bindnumber == item.number" @click="onDeluse(item.id)" >释放</el-button>
      <el-button class="usebutton" type="text" v-else-if="bindnumber.trim() != '' " disabled>领用</el-button>
      <el-button class="usebutton" type="text" v-else="bindnumber.trim() == '' " @click="onUse(item.id)" >领用</el-button>
    </el-card>

  </div>
</template>

<script>
import { getList, bindUse, delUse } from '@/api/number'
import { getInfo1 } from '@/api/user'

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
      userinfo: null,
      bindnumber: null,
      selfoperate: '领用',
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
        this.list = response.data
        this.listLoading = false
      })
      getInfo1().then(response => {
        this.userinfo = response.data
        this.bindnumber = this.userinfo.bindnumber
      })
    },

    onUse(id) {
      bindUse(id).then((response) => {
        if (response.errno == '0') {
          this.$message({
            message: '领用成功！',
            type: 'success'
          })

          getInfo1().then(response => {
            this.userinfo = response.data
            this.bindnumber = this.userinfo.bindnumber
          })

        } else {
          this.$message({
            message: response.msg,
            type: 'error'
          })
        }
      })
    },

    onDeluse(id) {
      delUse(id).then((response) => {
        if (response.errno == '0') {
          this.$message({
            message: '释放成功！',
            type: 'success'
          })
          getInfo1().then(response => {
            this.userinfo = response.data
            this.bindnumber = this.userinfo.bindnumber
          })
        } else {
          this.$message({
            message: response.msg,
            type: 'error'
          })
        }
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
