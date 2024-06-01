<!-- eslint-disable vue/multi-word-component-names -->
<script setup="ts">
const props = defineProps({
  row: { type: Number, required: true },
  col: { type: Number, required: true },
  isStart: { type: Boolean, required: true },
  isEnd: { type: Boolean, required: true },
  isWall: { type: Boolean, required: true },
  isVisited: { type: Boolean, required: true },
  isShortestPath: { type: Boolean, required: true }
})
</script>

<template>
  <div class="h-6 w-6 border"></div>
</template>
