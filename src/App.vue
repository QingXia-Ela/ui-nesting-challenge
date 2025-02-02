<script setup>
import Counter from './vue/Counter.vue';
import Vue2React from './components/Vue2React';
import CounterReact from './react/Counter.tsx';
</script>

<template>
<Counter />
<Vue2React :react-component="CounterReact" :start-value="10" />
</template>
