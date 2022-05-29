<template>
  <div>
    <Header listName="My To-Do List" />
    <main>
      <ToDoCards :todos="todos" />
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ITodo } from '@/types';
import { Api } from '@/api'
import Header from '@/components/Header.vue'
import ToDoCards from '@/components/ToDoCards.vue'

@Options({
  components: {
    Header, ToDoCards
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
