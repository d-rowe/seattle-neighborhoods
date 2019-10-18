const initState = { id: null, timestamp: null };

const selectedHood = (state = initState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_HOOD':
      return { id: action.id, timestamp: action.timestamp };
    default:
      return state;
  }
};

export default selectedHood;
