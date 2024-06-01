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
</script>

<template>
  <section class="flex flex-col gap-4">
    <div class="flex gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="icon">
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
