<!-- eslint-disable vue/multi-word-component-names -->
<script setup="ts">
import { ref, watch } from 'vue'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { ButtonTooltip } from '@/components/ui/button-tooltip'
import { Eraser, Route, RouteOff, Play, BrickWall, Shuffle } from 'lucide-vue-next'
import { setStart, setEnd, setWall, isWall, algorithm, setAlgorithm } from '@/lib/utils/store'
import { clearEndNode, clearStartNode, clearGraph, graph, randomGraph } from '@/lib/utils/graph'
import { dfs, dijkstra, aStar } from '@/lib/algorithms'
import { useToast } from '@/components/ui/toast'

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

const handleRun = () => {
  if (algorithm.value === '') {
    return toast({
      title: 'Error',
      description: 'Please select an algorithm',
      variant: 'destructive'
    })
  }

  if (algorithm.value === 'a*') {
    //TODO: import a* algorithm
    // aStar(graph.value)
    return toast({
      description: `Run ${algorithm.value} algorithm`
    })
  }

  if (algorithm.value === 'dfs') {
    //TODO: import dfs algorithm
    // dfs(graph.value)
    return toast({
      description: `Run ${algorithm.value} algorithm`
    })
  }

  if (algorithm.value === 'dijkstra') {
    //TODO: import dijkstra algorithm
    // dijkstra(graph.value)
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
