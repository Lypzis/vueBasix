new Vue({
  el: "#exercise",
  data: {
    value: 0
  },
  computed: {
    result() {
      return this.value < 37
        ? "Not there yet :D"
        : "Done, now that is too much, stooooop! D:";
    }
  },
  watch: {
    result(value) {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    }
  }
});
