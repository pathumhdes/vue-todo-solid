<template>
  <div>
    <Header listName="My To-Do List" />
    <main>
      <ToDos>
        <TodoRow v-for="todo in todos" :key="todo.id" :todo="todo" />
      </ToDos>
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { IApi, ITodo } from '@/types';
import Header from '@/components/Header.vue';
import ToDos from '@/components/ToDos.vue';
import TodoCard from '@/components/TodoCard.vue';
import TodoRow from '@/components/TodoRow.vue';
import { Api } from '@/api/api';

@Options({
  components: {
    Header, ToDos, TodoCard, TodoRow
  },
  props: {

  }
})
export default class Home extends Vue implements IApi {
  todos: ITodo[] = []
  async mounted() {
    this.todos = await this.fetch();
  }
  async fetch(): Promise<ITodo[]> {
    const api = new Api();
    return await api.fetch('todos');
  }
}
</script>

<style scoped lang="scss">
</style>
