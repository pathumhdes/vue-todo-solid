<template>
    <div class="todo-list__row">
        <span>{{ todo.id }}: </span>
        <span :class="{ 'todo-list__row--completed': todo.completed }">
          {{ todo.title }}
        </span>
      </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ITodo } from '@/types'

@Options({
  components: {
  },
  props: {
      todo: Object
  }
})
export default class ToDoRow extends Vue {
    todo!: ITodo;
}
</script>

<style lang="scss" scoped>
.todo-list {
  &__row {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5%;
    text-align: left;
    font-weight: 600;
    color: #041e66;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
    &--completed {
      text-decoration: line-through;
      color: #4e0503;
    }
  }
}
</style>