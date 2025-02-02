
export default function propsDiff(op: Record<string, any>, np: Record<string, any>) {
  return Object.entries(np).filter(([k]) => k in op).filter(([k, v]) => op[k] !== v)
}

export function createPropsDiffer(v: any = {}) {
  const cache = { value: v }
  let init = true
  return {
    cache,
    diff(newValue: any) {
      if (init) {
        cache.value = newValue
        init = false
        return true
      }
      const res = propsDiff(cache.value, newValue)
      cache.value = newValue
      return !!res.length
    },
    clean() {
      cache.value = v
    },
  }
}