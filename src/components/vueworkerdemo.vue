<template>
  <div id="vueworker"></div>
</template>

<script>
export default {
  data() {
    return {
      worker: null
    };
  },
  methods: {
    working() {
      // 通过this.$worker.run这个方法，跑起一个worker，
      // worker是在另外的线程里面跑的，所以可以在run的第一个参数函数里面执行一个非常大计算的操作
      // run方法像Promise一样提供.then和.catch，then的参数就是run第一个参数函数的返回值
      this.worker = this.$worker
        .run(n => n + 10, [2])
        .then(res => console.log(res))
        .catch(e => console.log(e));
    }
  },
  mounted() {
    this.working();
  },
  destroyed() {
    // 通过赋值null的方式，释放掉worker引用，这样就可以关闭worker，这是作者在github上说的
    this.worker = null;
  }
};
</script>

<style>
</style>
