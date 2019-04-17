<template>
  <div id="videodemo">
    <video :src="src" height="500px" controls="controls"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
       src: require('../assets/videodemo/a.ogg')
    };
  }
};
</script>
