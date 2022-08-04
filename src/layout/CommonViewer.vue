<template>
  <router-view v-slot="{Component, route}">
    <keep-alive :include="keepAliveComponents">
      <component :is="Component" :key="route.name" />
    </keep-alive>
  </router-view>
</template>

<script>
import {defineComponent, ref} from "vue";

export default defineComponent( {
  name: "CommonViewer",
  setup() {
    const keepAliveComponents = ref(["CommonViewer"])

    return {
      keepAliveComponents
    }
  }
})
</script>

<style scoped>

</style>
