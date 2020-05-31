<template>
  <div class="app-container">
    <el-form ref="userinfo" :model="userinfo" label-width="120px">
      <div class="title-container">
        <h3>个人信息</h3>
      </div>
      <el-form-item label="姓名">
        <el-input v-model="userinfo.name" />
      </el-form-item>
      <el-form-item label="所在部门">
        <el-input v-model="userinfo.depart" />
      </el-form-item>
      <el-form-item label="所在区域">
        <el-input v-model="userinfo.area" />
      </el-form-item>
      <el-form-item label="分机号">
        <el-input v-model="userinfo.suffix" />
      </el-form-item>

      
      <!-- <el-form-item label="Activity form">
        <el-input v-model="" type="textarea" />
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
    <div>分机号查询方式：使用话机拨打 0000# ，根据语音提示按2查询！</div>
  </div>
</template>

<script>
import { getList } from '@/api/user'
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
      userinfo: {
        name: '',
        depart: '',
        area: '',
        suffix: '',
      },
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.userinfo = {
        name: "liuboqing",
        depart: "",
        area: "北京",
        suffix: "",
      }
      // console.log(this.list)
      // this.listLoading = true
      // getList().then(response => {
      //   console.log(response)
      //   this.list = response.data
      //   this.listLoading = false
      // })
    },
    onSubmit() {
      this.$router.push({
        path: '/number/index',
        query: {
          name: this.userinfo.name,
          
        }
      })
    },
    onCancel() {

    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

