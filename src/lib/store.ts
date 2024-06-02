import { ref } from 'vue'

export const isStart = ref<boolean>(false)
export const setStart = (value: boolean) => {
  isStart.value = value
  isEnd.value = false
  isWall.value = false
  console.log('isStart', isStart.value)
  console.log('isEnd', isEnd.value)
  console.log('isWall', isWall.value)
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
