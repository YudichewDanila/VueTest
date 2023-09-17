<template>
  <div id="mainPage_serchBlock">
    <h2 class="mainPage_text">Поиск сотрудников</h2>
    <form class="mainPage_search-form">
      <input v-model="serchText" placeholder="Введите id или имя" />
    </form>
  </div>
</template>

<script>
export default {
  name: "serchBlock",
  data() {
    return {
      serchText: "",
      lastCall: "",
      isLoading:false,
      timer: null,
      test:[],
    };
  },
  watch: {
    serchText: function () {
      this.debounce(()=>this.serchEnter(), 500);
    },
  },

  methods: {
    debounce(func, delay) {
      let previousCall = this.lastCall;
      this.lastCall = Date.now();
      if (previousCall && this.lastCall - previousCall <= delay) {
        clearTimeout(this.timer);
      }
     
      this.timer = setTimeout(() => {
        func();
      }, delay);
    },

    serchEnter() {
      this.$store.dispatch("getUser", this.serchText);
    },
  },
};
</script>