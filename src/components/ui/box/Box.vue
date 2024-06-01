<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps({
  variant: { type: String, required: true }
})

const { variant } = toRefs(props)

const handleClick = () => {
  console.log(variant.value)
  console.log('clicked')
}
</script>

<template>
  <div class="h-4 w-4 ring-offset-background border shrink-0" @click="handleClick" />
  <!-- <CheckboxRoot
    v-bind="forwarded"
    :class="
      cn(
        'peer h-4 w-4 shrink-0 border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        props.class
      )
    "
  >
  </CheckboxRoot> -->
</template>
``
