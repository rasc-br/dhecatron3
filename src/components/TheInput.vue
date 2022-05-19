<template>
  <div :class="['input-container', mood]">
    <input
      v-model="question"
      type="text"
      placeholder="Don't you dare..."
      class="input"
    >
  </div>
</template>

<script lang="ts">
import { useAppStatus } from '@/store/useAppStatus';
import { storeToRefs } from 'pinia';
import { ref, ToRefs, watch } from 'vue';

export default {
  name: 'TheInput',
  setup() {
    const appStore = useAppStatus();
    const { mood }: ToRefs<{ mood: 'normal' | 'upset' | 'angry' }> = storeToRefs(appStore);
    const question = ref('');

    watch(question, (newValue) => {
      appStore.toggleMood(newValue ? 'upset' : 'normal');
    });

    return {
      mood,
      question,
    };
  },
};
</script>

<style lang="scss" scoped>
.normal {
  --color: rgba(128,230,25,0.15);
}
.upset {
  --color: rgba(230, 192, 25, 0.15);
}
.angry {
  --color: rgba(230, 25, 25, 0.15);
}
.input-container {
  display: flex;
  justify-content: center;
}
.input {
  width: 80%;
  border: 0;
  border-bottom: 1px solid var(--color);
  font-family: inherit;
  padding: 0;
  height: 50px;
  font-size: 16px;
  background: none;
  color: rgb(207, 206, 206);

  &:focus {
    outline: none;
  }
}
</style>
