<script setup="ts">
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

defineProps({
  icon: { type: Object, required: true },
  tooltipContent: { type: String, required: true },
  handleClick: { type: Function, required: false }
})
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <Button size="icon" @click="handleClick">
          <component :is="icon" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {{ tooltipContent }}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
