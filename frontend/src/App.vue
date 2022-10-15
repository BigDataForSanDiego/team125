<template>
  <div class="w-100 h-100 position-absolute" style="z-index: -1" id="particles-js" />
  <router-view />
</template>

<script>
import "particles.js";

export default {
  name: "App",
  mounted: function () {
    particlesJS("particles-js", {
      retina_detect: true,
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#00ff00", "ff0000"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#00ff00",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.2,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 10,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
    });
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}

@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-icons/font/bootstrap-icons.css";
</style>
