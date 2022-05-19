import { defineStore } from 'pinia';

export const useAppStatus = defineStore('appStatus', {
  state: () => ({
    mood: 'normal' as 'normal' | 'upset' | 'angry',
  }),
  actions: {
    toggleMood(flag: 'normal' | 'upset' | 'angry') {
      this.mood = flag;
    },
  },
});
