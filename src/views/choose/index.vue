<template>
  <div class="app-container">
    <el-button type="primary">
      更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>

    <el-select v-model="orgid" placeholder="请选择" @change="changeSub">
      <el-option
        v-for="item in dept"
        :key="item.orgid"
        :label="item.title"
        :value="item.orgid">
      </el-option>
    </el-select>

    <el-select v-model="subOrgid" placeholder="请选择">
      <el-option
        v-for="item in subDept"
        :key="item.orgid"
        :label="item.title"
        :value="item.orgid">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { getOrgList, getOrgSubList } from '@/api/choose'

export default {
  data() {
    return {
      loading: true,
      orgid: '',
      subOrgid: '',
      dept: [],
      subDept: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      getOrgSubList('0').then(response => {
        this.dept = response
        this.orgid = this.dept[0].orgid
        this.changeSub()
        this.loading = false
      })
    },
    changeSub() {
      getOrgSubList(this.orgid).then(response => {
        this.subDept = response
        this.subOrgid = this.subDept[0].orgid
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
  .unusebutton {
    color:#fff;
    float: right;
    width:120px;
    height:30px;
    background-color:#ccc;
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
