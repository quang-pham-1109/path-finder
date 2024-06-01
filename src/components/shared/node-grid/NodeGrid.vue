<script setup lang="ts">
import { Node } from '../node'
import { GRID_SIZE } from '@/lib/constant'
</script>

<template>
  <div>
    <div v-for="row in GRID_SIZE" :key="'row' + row" class="flex">
      <Node
        v-for="col in GRID_SIZE"
        :key="'col' + col"
        :row="row - 1"
        :col="col - 1"
        isStart="false"
        isEnd="false"
        isWall="false"
        isVisited="false"
        isShortestPath="false"
      />
    </div>
  </div>
</template>
