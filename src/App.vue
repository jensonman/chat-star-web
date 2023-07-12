<template>
  <router-view></router-view>
  <!-- <LayoutView></LayoutView> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LayoutView from './views/layoutView';
export default {
  name: 'App',
  components: {
    // LayoutView
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: rgba(68,70,84,1);
}
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
