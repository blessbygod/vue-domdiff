<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fl {
  width: 49.5%;
  border: 1px solid blue;
  float: left;
  height: 300px;
  text-align: center;
  font-size: 32px;
}
.cfl {
  width: 24.5%;
  border: 1px solid blue;
  float: left;
  height: 100px;
  text-align: center;
  font-size: 24px;
}
</style>
