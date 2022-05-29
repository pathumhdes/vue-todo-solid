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
import { Api } from '@/api';
import Header from '@/components/Header.vue';
import ToDos from '@/components/ToDos.vue';
import TodoCard from '@/components/TodoCard.vue';

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
    const api = new Api('todos')
    return await api.fetch()
  }
}
</script>

<style scoped lang="scss">
</style>
