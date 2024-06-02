<!-- eslint-disable vue/multi-word-component-names -->
<script setup="ts">
const props = defineProps({
  node: { type: Object, required: true }
})

const node = props.node
console.log(node)
</script>

<template>
  <div
    class="h-6 w-6 border"
    :class="{ 'bg-blue-500': node.isStart, 'bg-red-500': node.isEnd }"
  ></div>
</template>
