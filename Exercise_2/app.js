new Vue({
  el: "#exercise",
  data: {
    value: ""
  },
  methods: {
    showAlert: function() {
      alert("You've pressed the button :D");
    },
    storePressedKey: function() {
      this.value = event.target.value;
    }
  }
});
