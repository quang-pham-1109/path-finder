<!-- eslint-disable vue/multi-word-component-names -->
<script setup="ts">
import { Button } from '@/components/ui/button'
import { ref, watch } from 'vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Eraser, Route, RouteOff, Play, BrickWall } from 'lucide-vue-next'
import { setStart, setEnd, setWall, isWall, algorithm, setAlgorithm } from '@/lib/utils/store'
import { clearEndNode, clearStartNode, clearGraph, graph } from '@/lib/utils/graph'
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
    // aStar(graph)
    return toast({
      description: `Run ${algorithm.value} algorithm`
    })
  }

  if (algorithm.value === 'dfs') {
    //TODO: import dfs algorithm
    // dfs(graph)
    return toast({
      description: `Run ${algorithm.value} algorithm`
    })
  }

  if (algorithm.value === 'dijkstra') {
    //TODO: import dijkstra algorithm
    // dijkstra(graph)
    return toast({
      description: `Run ${algorithm.value} algorithm`
    })
  }
}
</script>

<template>
  <section class="flex flex-col gap-4">
    <div class="flex gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="icon" @click="handleStart">
              <Route />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Set Start</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="icon" @click="handleEnd">
              <RouteOff />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Set End</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="icon" @click="handleWall">
              <BrickWall />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Set Wall</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="icon" @click="handleRun">
              <Play />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Run</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="icon" @click="handleReset">
              <Eraser />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Clear Canvas</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
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
