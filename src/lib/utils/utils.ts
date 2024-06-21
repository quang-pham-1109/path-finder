import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { INode } from '../type'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const delayRender = () => new Promise((resolve) => setTimeout(resolve, 15))

// This takes in a reactive INodes array
export const visualizePathReactive = async (path: INode[]) => {
  for (const node of path) {
    if (node.isStart || node.isEnd) {
      continue
    }
    await delayRender()
    node.isPath = true
    node.isVisited = false
  }
}

// This takes in a normal Inodes array
export const visualizePathStatic = async (path: INode[], graph: INode[]) => {
  for (const pathNode of path) {
    if (pathNode.isStart || pathNode.isEnd) {
      continue
    }
    await delayRender()
    // Find the corresponding node in the graph using row and col as unique identifiers
    const graphNode = graph.find(
      (gNode) => gNode.row === pathNode.row && gNode.col === pathNode.col
    )
    if (graphNode) {
      graphNode.isPath = true
    }
  }
}
