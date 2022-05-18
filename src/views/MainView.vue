<template>
  <TheCube />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheCube from '@/components/TheCube.vue';

export default defineComponent({
  name: 'MainView',
  components: {
    TheCube,
  },
});
</script>

<style scoped>

</style>
