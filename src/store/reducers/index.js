const initState = { hover: { name: null, broad: null } };

const hover = (state = initState, action) => {
  switch (action.type) {
    case 'SET_HOVER':
      return { ...state, hover: action.hood };
    default:
      return state;
  }
};

export default hover;
