<template>
  <div id="dropdemo">
    <div id="div1" @drop="drop" @dragover="dragover">
      <div v-if="droppedItem !== ''"></div>
    </div>
    <img
      id="drag1"
      draggable="true"
      src="../assets/logo.png"
      @dragstart="dragstart"
      @dragend="dragend"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {
    dragstart(ev) {
      ev.dataTransfer.setData("Text", ev.target.id);
    },
    drop(ev) {
      let data = ev.dataTransfer.getData("Text");
      ev.target.appendChild(document.getElementById(data));
      //this.droppedItem = document.getElementById(data);
    },
    dragover(ev) {
      //我们必须阻止某一 DOM 元素对 dragover 的默认行为，才能使 drop 事件在其上正确执行
      //或者简写为@dragover.prevent
      ev.preventDefault();
    },
    dragend(ev) {
      ev.dataTransfer.clearData();
    }
  }
};
</script>

<style>
#div1 {
  width: 600px;
  height: 300px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
</style>
