<script setup>
import { ref } from 'vue'
import { toValue } from '../index'
const foo = ref('hi')

const a = toValue(0) // 传入一个number
const b = toValue(foo) // 传入一个ref
const c = toValue(() => 'hi') // 传入一个func
console.log('a', a)
console.log('b', b)
console.log('c', c)
</script>

<template>
  <div>123</div>
</template>
