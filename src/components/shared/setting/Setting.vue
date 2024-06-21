<!-- eslint-disable vue/multi-word-component-names -->
<script setup="ts">
import { ref, watch } from 'vue'
import { ButtonTooltip } from '@/components/ui/button-tooltip'
import { setStart, setEnd, setWall, isWall, algorithm, setAlgorithm } from '@/lib/utils/store'
import {
  clearEndNode,
  clearStartNode,
  clearGraph,
  graph,
  randomGraph,
  clearPath
} from '@/lib/utils/graph'
import { dfs, dijkstra, aStar } from '@/lib/algorithms'
import { useToast } from '@/components/ui/toast'
import { visualizePathReactive, visualizePathStatic } from '@/lib/utils/utils'

const { toast } = useToast()

const handleStart = () => {
  clearStartNode()
  setStart(true)
  return toast({
    title: 'Start Node',
    description: 'Click on the grid to set the start node'
  })
}

const handleEnd = () => {
  clearEndNode()
  setEnd(true)
  return toast({
    title: 'End Node',
    description: 'Click on the grid to set the end node'
  })
}

const handleWall = () => {
  if (isWall.value === true) {
    setWall(false)
    return toast({
      title: 'Wall Node',
      description: 'Wall node is disabled'
    })
  }
  setWall(true)
  return toast({
    title: 'Wall Node',
    description: 'Click on the grid to draw the wall node'
  })
}

const handleReset = () => {
  clearGraph()
  setStart(false)
  setEnd(false)
  setWall(false)
  return toast({
    title: 'Reset',
    description: 'All nodes are reset'
  })
}

const handleRandom = () => {
  clearGraph()
  setStart(false)
  setEnd(false)
  setWall(false)

  randomGraph()

  return toast({
    title: 'Randomize',
    description: 'Randomize the grid'
  })
}

const algorithmSelect = ref('')
watch(algorithmSelect, (value) => {
  setAlgorithm(value)
})

const handleRun = async () => {
  if (algorithm.value === '') {
    return toast({
      title: 'Error',
      description: 'Please select an algorithm',
      variant: 'destructive'
    })
  }

  if (algorithm.value === 'a*') {
    clearPath()

    const path = aStar(graph.value)

    if (path.length === 0) {
      return toast({
        title: 'Error',
        description: 'No path found',
        variant: 'destructive'
      })
    }

    await visualizePathReactive(path)

    return toast({
      description: `Run ${algorithm.value} algorithm`
    })
  }

  if (algorithm.value === 'dfs') {
    clearPath()

    const path = await dfs(graph.value)

    if (path.length === 0) {
      return toast({
        title: 'Error',
        description: 'No path found',
        variant: 'destructive'
      })
    }

    await visualizePathReactive(path)
    return toast({
      description: `Run ${algorithm.value} algorithm`
    })
  }

  if (algorithm.value === 'dijkstra') {
    clearPath()

    const path = dijkstra(graph.value)

    if (path.length === 0) {
      return toast({
        title: 'Error',
        description: 'No path found',
        variant: 'destructive'
      })
    }

    await visualizePathStatic(path, graph.value)
    return toast({
      description: `Run ${algorithm.value} algorithm`
    })
  }
}
</script>

<template>
  <section class="flex flex-col gap-4">
    <div class="flex gap-4">
      <ButtonTooltip :icon="Route" tooltipContent="Set Start" :handleClick="handleStart" />
      <ButtonTooltip :icon="RouteOff" tooltipContent="Set End" :handleClick="handleEnd" />
      <ButtonTooltip :icon="BrickWall" tooltipContent="Set Wall" :handleClick="handleWall" />
      <ButtonTooltip
        :icon="Shuffle"
        tooltipContent="Randomize Canvas"
        :handleClick="handleRandom"
      />
      <ButtonTooltip :icon="Play" tooltipContent="Run" :handleClick="handleRun" />
      <ButtonTooltip :icon="Eraser" tooltipContent="Clear Canvas" :handleClick="handleReset" />
    </div>
    <div>
      <Select v-model="algorithmSelect">
        <SelectTrigger>
          <SelectValue placeholder="Select an algorithm" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Algorithms</SelectLabel>
            <SelectItem value="a*"> A* Algorithm </SelectItem>
            <SelectItem value="dfs"> Dept-first Search </SelectItem>
            <SelectItem value="dijkstra"> Dijkstra's Algorithm </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </section>
</template>
