// lib/algorithms/aStar.ts

import type { INode } from '../type';
import { endNode, startNode } from '../utils/graph';

interface INodeWithPriority extends INode {
  priority: number;
  distance: number;
  previousNode?: INodeWithPriority;
}

const heuristic = (nodeA: INode, nodeB: INode): number => {
  // Using Manhattan distance as the heuristic
  return Math.abs(nodeA.row - nodeB.row) + Math.abs(nodeA.col - nodeB.col);
};

const getNeighbors = (node: INode, graph: INode[]): INode[] => {
  const neighbors: INode[] = [];
  const directions = [
    { row: -1, col: 0 }, // up
    { row: 1, col: 0 },  // down
    { row: 0, col: -1 }, // left
    { row: 0, col: 1 }   // right
  ];

  for (const direction of directions) {
    const neighborRow = node.row + direction.row;
    const neighborCol = node.col + direction.col;
    const neighbor = graph.find(n => n.row === neighborRow && n.col === neighborCol);
    if (neighbor && !neighbor.isWall) {
      neighbors.push(neighbor);
    }
  }

  return neighbors;
};

export const aStar = (graph: INode[]): INode[] => {
  const openSet: INodeWithPriority[] = [];
  const closedSet: Set<INode> = new Set();
  const start = { ...startNode, priority: 0, distance: 0 } as INodeWithPriority;
  openSet.push(start);

  while (openSet.length > 0) {
    // Sort the open set by priority (smallest first)
    openSet.sort((a, b) => a.priority - b.priority);
    const current = openSet.shift() as INodeWithPriority;
    
    // Check if we have reached the end node
    if (current.row === endNode.row && current.col === endNode.col) {
      // Reconstruct path
      const path: INode[] = [];
      let temp: INodeWithPriority | undefined = current;
      while (temp) {
        path.push(temp);
        temp.isPath = true;  // Mark the node as part of the path
        temp = temp.previousNode;
      }
      return path.reverse();
    }
    
    closedSet.add(current);
    
    const neighbors = getNeighbors(current, graph);
    for (const neighbor of neighbors) {
      if (closedSet.has(neighbor)) continue;

      const tentativeDistance = current.distance + 1; // Assuming uniform cost for simplicity
      const heuristicValue = heuristic(neighbor, endNode);
      const totalDistance = tentativeDistance + heuristicValue;

      const openNeighbor = openSet.find(node => node.row === neighbor.row && node.col === neighbor.col);
      if (!openNeighbor || tentativeDistance < openNeighbor.distance) {
        if (openNeighbor) {
          openNeighbor.priority = totalDistance;
          openNeighbor.distance = tentativeDistance;
          openNeighbor.previousNode = current;
        } else {
          openSet.push({
            ...neighbor,
            priority: totalDistance,
            distance: tentativeDistance,
            previousNode: current
          } as INodeWithPriority);
        }
      }
    }
  }

  return []; // Return empty if no path is found
};
