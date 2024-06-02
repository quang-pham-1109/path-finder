import { ref } from 'vue'

export const isStart = ref<boolean>(false)
export const setStart = (value: boolean) => {
  isStart.value = value
  isEnd.value = false
  isWall.value = false
}

export const isEnd = ref<boolean>(false)
export const setEnd = (value: boolean) => {
  isEnd.value = value
  isStart.value = false
  isWall.value = false
}

export const isWall = ref<boolean>(false)
export const setWall = (value: boolean) => {
  isWall.value = value
  isStart.value = false
  isEnd.value = false
}

export const algorithm = ref<string>('')
export const setAlgorithm = (value: string) => {
  algorithm.value = value
}
