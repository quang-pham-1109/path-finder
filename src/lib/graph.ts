import { ref } from 'vue'
import type { INode } from './type'
import { GRID_SIZE } from './constant'

export const graph = ref<INode[]>([])

// initialize the graph
for (let i = 0; i < GRID_SIZE; i++) {
  for (let j = 0; j < GRID_SIZE; j++) {
    graph.value.push({
      row: i,
      col: j,
      isWall: false,
      isStart: false,
      isEnd: false,
      isVisited: false,
      isPath: false
    })
  }
}

// Set the start node
export const setStartNode = (row: number, col: number) => {
  graph.value[row * GRID_SIZE + col].isStart = true
}

export const clearStartNode = () => {
  for (const node of graph.value) {
    node.isStart = false
  }
}

// Set the end node
export const setEndNode = (row: number, col: number) => {
  graph.value[row * GRID_SIZE + col].isEnd = true
}

export const clearEndNode = () => {
  for (const node of graph.value) {
    node.isEnd = false
  }
}
