<!-- eslint-disable vue/multi-word-component-names -->
<script setup="ts">
const props = defineProps({
  node: { type: Object, required: true }
})

const node = props.node
</script>

<template>
  <div
    class="h-6 w-6 border"
    :class="{
      'bg-blue-500': node.isStart,
      'bg-red-500': node.isEnd,
      'bg-orange-900': node.isWall,
      'bg-zinc-600': node.isVisited,
      'bg-green-500': node.isPath
    }"
  ></div>
</template>
