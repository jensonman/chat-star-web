<template>
  <a-menu id="side-menu">
    <a-menu-item v-for="menuItem in menuList" :key="menuItem.id">
      <!-- <span>
          {{ menuItem.value }}
        </span>
        <slot></slot> -->
      <span class="nav-text">nav 1</span>

    </a-menu-item>
    <slot name="footer"></slot>
  </a-menu>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  components: {

  },
  props: {
    /**
     * [{id, value}]
     */
    menuList: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      default: "dark"
    }
  },
  setup() {

    return {

    }
  }
})
</script>

<style lang="less">
#side-menu.ant-menu {
  color: aliceblue;
  background-color: #202123;
  border: none;

  .ant-menu-item {
    color: aliceblue;
    background-color: #202123;
  }

  .ant-menu-item:hover {
    color: inherit;
    background-color: #363636;
  };

  .ant-menu-item-selected {
    background-color: rgba(52, 53, 65, 1);
  }
}</style>