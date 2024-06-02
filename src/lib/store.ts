import { ref } from 'vue'

export const isStart = ref<boolean>(false)
export const setStart = (value: boolean) => {
  isStart.value = value
  isEnd.value = !value
  isWall.value = !value
}

export const isEnd = ref<boolean>(false)
export const setEnd = (value: boolean) => {
  isEnd.value = value
  isStart.value = !value
  isWall.value = !value
}

export const isWall = ref<boolean>(false)
export const setWall = (value: boolean) => {
  isWall.value = value
  isStart.value = !value
  isEnd.value = !value
}
