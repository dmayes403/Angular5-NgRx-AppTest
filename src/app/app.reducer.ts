// *** required for ngrx - this file is used to merge reducers
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUi from './shared/ui.reducer';

export interface State {
    ui: fromUi.State
}

export const reducers: ActionReducerMap<State> = {
    ui: fromUi.uiReducer
    // ^^ ui is of type uiReducer function from the ui.reducer file (fromUi)
};

export const getUiState = createFeatureSelector<fromUi.State>('ui')
// ^^ this allows us to quickly get the ui slice from the full reducer
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading)
// ^^ this calls getUiState to get that slice of reducers, and then the second
// value is to call a function from within the reducer file that returns a portion
// of the state. In this case `getIsLoading` returns `state.isLoading`