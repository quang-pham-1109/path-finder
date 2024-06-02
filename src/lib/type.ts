export interface INode {
  row: number
  col: number
  isWall: boolean
  isStart: boolean
  isEnd: boolean
  isVisited: boolean
  isPath: boolean
}
