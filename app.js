const { createApp } = Vue;

createApp({
  data() {
    return {
      msg: "Vue project initialization.",
      link: "https://vuejs.org/guide/quick-start.html#using-vue-from-cdn",
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
}).mount("#app");
