<template>
  <div :class="['input-container', mood]">
    <div :class="['answer', 'show-vanish', showAnswer]">
      {{ answer }}
    </div>
    <input
      type="text"
      placeholder="Don't you dare..."
      :class="['input','show-vanish', showInput]"
      @keyup="theMagic"
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
    const { badAnswers }: ToRefs<{ badAnswers: string[] }> = storeToRefs(appStore);
    const inputElement = ref();
    const realText = ref('');
    const answer = ref('');
    const secretActivated = ref(false);
    const showInput = ref('show');
    const showAnswer = ref('hide');

    watch(realText, (newValue) => {
      appStore.toggleMood(newValue ? 'upset' : 'normal');
    });

    function askDhecatron() {
      if (!answer.value) {
        answer.value = badAnswers.value[Math.floor(Math.random() * badAnswers.value.length)];
      }
      showInput.value = 'hide';
      setTimeout(() => {
        inputElement.value.value = '';
        showAnswer.value = 'show';
        setTimeout(() => {
          showAnswer.value = 'hide';
          setTimeout(() => {
            showInput.value = 'show';
            answer.value = '';
            realText.value = '';
          }, 2000);
        }, 5000);
      }, 2000);
    }
    function theMagic(event: KeyboardEvent) {
      if (event.code === 'Enter') {
        askDhecatron();
        return;
      }
      if (event.code === 'ControlLeft') secretActivated.value = !secretActivated.value;
      if (!inputElement.value) inputElement.value = event.target as HTMLInputElement;
      if (secretActivated.value) {
        answer.value = inputElement.value.value;
      } else {
        realText.value = inputElement.value.value;
      }
    }
    return {
      mood,
      theMagic,
      answer,
      showInput,
      showAnswer,
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
  flex-wrap: wrap;
  justify-content: center;
}
.input {
  transition: all 2s ease;
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
.answer {
  position: absolute;
}
.show-vanish {
  transition: all 2s linear;
  &.show {
    opacity: 1;
  }
  &.hide {
    opacity: 0;
  }
}
</style>
