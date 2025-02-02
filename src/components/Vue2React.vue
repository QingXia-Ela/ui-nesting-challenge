<template>
<div class="vue-2-react-wrapper" ref="wrapper"></div>
</template>

<script lang="tsx" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { createRoot } from 'react-dom/client';
const props = defineProps<{
  reactComponent?: React.FC<Record<string, any>>
} & { /** react component props types */ }>()
const wrapper = ref<HTMLDivElement>()

let root: ReturnType<typeof createRoot>

onMounted(() => {
  if (props.reactComponent) {
    root = createRoot(wrapper.value!)
    // todo!: remove reactComponent as props item
    root.render(<props.reactComponent {...props} />)
  }
})

onBeforeUnmount(() => {
  root?.unmount()
})
</script>