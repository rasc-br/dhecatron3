import { defineStore } from 'pinia';

export const useAppStatus = defineStore('appStatus', {
  state: () => ({
    angry: true,
  }),
  actions: {
    toggleAngryMode(flag: boolean) {
      this.angry = flag;
    },
  },
});
