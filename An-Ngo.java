import { INode, startNode, endNode } from '../utils/graph';

// Helper function to get neighbors of a node
function getNeighbors(node: INode, graph: INode[]): INode[] {
  const { row, col } = node;
  const neighbors: INode[] = [];

  // Define the possible directions (up, down, left, right)
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  for (const [dr, dc] of directions) {
    const newRow = row + dr;
    const newCol = col + dc;

    // Check if the new position is within the grid bounds
    if (newRow >= 0 && newRow < graph.length && newCol >= 0 && newCol < graph[0].length) {
      neighbors.push(graph[newRow * graph[0].length + newCol]);
    }
  }

  return neighbors;
}

// Depth-First Search algorithm
export const dfs = (graph: INode[]) => {
  // Initialize a stack to perform DFS
  const stack: INode[] = [];

  // Start DFS from the startNode
  stack.push(startNode);

  while (stack.length > 0) {
    const currentNode = stack.pop()!;

    // Mark the current node as visited
    currentNode.isVisited = true;

    // If the current node is the endNode, we're done
    if (currentNode === endNode) {
      return true;
    }

    // Get neighbors of the current node
    const neighbors = getNeighbors(currentNode, graph);

    for (const neighbor of neighbors) {
      if (!neighbor.isWall && !neighbor.isVisited) {
        stack.push(neighbor);
        // You can optionally mark the neighbor as visited here
      }
    }
  }

  // If we reach here, there's no path to the endNode
  return false;
};
