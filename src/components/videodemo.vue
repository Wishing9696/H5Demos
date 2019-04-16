<template>
  <div id="videodemo">
    <video :src="src" height="500px" controls="controls"></video>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";

import { videoPlayer } from "vue-video-player";

export default {
  components: {
    videoPlayer
  },
  data() {
    return {
       src: require('../assets/videodemo/a.ogg')
    };
  }
};
</script>
