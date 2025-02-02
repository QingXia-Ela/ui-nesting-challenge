<template>
<div>
  <p>This is a counter from Vue</p>
  <p>You clicked {{ count }} times</p>
  <button @click="increment">Click me</button>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
const props = defineProps<{
  startValue?: number,
}>();
if (props.startValue) {
  count.value = props.startValue
}

function increment() {
  count.value++;
}
</script>
