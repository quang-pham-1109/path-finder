<!-- eslint-disable vue/multi-word-component-names -->
<script setup="ts">
import { Button } from '@/components/ui/button'
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
import { setStart, setEnd, setWall } from '@/lib/store'
import { clearEndNode, clearStartNode } from '@/lib/graph'
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
  setWall(true)
  return toast({
    title: 'Wall Node',
    description: 'Click on the grid to draw the wall node'
  })

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
            <Button size="icon">
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
            <Button size="icon">
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
            <Button size="icon">
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
            <Button size="icon">
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
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an algorithm" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Algorithms</SelectLabel>
            <SelectItem value="bfs"> Breath-first Search </SelectItem>
            <SelectItem value="dfs"> Dept-first Search </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </section>
</template>
