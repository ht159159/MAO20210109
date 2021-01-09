<template>
  <header class="header-cmp">
    <slot name="back">
      <a href="#" class="back" @click.prevent="$router.back(-1)">
        <img src="~@/assets/images/icons/back.png" v-if="isBack" />
      </a>
    </slot>
    <h1 class="title">{{ title }}</h1>
    <div class="space">
      <slot name="btn"></slot>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    isBack: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
$back-icon-padding: 10;
.header-cmp {
  position: sticky;
  z-index: 99;
  top: 0;
  left: 0;
  padding: 0 rem(40-$back-icon-padding);
  padding-top: rem(60-$back-icon-padding);
  padding-bottom: rem(18-$back-icon-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $bg-dark;
  a {
    height: rem(39);
    padding: rem($back-icon-padding);
    img {
      display: block;
      height: 100%;
    }
  }
  .title {
    color: $light;
    font-weight: 500;
    font-size: rem(34);
  }
  .space {
    .records {
      font-size: rem(32);
    }
    .icon {
      width: rem(31);
      height: rem(31);
      padding: 0 rem(10);
      display: block;
      &-write {
        background-image: url("~@/assets/images/icons/write.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: rem(31);
      }
    }
  }
}
</style>
