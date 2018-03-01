// ****** THIS REDUCER IS A DIFFERENT FORMAT BECAUSE OF LAZY LOADING
// ****** IF LAZY LOADING IS NOT USED, THE FORMAT CAN BE THE SAME AS OTHER REDUCERS

// *** ^^ required for ngrx
import { Action } from '@ngrx/store';

import {
    TrainingActions,
    SET_AVAILABLE_TRAININGS,
    SET_FINISHED_TRAININGS,
    START_TRAINING,
    STOP_TRAINING
} from './training.actions';
import { Exercise } from './exercise.model';
import * as fromRoot from '../app.reducer';

export interface TrainingState {
    availableExercises: Exercise[];
    finishedExercises: Exercise[];
    activeTraining: Exercise;
}
// ^^ this is the type of this reducer

export interface State extends fromRoot.State {
    training: TrainingState;
}

const initialState: TrainingState = {
    availableExercises: [],
    finishedExercises: [],
    activeTraining: null
};

export function authReducer(state = initialState, action: TrainingActions) {
    switch (action.type) {
        case SET_AVAILABLE_TRAININGS:
            return {
                ...state,
                // *** ^^ required for ngrx - this distributes the old state so that there aren't missing properties
                availableExercises: action.payload
                // ^^ this only overrides the availableExercises property of
                // the old state property (the '...' operator returns a new property)
            };
        case SET_FINISHED_TRAININGS:
            return {
                ...state,
                finishedExercises: action.payload
            };
        case START_TRAINING:
            return {
                ...state,
                activeTraining: action.payload
            };
        case STOP_TRAINING:
            return {
                ...state,
                activeTraining: null
            };
        default: {
            return state;
        }
    }
}

export const getAvailableExercises = (state: TrainingState) => state.availableExercises;
// ^^ this allows the parent reducer to have quick access to the availableExercises portion of state
export const getFinishedExercises = (state: TrainingState) => state.finishedExercises;
export const getActiveTraining = (state: TrainingState) => state.activeTraining;

