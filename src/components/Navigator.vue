<template>
  <nav>
    <router-link
      tag="div"
      :to="{ name: 'main' }"
      class="navigation"
      :class="{ 'navigation-active': currentView == 'main' }"
    >
      <img class="navigation-icon" src="~@/assets/images/icons/main.png" />
      <p>{{ $t("Home") }}</p>
    </router-link>
    <router-link
      tag="div"
      :to="{ name: 'promotion' }"
      class="navigation"
      :class="{ 'navigation-active': currentView == 'promotion' }"
    >
      <img class="navigation-icon" src="~@/assets/images/icons/coupon.png" />
      <p>{{ $t("Promotion") }}</p>
    </router-link>
    <div class="navigation navigation-logo" @click.prevent="openFinacialCenter">
      <img src="~@/assets/images/icons/mainLogo.png" />
    </div>

    <!-- <a
      @click="$toast('no service...')"
      class="navigation"
    >
      <img class="navigation-icon" src="~@/assets/images/icons/service.png" />
      <p>{{ $t("Service") }}</p>
    </a> -->

    <router-link
      tag="div"
      :to="{ name: 'CustomerService' }"
      class="navigation"
      :class="{ 'navigation-active': currentView == 'CustomerService' }"
    >
      <img class="navigation-icon" src="~@/assets/images/icons/service.png" />
      <p>{{ $t("Service") }}</p>
    </router-link>

    <router-link
      tag="div"
      :to="{ name: 'center' }"
      class="navigation"
      :class="{ 'navigation-active': currentView == 'center','notice':unreadMessage>0}"
    >
      <img class="navigation-icon" src="~@/assets/images/icons/personal.png" />
      <p>{{ $t("My_Info") }}</p>
    </router-link>
  </nav>
</template>
<script>
export default {
  props: ["unreadMessage"],
  data() {
    return {
      finacialCenter: false,
      currentView: ""
    };
  },
  mounted() {
    this.currentView = this.$route.name;
  },
  methods: {
    openFinacialCenter() {
      this.$emit("openFinacialCenter", true);
    }
  },
  watch: {
    $route(val) {
      this.currentView = val.name;
    }
  }
};
</script>

<style lang="scss">
nav {
  position: fixed;
  width: 100%;
  height: rem(121);
  background-color: #14141a;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  font-size: rem(20);
  line-height: rem(20);
  z-index: 999;
}
.navigation {
  text-align: center;
  width: rem(111);
  height: 100%;
  padding: 0 rem(20);
  line-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.notice {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      display: block;
      right: rem(50);
      top: rem(20);
      width: rem(20);
      height: rem(20);
      border-radius: rem(10);
      background-color: red;
      z-index: 999;
    }
  }
  &-icon {
    height: 35%;
    transition: 0.1s;
  }

  p {
    color: #576678;
    padding-top: 5px;
    transition: 0.1s;
    white-space: nowrap;
  }
  &-logo {
    width: rem(121);
    box-sizing: border-box;
    background-color: #3ec1fe;
    border-radius: 50%;
    transition: transform 0.2s;
    &:active {
      transform: scale(0.9);
    }
    img {
      height: 100%;
    }
  }
  &:active,
  &-active {
    .navigation-icon {
      filter: invert(8%) sepia(73%) saturate(3133%) hue-rotate(20deg)
        brightness(151%) contrast(71%);
    }
    p {
      color: #d8a925;
    }
  }
}
</style>
