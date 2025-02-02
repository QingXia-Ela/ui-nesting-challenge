import { createRef, useLayoutEffect, useMemo } from 'react'
import { Component, createApp, defineComponent, h } from 'vue'
import { createPropsDiffer } from '../utils/propsDiff'

function createPropsSender<T extends Record<string, any>>(VueComponent: any, props: T) {
  return defineComponent(
    () => {
      return () => {
        return h(VueComponent, props)
      }
    },
    {
      props: Object.keys(props)
    }
  )
}

export default function React2Vue<T extends Record<string, any>>({
  vueComponent,
  ...props
}: {
  // todo!: fix type to strict limitation
  vueComponent: Partial<Component<T>> & { name?: string },
} & T) {
  const ref = createRef<HTMLDivElement>()
  const differ = useMemo(() => createPropsDiffer(), [])

  // pure component, we didn't know the component is unload or just rerender
  // useEffect is async, this may cause reflow
  // todo!: optimize this and add cache or node reuse
  useLayoutEffect(() => {
    if (vueComponent && differ.diff(props)) {
      const app = createApp(createPropsSender(vueComponent, props))
      app.mount(ref.current!)
      return () => {
        app.unmount()
      }
    }
  })
  return (
    <div className='react-2-vue-wrapper' ref={ref}>
    </div>
  );
}