<template>
  <el-form :model="formData" ref="form" :rules="rules">
    <el-form-item label="用户名" prop="username">
      <el-input type="text" v-model="formData.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input type="password" v-model="formData.pwd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import {useRouter} from "vue-router"

export default defineComponent({
  setup() {
    const {push} = useRouter()
    const rules = {
      username: [{required: true, message: "请输入用户名！"}],
      pwd: [{required: true, message: "请输入密码！"}]
    }
    const form = ref<InstanceType<typeof ElForm> | null>(null)
    const formData = reactive({
      username: "",
      pwd: ""
    })

    const login = () => {
      form.value?.validate().then(valid => {

      })
    }


    return {
      formData,
      form,
      rules,
      login
    }
  },
})
</script>
