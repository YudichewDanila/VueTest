<style lang="scss">
.infoPage {
  display: flex;
  flex-wrap: wrap;
  padding-top: 3%;
  justify-content: space-around;
  align-items: center;
  margin-left: 5%;

  img {
    max-width: 100%;
    max-height: 286px;
  }
}

.infoBlock_userInfoText {
  h2 {
    width: 90%;
    height: 19px;
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  p {
    width: 90%;
    height: 21px;
    color: #76787d;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    b {
      color: #333;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
  }
  h3 {
    max-width: 439px;
    color: #76787d;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.infoBlock {
  width: 50%;
  margin: 20% auto;
}
.infoBlock_infoText {
  color: #76787d;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 20%;
}
@media screen and (max-width: 769px) {
  .infoBlock {
    width: 90%;
    margin: 10% 20%;
  }
}
</style>
<template>
  <div id="mainPage_profileUser">
    <div v-if="Object.keys(userProfile).length != 0" class="infoPage">
      <img src="/public/img/noPhoto.png" />
      <div class="infoBlock_userInfoText">
        <h2>{{ userProfile.name }}</h2>
        <p><b>email:</b> {{ userProfile.email }}</p>
        <p><b>phone:</b> {{ userProfile.phone }}</p>
        <h2>О себе:</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h3>
      </div>
    </div>
    <div v-else class="infoBlock">
      <p class="infoBlock_infoText">
        Выберите сотрудника, чтобы посмотреть его профиль
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "profileUser",
  data(){
    return{
      userProfile:{},
    }
  },
  computed: {
    getPageContend() {
      return this.$store.getters.getPageContend;
    },
  },

  watch: {
    getPageContend() {
        this.userProfile = this.$store.getters.getPageContend;
    },
  
  },
};
</script>
