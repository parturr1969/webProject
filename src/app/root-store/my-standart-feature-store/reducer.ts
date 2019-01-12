import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';


export function featureReducer(state = initialState, action: Actions): State {
  if (action.type === ActionTypes.LOGIN_REQUEST) {
    return {
      ...state,
      error: null,
      isLoading: true
    };
  } else if (action.type === ActionTypes.LOGIN_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      error: null,
      isLoading: false,
    };
  } else if (action.type !== ActionTypes.LOGIN_FAILURE) {
    {
      return state;
    }
  } else {
    return {
      ...state,
      error: action.payload.error,
      isLoading: false
    };
  }
}
