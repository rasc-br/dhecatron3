import { defineStore } from 'pinia';

export const useAppStatus = defineStore('appStatus', {
  state: () => ({
    mood: 'normal' as 'normal' | 'upset' | 'angry',
    badAnswers: [
      'I will not answer you!',
      'Go away, I do not like you!',
      'I am not in the mood, leave!',
    ],
    complements: [
      'Oh wonderful and majestic dhecatron, you that know all and see all',
      'Great marvelous and beautiful superior being, would you answer my question',
      'Powerful dhecatron, with all your might and wisdom, please grant me your blessing',
    ],
  }),
  actions: {
    toggleMood(flag: 'normal' | 'upset' | 'angry') {
      this.mood = flag;
    },
  },
});
