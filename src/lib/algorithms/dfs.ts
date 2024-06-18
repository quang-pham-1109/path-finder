import type { INode } from '../type'
import { delayRender } from '../utils/utils'

export const dfs = async (graph: INode[]): Promise<INode[]> => {
  const startNode = graph.find((node) => node.isStart)
  const endNode = graph.find((node) => node.isEnd)

  if (!startNode || !endNode) {
    return []
  }

  const path: INode[] = []
  const stack: INode[] = [startNode]

  while (stack.length > 0) {
    const currentNode = stack.pop()

    if (!currentNode || currentNode.isVisited) {
      continue
    }

    if (!currentNode.isStart && !currentNode.isEnd) {
      currentNode.isVisited = true
      await delayRender()
    }

    path.push(currentNode)

    if (currentNode === endNode) {
      return path
    }

    const neighbors = getNeighbors(currentNode, graph)
    for (const neighbor of neighbors) {
      if (!neighbor.isVisited && !neighbor.isWall) {
        stack.push(neighbor)
      }
    }
  }

  return [] // Return empty if no path is found
}

const getNeighbors = (node: INode, graph: INode[]): INode[] => {
  const directions = [
    { row: -1, col: 0 },
    { row: 1, col: 0 },
    { row: 0, col: -1 },
    { row: 0, col: 1 }
  ]

  const neighbors: INode[] = []
  for (const direction of directions) {
    const neighborRow = node.row + direction.row
    const neighborCol = node.col + direction.col
    const neighborNode = graph.find((n) => n.row === neighborRow && n.col === neighborCol)

    if (neighborNode) {
      neighbors.push(neighborNode)
    }
  }

  return neighbors
}
