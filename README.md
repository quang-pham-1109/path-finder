# path-finder

This is a simple path-finding visualizer, written mainly in Vue and Typescript.

## Project Description

### Graph
The project is fairly simple, the grid is rendered based on a global reactive `graph` variable, and this graph is an array of Nodes, and each node is defined via the `INode` interface. Which looks something like this:
```typescript
export interface INode {
  row: number
  col: number
  isWall: boolean
  isStart: boolean
  isEnd: boolean
  isVisited: boolean
  isPath: boolean
}
```
So the main challenge we are trying to solve algorithm-wise is adapting path-finding algorithms to this data structure.

### State
Since the graph would have many states and the states would be defined in different components. Therefore, we used a simple global store in `/lib/utils/store` directory. In here, a graph state is changed to `isStart` , `isEnd`, `isWall` , `algorithm`

## Project Directory 
- `lib`: Utilities function
- `lib/algorithms`: Holds all the algorithms
- `views`: Pages
- `components`: holds all of the components
- `components/ui`: Holds all the shadcn ui components, you can just ignore it
- `components/shared`: All projects's components are here, you can check `Node.vue` and `NodeGrid.vue` to understand more
- `router`: Includes routing information (can just ignore)

## Project Setup

```sh
npm install
```

### Compile and Run the Project

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
## Contribution
This project is just very simple. However, you can clone this repo and add your twist to it. Ie: add additional algorithms or different pages for different kinds of algorithms, like sorting for example
