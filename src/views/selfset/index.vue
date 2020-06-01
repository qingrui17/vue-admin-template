<template>
  <div class="app-container">
    <el-form ref="userinfo" :model="userinfo" label-width="120px" class="user-form">
      <div class="form-title">
        个人信息
      </div>
      <el-form-item label="姓名">
        <el-input v-model="userinfo.TITLE" :disabled="true" />
      </el-form-item>
      <el-form-item label="所在部门">
        <el-input v-model="userinfo.POSTNAME" :disabled="true" />
      </el-form-item>
      <el-form-item label="所在区域">
        <el-input v-model="userinfo.WORKCITYDESC" :disabled="true" />
      </el-form-item>
      <el-form-item label="分机号">
        <el-input v-model="userinfo.pbx" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" >提交</el-button>
      </el-form-item>
    </el-form>

    <div class="tips">
      分机号查询方式：使用话机拨打 0000# ，根据语音提示按2查询！
    </div>
  </div>
</template>

<script>
import { getInfo1, bindpbx } from '@/api/user'
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
      userinfo: {},
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getInfo1().then(response => {
        console.log(response)
        this.userinfo = response.data
        this.listLoading = false
      })
    },
    onSubmit() {
      bindpbx(this.userinfo.pbx).then((response) => {
        if (response.errno == '0') {
          this.$message({
            message: '分机号绑定成功！',
            type: 'success'
          })
          this.$router.push({
            path: '/number/index',
            query: {

            }
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

<style scoped>
.line{
  text-align: center;
}
.user-form{
  width: 400px;
  border:1px solid #D7EDCE;
}
.form-title{
  height: 50px;
  font-size:20px;
  font-weight:bold;
  background-color: #D7EDCE;
  line-height:50px;
  padding-left:50px;
  margin-bottom:8px;
}

.tips {
    font-size: 14px;
    color: red;
    margin-bottom: 10px;
    margin-top:15px;
    width:400px;
    padding:8px;
  }
</style>

