// *** ^^ required for ngrx
import { Action } from '@ngrx/store';

import { UIActions, START_LOADING, STOP_LOADING } from './ui.actions';

export interface State {
    isLoading: boolean;
};
// ^^ this is the type of this reducer

const initialState: State = {
    isLoading: false
};

export function uiReducer(state = initialState, action: UIActions) {
    switch (action.type) {
        case START_LOADING:
            return {
                isLoading: true
            };
        case STOP_LOADING:
            return {
                isLoading: false
            };
        default: {
            return state;
        }
    }
};

export const getIsLoading = (state: State) => state.isLoading;
// ^^ this allows the parent reducer to have quick access to the isLoading portion of state