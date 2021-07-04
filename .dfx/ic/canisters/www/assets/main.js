const App = {
  data() {
    return {
      msg: "",
      name: "Johnathan",
    };
  },

  mounted() {
    this.msg = `I am ${this.name}`;
  },

  methods: {
    handleHover() {
      this.$refs.textContainer.classList.add("light");
    },

    handleLeave() {
      this.$refs.textContainer.classList.remove("light");
    },

    handleClick() {
      let payload = prompt("Please enter your name", "Name");
      this.name = payload;
      this.msg = `I am ${this.name}`;
    },
  },
};

Vue.createApp(App).mount("#app");
