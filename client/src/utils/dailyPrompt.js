export const prompts = [
  "What's one thing you're genuinely proud of yourself for today?",
  "What made you smile today?",
  "What challenged you the most today?",
  "What emotion stayed with you throughout the day?",
  "What's something you learned about yourself today?",
  "What are you grateful for right now?",
  "What's one small win you had today?",
  "How did you take care of yourself today?",
  "What's something you want to let go of today?",
  "What gave you energy today?",
  "What drained your energy today?",
  "If today had a theme, what would it be?",
  "What would you tell your younger self today?",
  "What's one thing you wish more people understood about you?",
  "What are you looking forward to tomorrow?",
];

export const getDailyPrompt = () => {
  const today = new Date();

  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) /
      (1000 * 60 * 60 * 24)
  );

  return prompts[dayOfYear % prompts.length];
};