<template>
  <div>
    <Header listName="My To-Do List" />
    <main>
      <ToDos>
        <TodoCard v-for="todo in todos" :key="todo.id" :todo="todo" />
      </ToDos>
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ITodo } from '@/types';
import Header from '@/components/Header.vue';
import ToDos from '@/components/ToDos.vue';
import TodoCard from '@/components/TodoCard.vue';
import { Api } from '@/api/api';

@Options({
  components: {
    Header, ToDos, TodoCard
  },
  props: {
    
  }
})
export default class Home extends Vue {
  todos: ITodo[] = []
  async mounted() {
    this.todos = await this.fetchTodos();
  }
  async fetchTodos(): Promise<ITodo[]> {
    const api = new Api();
    return await api.fetch('todos');
  }
}
</script>

<style scoped lang="scss">
</style>
