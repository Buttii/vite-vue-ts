<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>
      <component :is="CommonViewer"/>
    </el-main>
  </el-container>
</template>

<script>
import CommonViewer from "@/layout/CommonViewer.vue";
import {defineComponent} from "vue";

export default defineComponent({
  setup() {


    return {
      CommonViewer
    }
  }
})
</script>
