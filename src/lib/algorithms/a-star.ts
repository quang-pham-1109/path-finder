import type { INode } from '../type'
import { GRID_SIZE } from '../utils/constant'
import { endNode, graph, startNode } from '../utils/graph'

const heuristic = (nodeA: INode, nodeB: INode): number => {
  return Math.abs(nodeA.row - nodeB.row) + Math.abs(nodeA.col - nodeB.col)
}

const getNeighbors = (node: INode): INode[] => {
  const neighbors: INode[] = []
  const { row, col } = node

  if (row > 0) neighbors.push(graph.value[(row - 1) * GRID_SIZE + col]) // Up
  if (row < GRID_SIZE - 1) neighbors.push(graph.value[(row + 1) * GRID_SIZE + col]) // Down
  if (col > 0) neighbors.push(graph.value[row * GRID_SIZE + (col - 1)]) // Left
  if (col < GRID_SIZE - 1) neighbors.push(graph.value[row * GRID_SIZE + (col + 1)]) // Right

  return neighbors
}

const reconstructPath = (cameFrom: Map<INode, INode | null>, current: INode): INode[] => {
  const totalPath = [current]

  while (cameFrom.has(current)) {
    current = cameFrom.get(current)!
    totalPath.push(current)
  }

  return totalPath.reverse()
}

const visualizePath = (path: INode[]) => {
  path.forEach(node => {
    node.isPath = true
  })
}

export const aStar = (graph: INode[]) => {
  const openSet: INode[] = []
  const closedSet: Set<INode> = new Set()
  const cameFrom: Map<INode, INode | null> = new Map()
  const gScore: Map<INode, number> = new Map()
  const fScore: Map<INode, number> = new Map()

  openSet.push(startNode.value!)

  graph.forEach(node => {
    gScore.set(node, Infinity)
    fScore.set(node, Infinity)
  })

  gScore.set(startNode.value!, 0)
  fScore.set(startNode.value!, heuristic(startNode.value!, endNode.value!))

  while (openSet.length > 0) {
    openSet.sort((a, b) => fScore.get(a)! - fScore.get(b)!)
    const current = openSet.shift()!

    if (current === endNode.value) {
      const path = reconstructPath(cameFrom, current)
      visualizePath(path)
      return path
    }

    closedSet.add(current)

    getNeighbors(current).forEach(neighbor => {
      if (closedSet.has(neighbor) || neighbor.isWall) {
        return
      }

      const tentativeGScore = gScore.get(current)! + 1

      if (!openSet.includes(neighbor)) {
        openSet.push(neighbor)
      } else if (tentativeGScore >= gScore.get(neighbor)!) {
        return
      }

      cameFrom.set(neighbor, current)
      gScore.set(neighbor, tentativeGScore)
      fScore.set(neighbor, tentativeGScore + heuristic(neighbor, endNode.value!))
    })
  }

  return [] 
}

const createNode = (row: number, col: number, isWall = false): INode => ({
  row,
  col,
  isWall,
  isPath: false,
  isStart: false,
  isEnd: false,
  isVisited: false
})


const testGridSize = 5

const nodes: INode[] = []

for (let row = 0; row < testGridSize; row++) {
  for (let col = 0; col < testGridSize; col++) {
    nodes.push(createNode(row, col))
  }
}

// Set start and end nodes for the test
const testStartNode = nodes[0] 
const testEndNode = nodes[24] 

const testGraph = {
  value: nodes
}

startNode.value = testStartNode
endNode.value = testEndNode


testStartNode.isStart = true
testEndNode.isEnd = true


nodes[6].isWall = true
nodes[7].isWall = true
nodes[8].isWall = true
nodes[11].isWall = true
nodes[16].isWall = true
nodes[17].isWall = true


const result = aStar(testGraph.value)

console.log("Shortest path:")
result.forEach(node => {
  console.log(`Node at (${node.row}, ${node.col})`)
})

