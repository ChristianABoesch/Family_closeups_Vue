var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  },
  methods: {
    playSound1() {
      let url = "media/C_marimba.wav";
      let sound = new Audio(url);
      sound.play();
    },
    playSound2() {
      let url = "media/E_marimba.wav";
      let sound = new Audio(url);
      sound.play();
    },
    playSound3() {
      let url = "media/G_marimba.wav";
      let sound = new Audio(url);
      sound.play();
    },
    playSound4() {
      let url = "media/HigherC_marimba.wav";
      let sound = new Audio(url);
      sound.play();
    }
  }
});
