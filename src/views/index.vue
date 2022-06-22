<template>
  <div>{{c.counter}}</div>
  <div>{{c.double}}</div>

  <button @click="c.increment">Plus One</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {useCounter} from "@/store";

export default defineComponent({
  setup() {

    const c = useCounter()


    return {c};
  },
});
</script>

<style scoped>

</style>
