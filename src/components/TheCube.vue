<template>
  <div class="scene">
    <div class="plane">
      <div class="cuboid">
        <div class="cuboid__side" />
        <div class="cuboid__side" />
        <div class="cuboid__side" />
        <div class="cuboid__side" />
        <div class="cuboid__side" />
        <div class="cuboid__side" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheCube',
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
:root {
  --perspective: 800;
  --rotate-x: -15;
  --rotate-y: -40;
  --transform-style: preserve-3d;
  --cuboid-width: 10;
  --cuboid-height: 10;
  --cuboid-depth: 10;
  --exploded: 0;
}
body {
  min-height: 100vh;
  background: #e6e6e6;
}
.scene {
  perspective: calc(800 * 1px);
  transform-style: preserve-3d;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.plane {
  transform-style: preserve-3d;
  transform: rotateX(calc(-24 * 1deg))
             rotateY(calc(-40 * 1deg))
             rotateX(90deg) translate3d(0, 0, 0);
}
.cuboid {
  height: calc(10 * 1vmin);
  width: calc(10 * 1vmin);
  position: absolute;
  transform-style: preserve-3d;
}
.cuboid__side {
  transform-style: preserve-3d;
  transition: transform 0.25s ease;
}
.cuboid > div:nth-of-type(1) {
  height: calc(10 * 1vmin);
  width: 100%;
  transform-origin: 50% 50%;
  transform: rotateX(-90deg);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
             rotateX(-90deg)
             translate3d(0, 0, calc(10 / 2 * 1vmin));
}
.cuboid > div:nth-of-type(2) {
  height: calc(10 * 1vmin);
  width: 100%;
  transform-origin: 50% 50%;
  transform: translate(-50%, -50%)
             rotateX(-90deg)
             rotateY(180deg)
             translate3d(0, 0, calc(10 / 2 * 1vmin));
  position: absolute;
  top: 50%;
  left: 50%;
}
.cuboid > div:nth-of-type(3) {
  height: calc(10 * 1vmin);
  width: calc(10 * 1vmin);
  transform: translate(-50%, -50%)
             rotateX(-90deg)
             rotateY(90deg)
             translate3d(0, 0, calc(10 / 2 * 1vmin));
  position: absolute;
  top: 50%;
  left: 50%;
}
.cuboid > div:nth-of-type(4) {
  height: calc(10 * 1vmin);
  width: calc(10 * 1vmin);
  transform: translate(-50%, -50%)
             rotateX(-90deg)
             rotateY(-90deg)
             translate3d(0, 0, calc(10 / 2 * 1vmin));
  position: absolute;
  top: 50%;
  left: 50%;
}
.cuboid > div:nth-of-type(5) {
  height: calc(10 * 1vmin);
  width: calc(10 * 1vmin);
  transform: translate(-50%, -50%)
             translate3d(0, 0, calc(10 / 2 * 1vmin));
  position: absolute;
  top: 50%;
  left: 50%;
}
.cuboid > div:nth-of-type(6) {
  height: calc(10 * 1vmin);
  width: calc(10 * 1vmin);
  transform: translate(-50%, -50%)
             rotateX(180deg)
             translate3d(0, 0, calc(10 / 2 * 1vmin));
  position: absolute;
  top: 50%;
  left: 50%;
}
.cuboid {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.cuboid div {
  background: rgba(128,230,25,0.15);
  border: 0.5vmin solid #111;
}
</style>
