<template>
    <header class="header">
    <nav class="header-nav" />
    <div class="container">
      <h1>{{ listName }}</h1>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
  props: {
    listName: String
  }
})
export default class Header extends Vue {
    listName!: string
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  &-nav {
    background: teal;
    width: 100%;
    height: 56px;
  }
}
</style>