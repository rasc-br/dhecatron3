<template>
  <div
    ref="sphere"
    :class="['sphere-container', mood]"
  >
    <div
      v-for="index in 15"
      :key="index"
      class="circle border"
    />
  </div>
</template>

<script lang="ts">
import { useAppStatus } from '@/store/useAppStatus';
import { storeToRefs } from 'pinia';
import { ref, ToRefs } from 'vue';

export default {
  name: 'TheSphere',
  setup() {
    const sphere = ref(null);
    const appStore = useAppStatus();
    const { mood }: ToRefs<{ mood: 'normal' | 'upset' | 'angry' }> = storeToRefs(appStore);

    return {
      mood,
      sphere,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.normal {
  --timing: 20;
  --size: 40;
}
.upset {
  --timing: 2;
  --size: 60;
}
.angry {
  --timing: 0.5;
  --size: 80;
}

@keyframes animateSphere {
  0% { transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg); }
  50% { transform: rotateY(360deg) rotateX(360deg) rotateZ(0deg); }
  100% { transform: rotateY(720deg) rotateX(720deg) rotateZ(360deg); }
}

.sphere-container {
  --colorStart: #f35626;
  --colorEnd: #feab3a;

  position: absolute;
  transition: all 0.5s linear;
  width: calc(var(--size) * 1px);
  height: calc(var(--size) * 1px);
  top: calc(35% - var(--size) / 2 * 1px);
  left: calc(50% - (var(--size) / 2) * 1px);
  transform-style: preserve-3d;
  animation-name: animateSphere;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.border {
  border: 1px solid rgb(138, 137, 137);
}
.circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: hue  calc(var(--timing) * 1s) infinite linear;
  background-image: linear-gradient(92deg, var(--colorStart),var(--colorEnd));
}
/* X Axis */
.circle:nth-child(1) {transform: rotate3d(1, 0, 0, 0deg);}
.circle:nth-child(2) {transform: rotate3d(1, 0, 0, 36deg);}
.circle:nth-child(3) {transform: rotate3d(1, 0, 0, 72deg);}
.circle:nth-child(4) {transform: rotate3d(1, 0, 0, 108deg);}
.circle:nth-child(5) {transform: rotate3d(1, 0, 0, 144deg);}
/* Y Axis */
.circle:nth-child(6) {transform: rotate3d(0, 1, 0, 0deg);}
.circle:nth-child(7) {transform: rotate3d(0, 1, 0, 36deg);}
.circle:nth-child(8) {transform: rotate3d(0, 1, 0, 72deg);}
.circle:nth-child(9) {transform: rotate3d(0, 1, 0, 108deg);}
.circle:nth-child(10) {transform: rotate3d(0, 1,0, 144deg);}
/* Z Axis */
.circle:nth-child(11) {transform: rotate3d(0, 1, 0, 90deg) rotate3d(1, 0, 0, 0deg);}
.circle:nth-child(12) {transform: rotate3d(0, 1, 0, 90deg) rotate3d(1, 0, 0, 36deg);}
.circle:nth-child(13) {transform: rotate3d(0, 1, 0, 90deg) rotate3d(1, 0, 0, 72deg);}
.circle:nth-child(14) {transform: rotate3d(0, 1, 0, 90deg) rotate3d(1, 0, 0, 108deg);}
.circle:nth-child(15) {transform: rotate3d(0, 1, 0, 90deg) rotate3d(1, 0, 0, 144deg);}

@keyframes hue {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
</style>
