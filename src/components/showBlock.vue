<template>
  <div id="mainPage_showBlock">
    <h2 class="mainPage_text">Результаты</h2>
    <div v-show="isLoading">
        <div class="loader">loading</div>
    </div>
    <div  v-show="!isLoading">
      <p v-if="users.length == 0 && !BoolSerch">начните поиск</p>
      <p v-else-if="users.length === 0 && BoolSerch">ничего не найдено</p>
      <p v-else-if="users[0].erorText">{{ users[0].erorText }}</p>
      <div  id="mainPage_items" v-else>
        <div :class="{'mainPage_item_active': isActive === user.id}"  v-on:click="addPageContent(user)" v-for="(user) in users" :key="user.id" class="mainPage_item">
          <div class="mainPage_image">
            <img src="/public/img/noPhoto.png" />
          </div>
          <div class="mainPage_itemText">
            <h2>{{ user.name }}</h2>
            <p>{{ user.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "showBlock",
  data() {
    return {
      users: [],
      BoolSerch: false,
      isActive: null,
      isLoading:  this.$store.getters.getLoading,
    };
  },

  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    },
    getLoading() {
      return this.$store.getters.getLoading;
    },
  },

  watch: {
    getLoading() {
        this.isLoading = this.$store.getters.getLoading;
    },
    getUsers() {
      this.BoolSerch = true;
      this.users = this.$store.getters.getUsers;
    },
  },
  methods: {
    addPageContent(item){
      this.isActive = item.id;
      this.$store.dispatch("addPageContend", item);
    }
  }
};
</script>
