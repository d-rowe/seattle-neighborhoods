export const setSelectedHood = id => ({
  type: 'SET_SELECTED_HOOD',
  id,
  timestamp: Date.now()
});

export const setQuestionIds = ids => ({
  type: 'SET_QUESTION_IDS',
  ids
});
