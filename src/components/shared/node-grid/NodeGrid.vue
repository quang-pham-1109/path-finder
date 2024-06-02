<script setup lang="ts">
import type { INode } from '@/lib/type'
import { Node } from '../node'
import { isStart, setStart, isEnd, setEnd } from '@/lib/store'
import { graph, setStartNode, setEndNode } from '@/lib/graph'

const handleNodeClick = (node: INode) => {
  if (isStart.value === true) {
    setStartNode(node.row, node.col)
    setStart(false)
  }

  if (isEnd.value === true) {
    setEndNode(node.row, node.col)
    setEnd(false)
  }

  console.log(node)
}
</script>

<template>
  <div>
    <div
      v-for="row in [...Array(Math.max(...graph.map((n) => n.row)) + 1).keys()]"
      :key="`row${row}`"
      class="flex"
    >
      <div v-for="node in graph.filter((n) => n.row === row)" :key="`${node.row}-${node.col}`">
        <Node :node="node" @click="handleNodeClick(node)" />
      </div>
    </div>
  </div>
</template>
