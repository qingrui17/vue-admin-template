<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="6" v-for="i in 7">
        <el-card :body-style="{ padding: '20px' }">
          <el-row :gutter="8">
            <el-col :span="20"><div class="dev1">01000101204</div></el-col>
            <el-col :span="4"><div class="dev1">24</div></el-col>
          </el-row>
          <el-row :gutter="8">
            <el-col :span="12"><div class="dev2">17810358839</div></el-col>
            <el-col :span="12"><div class="dev2">17810358839</div></el-col>
          </el-row>
          <el-row :gutter="8">
            <el-col :span="12"><div class="dev2">17810358839</div></el-col>
            <el-col :span="12"><div class="dev2">17810358839</div></el-col>
          </el-row>
          <el-row :gutter="8">
            <el-col :span="12"><div class="dev2">17810358839</div></el-col>
            <el-col :span="12"><div class="dev2">17810358839</div></el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
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
      list: null
      // listLoading: true
    }
  },
  created() {
    // this.fetchData()
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
  .el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .dev1 {
    background: lightgray;
    text-align: center;
    font-size: 30px;
    padding: 8px;
  }
  .dev2 {
    background: greenyellow;
    text-align: center;
    font-size: 20px;
    padding: 8px;
  }
</style>
