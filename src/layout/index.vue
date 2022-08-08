<template>
  <el-container>
    <el-aside width="240px">
      <Menu>

      </Menu>
    </el-aside>
    <el-main>
      <component :is="CommonViewer"/>
    </el-main>
  </el-container>
</template>

<script>
import CommonViewer from "@/layout/CommonViewer.vue";
import {defineComponent} from "vue";
import Menu from "@/layout/Menu";

export default defineComponent({
  components: {
    Menu
  },
  setup() {


    return {
      CommonViewer
    }
  }
})
</script>
