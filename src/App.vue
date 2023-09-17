<style scoped>
</style>
<template>
  <section id="mainPage">
    <header id="mainPage_header">
      <h1 class="logo">Жилфонд</h1>
      <p class="userName">Пользователь</p>
    </header>
    <div id="mainPage_mainBlock">
      <div id="mainPage_sideBur">
        <serchBlock />
        <showBlock />
      </div>
      <profileUser />
    </div>
  </section>
</template>

<script>
import serchBlock from "./components/serchBlock.vue";
import profileUser from "./components/profileUser.vue";
import showBlock from "./components/showBlock.vue";
export default {
  data() {
    return {
      users: [],
    };
  },
  components: {
    serchBlock,
    profileUser,
    showBlock,
  },
};
</script>