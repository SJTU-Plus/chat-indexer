<template>
  <div id="app" class="fill">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
.fill { 
    min-height: 100vh;
    height: 100vh;
}
</style>
