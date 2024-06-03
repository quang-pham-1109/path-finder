import { ref } from 'vue'
import type { INode } from '../type'
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

export const clearGraph = () => {
  for (const node of graph.value) {
    node.isWall = false
    node.isVisited = false
    node.isStart = false
    node.isEnd = false
    node.isPath = false
  }
}

// Set the start node
export const startNode = ref<INode>()
export const setStartNode = (row: number, col: number) => {
  graph.value[row * GRID_SIZE + col].isStart = true
  startNode.value = graph.value[row * GRID_SIZE + col]
}

export const clearStartNode = () => {
  for (const node of graph.value) {
    node.isStart = false
  }
}

// Set the end node
export const endNode = ref<INode>()
export const setEndNode = (row: number, col: number) => {
  graph.value[row * GRID_SIZE + col].isEnd = true
  endNode.value = graph.value[row * GRID_SIZE + col]
}

export const clearEndNode = () => {
  for (const node of graph.value) {
    node.isEnd = false
  }
}

// Set the wall node
export const setWallNode = (row: number, col: number) => {
  graph.value[row * GRID_SIZE + col].isWall = true
}
