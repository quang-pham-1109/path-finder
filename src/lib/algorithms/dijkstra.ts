import type { INode } from '../type'

interface IDistanceNode extends INode {
  distance: number
  previousNode?: INode
}

export const dijkstra = (graph: INode[]): INode[] => {
  const startNode = graph.find((node) => node.isStart)
  const endNode = graph.find((node) => node.isEnd)

  if (!startNode || !endNode) {
    return []
  }

  // Initialize distances and priority queue
  const distanceGraph: IDistanceNode[] = graph.map((node) => ({
    ...node,
    distance: node.isStart ? 0 : Infinity
  }))
  const unvisitedNodes = [...distanceGraph]

  while (unvisitedNodes.length > 0) {
    // Sort nodes by distance
    unvisitedNodes.sort((a, b) => a.distance - b.distance)
    const currentNode = unvisitedNodes.shift()

    if (!currentNode || currentNode.isWall || currentNode.distance === Infinity) {
      continue
    }

    currentNode.isVisited = true

    if (currentNode.isEnd) {
      return reconstructPath(currentNode)
    }

    const neighbors = getNeighbors(currentNode, distanceGraph)
    for (const neighbor of neighbors) {
      if (!neighbor.isVisited && !neighbor.isWall) {
        const altDistance = currentNode.distance + 1 // assuming each step has equal weight
        if (altDistance < neighbor.distance) {
          neighbor.distance = altDistance
          neighbor.previousNode = currentNode
        }
      }
    }
  }

  return [] // Return empty if no path is found
}

const getNeighbors = (node: INode, graph: INode[]): IDistanceNode[] => {
  const directions = [
    { row: -1, col: 0 },
    { row: 1, col: 0 },
    { row: 0, col: -1 },
    { row: 0, col: 1 }
  ]

  const neighbors: IDistanceNode[] = []
  for (const direction of directions) {
    const neighborRow = node.row + direction.row
    const neighborCol = node.col + direction.col
    const neighborNode = graph.find(
      (n) => n.row === neighborRow && n.col === neighborCol
    ) as IDistanceNode

    if (neighborNode) {
      neighbors.push(neighborNode)
    }
  }

  return neighbors
}

const reconstructPath = (endNode: IDistanceNode): INode[] => {
  const path: INode[] = []
  let currentNode: IDistanceNode | undefined = endNode

  while (currentNode) {
    const { row, col, isWall, isStart, isEnd, isVisited, isPath } = currentNode
    path.unshift({ row, col, isWall, isStart, isEnd, isVisited, isPath })
    currentNode = currentNode.previousNode as IDistanceNode
  }
  return path
}
