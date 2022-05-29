<template>
    <div class="container">
    <div class="todo-list">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ITodo } from '@/types'

@Options({
  components: {
  },
  props: {
      todos: Array
  }
})
export default class ToDos extends Vue {
    todos!: ITodo[];
}
</script>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
</style>