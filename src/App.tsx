import React2Vue from "./components/React2Vue";
import Counter from "./react/Counter";
import CounterVue from "./vue/Counter.vue";

export default function AppReact() {
  return (
    <>
      <Counter />
      <React2Vue vueComponent={CounterVue} startValue={10} />
    </>
  );
}