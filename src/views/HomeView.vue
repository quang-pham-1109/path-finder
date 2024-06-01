<script setup lang="ts">
import { NodeGrid } from '@/components/shared/node-grid'
import { Setting } from '@/components/shared/setting'
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-center text-3xl font-bold">Path Finding Visualizer</h1>
    <section>
      <Setting class="mt-6" />
    </section>
    <section>
      <NodeGrid class="mt-10" />
    </section>
  </div>
</template>
