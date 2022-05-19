<template>
  <div
    ref="cube"
    :class="['cube', mood]"
  >
    <div class="plane">
      <div class="cuboid">
        <div
          v-for="index in 6"
          :key="index"
          class="side"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAppStatus } from '@/store/useAppStatus';
import { storeToRefs } from 'pinia';
import { onMounted, ref, ToRefs } from 'vue';

export default {
  name: 'TheCube',
  setup() {
    const cube = ref(null);
    const appStore = useAppStatus();
    const { mood }: ToRefs<{ mood: 'normal' | 'upset' | 'angry' }> = storeToRefs(appStore);

    function rotateCube(): void {
      if (!cube.value) return;
      const cubeElement: HTMLElement = cube.value;
      const newX = Math.random() * (100 - (-100)) - 100;
      const newY = Math.random() * (100 - (-100)) - 100;
      cubeElement.style.setProperty('--rotate-x', `${newX}`);
      cubeElement.style.setProperty('--rotate-y', `${newY}`);
    }
    const rotateInterval = ref(setInterval(rotateCube, 2500));

    onMounted(async () => {
      setTimeout(rotateCube, 100);
    });

    return {
      mood,
      cube,
      rotateInterval,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.normal {
  --exploded: 2;
  --color: rgba(128,230,25,0.15);
}
.upset {
  --exploded: 1.5;
  --color: rgba(230, 192, 25, 0.15);
}
.angry {
  --exploded: 1;
  --color: rgba(230, 25, 25, 0.15);
}
.cube {
  --rotate-x: -24;
  --rotate-y: -40;

  perspective: calc(800 * 1px);
  transform-style: preserve-3d;
  height: 70vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.plane {
  transition: all 5s linear;
  transform-style: preserve-3d;
  transform: rotateX(calc(var(--rotate-x) * 1deg))
             rotateY(calc(var(--rotate-y) * 1deg))
             rotateX(90deg) translate3d(0, 0, 0);
}
.cuboid {
  height: calc(10 * 1vmin);
  width: calc(10 * 1vmin);
  position: absolute;
  transform-style: preserve-3d;
}
.side {
  transform-style: preserve-3d;
  transition: all 1s ease;
}
.cuboid > div:nth-of-type(1) {
  height: calc(10 * 1vmin);
  width: 100%;
  transform-origin: 50% 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
             rotateX(-90deg)
             translate3d(0, 0, calc(10 / var(--exploded) * 1vmin));
}
.cuboid > div:nth-of-type(2) {
  height: calc(10 * 1vmin);
  width: 100%;
  transform-origin: 50% 50%;
  transform: translate(-50%, -50%)
             rotateX(-90deg)
             rotateY(180deg)
             translate3d(0, 0, calc(10 / var(--exploded) * 1vmin));
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
             translate3d(0, 0, calc(10 / var(--exploded) * 1vmin));
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
             translate3d(0, 0, calc(10 / var(--exploded) * 1vmin));
  position: absolute;
  top: 50%;
  left: 50%;
}
.cuboid > div:nth-of-type(5) {
  height: calc(10 * 1vmin);
  width: calc(10 * 1vmin);
  transform: translate(-50%, -50%)
             translate3d(0, 0, calc(10 / var(--exploded) * 1vmin));
  position: absolute;
  top: 50%;
  left: 50%;
}
.cuboid > div:nth-of-type(6) {
  height: calc(10 * 1vmin);
  width: calc(10 * 1vmin);
  transform: translate(-50%, -50%)
             rotateX(180deg)
             translate3d(0, 0, calc(10 / var(--exploded) * 1vmin));
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
  background: var(--color);
  border: 0.5vmin solid #111;
}
</style>
