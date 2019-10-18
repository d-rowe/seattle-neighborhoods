const initState = { hoods_id: null, l_hood_id: null };

const selectedHood = (state = initState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_HOOD':
      return action.selected;
    default:
      return state;
  }
};

export default selectedHood;
