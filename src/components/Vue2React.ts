import { defineComponent, h, onBeforeUnmount, onMounted, ref } from "vue";
import { jsx } from 'react/jsx-runtime'
import { createRoot } from "react-dom/client";

const Vue2React = defineComponent<{
  reactComponent?: React.FC<Record<string, any>>
} & {
  /** react component props types */
}>({
  setup(props) {
    const wrapper = ref<HTMLDivElement>()
    let root: ReturnType<typeof createRoot>
    onMounted(() => {
      if (props.reactComponent) {
        root = createRoot(wrapper.value!)
        root.render(jsx(props.reactComponent, { ...props }))
      }
    })

    onBeforeUnmount(() => {
      root?.unmount()
    })

    return () => {
      return h('div', { class: 'vue-2-react-wrapper', ref: 'wrapper' })
    }
  }
})

export default Vue2React