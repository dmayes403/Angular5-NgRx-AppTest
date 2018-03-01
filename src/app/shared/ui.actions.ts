import { Action } from '@ngrx/store';

export const START_LOADING = '[UI] Start Loading';
export const STOP_LOADING = '[UI] Stop Loading';
// ^^ bracket naming convention is to signify what reducer it belongs to

export class StartLoading implements Action {
    readonly type = START_LOADING;
}

export class StopLoading implements Action {
    readonly type = STOP_LOADING;
}

export type UIActions = StartLoading | StopLoading;

// the export of classes is to easily get type matching and autocomplete help
