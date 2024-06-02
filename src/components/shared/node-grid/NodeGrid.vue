<script setup lang="ts">
import type { INode } from '@/lib/type'
import { Node } from '../node'
import { isStart, setStart, isEnd, setEnd, isWall } from '@/lib/utils/store'
import { graph, setStartNode, setWallNode, setEndNode } from '@/lib/utils/graph'

const handleNodeClick = (node: INode) => {
  if (isStart.value === true) {
    setStartNode(node.row, node.col)
    setStart(false)
    return
  }

  if (isEnd.value === true) {
    setEndNode(node.row, node.col)
    setEnd(false)
    return
  }

  if (isWall.value === true) {
    setWallNode(node.row, node.col)
    return
  }
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
