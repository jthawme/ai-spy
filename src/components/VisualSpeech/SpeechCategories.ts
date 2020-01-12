const randomSentence = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const CATEGORIES = {
  INTRO: (word: string) =>
    `I Spy, with my little eye, something beginning with, ${word.charAt(0)}`,
  SUCCESS: () => {
    return randomSentence([
      "You got it! Good guessing",
      "Good one! That was it",
    ]);
  },
  INCORRECT: () => {
    return randomSentence([
      "Thats not it champ! Try again",
      "Nope sorry, the first letter was correct though",
    ]);
  },
  IDLE: () => {
    return randomSentence(["Keep at it!", "Remember to use the hints"]);
  },
};

export default CATEGORIES;
