<template>
  <div class="app-container">

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
    <br />
    <br />
    <el-select v-model="orgid2" placeholder="请选择" @change="changeSub2">
      <el-option
        v-for="item in dept2"
        :key="item.orgid"
        :label="item.title"
        :value="item.orgid">
      </el-option>
    </el-select>

    <el-select v-model="subOrgid2" placeholder="请选择">
      <el-option
        v-for="item in subDept2"
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
      subDept: [],
      orgid2: '',
      subOrgid2: '',
      dept2: [],
      subDept2: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      getOrgList('408').then(response => {
        this.dept = response.data
        this.orgid = this.dept[0].orgid
        this.changeSub()
        this.dept2 = response.data
        this.orgid2 = this.dept2[0].orgid
        this.changeSub2()
        this.loading = false
      })
        .catch(error => {
          console.log(error)
        })
    },
    changeSub() {
      getOrgSubList(this.orgid).then(response => {
        this.subDept = response.data
        this.subOrgid = this.subDept[0].orgid
      })
    },
    changeSub2() {
      getOrgSubList(this.orgid2).then(response => {
        this.subDept2 = response.data
        this.subOrgid2 = this.subDept2[0].orgid
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
