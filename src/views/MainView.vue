<template>
  <TheSphere />
  <TheCube />
  <TheInput />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheCube from '@/components/TheCube.vue';
import TheSphere from '@/components/TheSphere.vue';
import TheInput from '@/components/TheInput.vue';

export default defineComponent({
  name: 'MainView',
  components: {
    TheCube,
    TheInput,
    TheSphere,
  },
});
</script>

<style scoped>

</style>
