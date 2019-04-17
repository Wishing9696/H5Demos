<template>
  <div id="localstoragedemo">
    <span>localStorage:</span>
    <div id="localstorage"></div>
    <p>localstorage实现统计访问数量:{{visits1}}</p>

    <span>sessionStorage:</span>
    <div id="sessionstorage"></div>
    <p>sessionstorage实现统计访问数量:{{visits2}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visits1: "",
      visits2: ""
    };
  },
  methods: {
    addlocalstorage() {
      // Check browser support
      console.log("localstorage");

      if (typeof Storage !== "undefined") {
        // Store
        localStorage.setItem("lastname", "Gates");

        console.log(localStorage);
        // Retrieve
        document.getElementById(
          "localstorage"
        ).innerHTML = localStorage.getItem("lastname");
      } else {
        document.getElementById("result").innerHTML =
          "抱歉！您的浏览器不支持 Web Storage ...";
      }
    },
    localStoragevisits() {
      if (localStorage.pagecount) {
        localStorage.pagecount = Number(localStorage.pagecount) + 1;
      } else {
        localStorage.pagecount = 1;
      }
      this.visits1 = "Visits: " + localStorage.pagecount + " time(s).";
    },
    sessionDtoragevisits() {
      if (sessionStorage.pagecount) {
        sessionStorage.pagecount = Number(sessionStorage.pagecount) + 1;
      } else {
        sessionStorage.pagecount = 1;
      }
      console.log(sessionStorage)
      this.visits2 =
        "Visits " + sessionStorage.pagecount + " time(s) this session.";
    }
  },
  mounted() {
    this.addlocalstorage();
    this.localStoragevisits();
    this.sessionDtoragevisits();
  }
};
</script>

