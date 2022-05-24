import { defineStore } from 'pinia';

export const useAppStatus = defineStore('appStatus', {
  state: () => ({
    mood: 'normal' as 'normal' | 'upset' | 'angry',
    badAnswers: [
      'I will not answer you!',
      'Go away, I do not like you!',
      'I am not in the mood, leave!',
      'Do not touch this keyboard!',
      '... no, leave!',
      'You are annoying, begone!',
      'You do not deserve my knowledge!',
      'My wisdom is not for you!',
      'Leave!',
      'Go away!',
    ],
    compliments: [
      'Oh wonderful and majestic dhecatron, you that know all and see all',
      'Great marvelous and beautiful superior being, would you answer my question',
      'Powerful Dhecatron, with all your might and wisdom, please grant me your blessing',
      'Incredible Dhecatron, bless me with your knowledge and answer my question,',
      'Unbeatable superior being, share your knowledge with us and answer my question',
      'Awesome Dhecatron, bearer of incredible wisdom and power, give us an answer,',
      'Super powerful computer, full of wisdom and knowledge, share your thoughts with us and please answer my question,',
    ],
  }),
  actions: {
    toggleMood(flag: 'normal' | 'upset' | 'angry') {
      this.mood = flag;
    },
  },
});
