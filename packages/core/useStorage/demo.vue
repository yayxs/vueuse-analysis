<script setup>
import {} from './index'
const theDefault = {
  name: 'default.name'
}
const state = useStorage('vue-use-local-storage', theDefault, localStorage)
</script>

<template>
  <div>
    <input type="text" v-model="state.name" />
  </div>
</template>
