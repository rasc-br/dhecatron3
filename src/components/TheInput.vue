<template>
  <div :class="['input-container', mood]">
    <div :class="['answer', 'show-vanish', showAnswer]">
      {{ answer }}
    </div>
    <input
      type="text"
      placeholder="Don't you dare..."
      :class="['input','show-vanish', showInput]"
      @keydown="checkInput"
      @keyup="deliverInput"
      @click="goToEnd"
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
    const { compliments }: ToRefs<{ compliments: string[] }> = storeToRefs(appStore);
    const compliment = ref('');
    const inputElement = ref();
    const inputText = ref('');
    const answer = ref('');
    const secretActivated = ref(false);
    const showInput = ref('show');
    const showAnswer = ref('hide');

    watch(inputText, (newValue) => {
      appStore.toggleMood(newValue ? 'upset' : 'normal');
    });

    function askDhecatron() {
      appStore.toggleMood('angry');
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
            inputText.value = '';
            compliment.value = '';
          }, 2000);
        }, 5000);
      }, 2000);
    }

    function checkInput(event: KeyboardEvent) {
      event.preventDefault();
      if (!inputElement.value) inputElement.value = event.target as HTMLInputElement;
      if (!compliment.value) {
        compliment.value = compliments.value[Math.floor(Math.random() * compliments.value.length)];
      }
      if (event.code === 'Enter') {
        askDhecatron();
        return;
      }
      if (event.code === 'ControlLeft') secretActivated.value = !secretActivated.value;
      if (event.code.includes('Arrow') || event.code.includes('Delete')) {
        return;
      }
      if (secretActivated.value) {
        if (event.code === 'Backspace') {
          answer.value = answer.value.slice(0, -1);
          inputText.value = inputText.value.slice(0, -1);
          return;
        }
        if (event.key.length === 1) {
          answer.value = `${answer.value}${event.key}`;
          inputText.value = `${inputText.value}${compliment.value[inputText.value.length]}`;
        }
      } else {
        if (event.code === 'Backspace') {
          inputText.value = inputText.value.slice(0, -1);
          return;
        }
        if (event.key.length === 1) {
          inputText.value = `${inputText.value}${event.key}`;
        }
      }
    }

    function goToEnd(event: Event) {
      const element = event.target as HTMLInputElement;
      element.setSelectionRange(element.value.length, element.value.length);
    }
    function deliverInput(event: KeyboardEvent) {
      event.preventDefault();
      inputElement.value.value = inputText.value;
    }

    return {
      mood,
      answer,
      showInput,
      showAnswer,
      secretActivated,
      checkInput,
      deliverInput,
      goToEnd,
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
