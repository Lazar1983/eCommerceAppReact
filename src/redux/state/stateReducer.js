import { select_state } from './stateName';

const initialState = {
  states: ["Ohio", "Utah", "Texas", "Michighan"]
}

const stateReducer = (state = initialState, action) => {
  switch(action.type) {
    case select_state: return {
      ...state,
      states: state.states[1]
    }
    default: return state

  }
}

export default stateReducer;