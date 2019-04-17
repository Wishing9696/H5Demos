<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="l in links" :key="l.label" :to="l.link">{{l.label}} |</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { link } from "fs";
export default {
  data() {
    return {
      links: [
        { link: "/", label: "Home" },
        { link: "/about", label: "About" },
        { link: "/videodemo", label: "VideoDemo" },
        { link: "/dropdemo", label: "DropDemo" },
        { link: "/canvasdemo", label: "CanvasDemo" },
        { link: "/svgdemo", label: "SvgDemo" },
        { link: "/storagedemo", label: "StorageDemo" },
        { link: "/vueworkerdemo", label: "VueWorkerDemo" }
      ]
    };
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
